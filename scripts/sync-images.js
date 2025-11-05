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

      galleries[tag] = response.resources.map(resource =>
        cloudinary.url(resource.public_id, {
          secure: true,
          transformation: [{ fetch_format: 'auto', quality: 'auto' }]
        })
      );
    }

    // 3. Salvar os resultados em um arquivo JSON
    const outputFilePath = path.resolve(process.cwd(), 'src', 'data', 'image-galleries.json');
    await fs.writeFile(outputFilePath, JSON.stringify(galleries, null, 2));

    console.log(`\nSincronização concluída com sucesso!`);
    console.log(`✅ O arquivo ${outputFilePath} foi criado/atualizado.`);

  } catch (error) {
    console.error('\nOcorreu um erro durante a sincronização:');
    // Imprime o erro completo para depuração, pois a estrutura pode variar
    console.error(error);
    process.exit(1);
  }
}

syncImages();
