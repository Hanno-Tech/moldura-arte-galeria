import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

/**
 * Função principal que executa o processo de sincronização.
 */
async function syncImages() {
  console.log('Iniciando a sincronização de imagens do Cloudinary...');

  // Verifica se as variáveis de ambiente necessárias foram configuradas
  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    console.error('Erro: As variáveis de ambiente do Cloudinary não estão definidas.');
    console.error('Por favor, crie um arquivo .env e adicione CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, e CLOUDINARY_API_SECRET.');
    process.exit(1);
  }

  // Configura o SDK do Cloudinary
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
  });

  try {
    // 1. Extrair as tags do arquivo artworks.ts
    const artworksFilePath = path.resolve(process.cwd(), 'src', 'data', 'artworks.ts');
    const artworksFileContent = await fs.readFile(artworksFilePath, 'utf8');

    const tagRegex = /tag:\s*"([^"]+)"/g;
    const tags = [...artworksFileContent.matchAll(tagRegex)].map(match => match[1]);

    if (tags.length === 0) {
      console.warn('Nenhuma tag encontrada em artworks.ts. Processo concluído.');
      return;
    }
    console.log(`Tags encontradas: ${tags.join(', ')}`);

    // 2. Buscar as imagens para cada tag no Cloudinary
    const galleries = {};
    for (const tag of tags) {
      console.log(`Buscando imagens para a tag: ${tag}...`);
      const response = await cloudinary.search
        .expression(`tags=${tag}`)
        .sort_by('public_id', 'asc')
        .max_results(50)
        .execute();

      // Gera URLs otimizadas com múltiplos tamanhos para carregamento progressivo
      // Seguindo as melhores práticas do Cloudinary: https://cloudinary.com/documentation/image_optimization
      galleries[tag] = response.resources.map(resource => {
        // Versão full: limitada a 1920px (Full HD) para evitar imagens muito grandes
        // Usa f_auto (formato automático) e q_auto (qualidade automática)
        // fl_progressive: JPEGs progressivos carregam mais rápido (melhor UX)
        const full = cloudinary.url(resource.public_id, {
          secure: true,
          transformation: [
            { width: 1920, height: 1920, crop: 'limit', fetch_format: 'auto', quality: 'auto', flags: ['progressive'] }
          ]
        });
        
        // Versão large: 1200px para telas grandes
        const large = cloudinary.url(resource.public_id, {
          secure: true,
          transformation: [
            { width: 1200, height: 1200, crop: 'limit', fetch_format: 'auto', quality: 'auto', flags: ['progressive'] }
          ]
        });
        
        // Versão medium: 800px para tablets
        const medium = cloudinary.url(resource.public_id, {
          secure: true,
          transformation: [
            { width: 800, height: 800, crop: 'limit', fetch_format: 'auto', quality: 'auto', flags: ['progressive'] }
          ]
        });
        
        // Versão small: 400px para mobile
        const small = cloudinary.url(resource.public_id, {
          secure: true,
          transformation: [
            { width: 400, height: 400, crop: 'limit', fetch_format: 'auto', quality: 'auto', flags: ['progressive'] }
          ]
        });
        
        // Versão thumbnail: 300px para previews rápidos
        const thumbnail = cloudinary.url(resource.public_id, {
          secure: true,
          transformation: [
            { width: 300, height: 300, crop: 'limit', fetch_format: 'auto', quality: 'auto' }
          ]
        });
        
        // Retorna objeto com múltiplas versões para srcset responsivo
        return {
          full: full,
          large: large,
          medium: medium,
          small: small,
          thumbnail: thumbnail,
          // Mantém compatibilidade com código antigo
          url: full
        };
      });
    }

    // 3. Salvar os resultados em um arquivo JSON
    const outputFilePath = path.resolve(process.cwd(), 'src', 'data', 'image-galleries.json');
    await fs.writeFile(outputFilePath, JSON.stringify(galleries, null, 2));

    // 4. Gerar também versão simplificada para compatibilidade (apenas URLs full)
    const simpleGalleries = {};
    for (const [tag, images] of Object.entries(galleries)) {
      simpleGalleries[tag] = images.map(img => typeof img === 'string' ? img : img.url || img.full);
    }
    const simpleOutputPath = path.resolve(process.cwd(), 'src', 'data', 'image-galleries-simple.json');
    await fs.writeFile(simpleOutputPath, JSON.stringify(simpleGalleries, null, 2));

    console.log(`\nSincronização concluída com sucesso!`);
    console.log(`✅ O arquivo ${outputFilePath} foi criado/atualizado.`);
    console.log(`✅ Versão simplificada salva em ${simpleOutputPath}.`);
    console.log(`📊 Total de ${Object.keys(galleries).length} galerias sincronizadas.`);

  } catch (error) {
    console.error('\nOcorreu um erro durante a sincronização:');
    // Imprime o erro completo para depuração, pois a estrutura pode variar
    console.error(error);
    process.exit(1);
  }
}

syncImages();
