/**
 * @fileoverview
 * Este arquivo contém funções utilitárias para interagir com o Cloudinary.
 */

// Substitua 'dlnkin4nf' pelo nome da sua nuvem Cloudinary.
const CLOUD_NAME = "dlnkin4nf";

// Configurações de transformação para otimização de imagem.
// f_auto: formato automático (WebP, AVIF)
// q_auto: qualidade automática
const OPTIMIZATION_PARAMS = "f_auto,q_auto";

/**
 * Gera a URL da imagem de capa de uma obra com base em sua tag.
 * Segue a convenção de que a imagem de capa é sempre nomeada como "1".
 *
 * @param tag - A tag da obra de arte (ex: "obra_1").
 * @returns A URL completa e otimizada da imagem de capa.
 */
export const getCoverImageUrl = (tag: string): string => {
  if (!tag) {
    // Retorna uma URL de placeholder se a tag não for fornecida.
    return `https://placehold.co/800x600/eee/ccc?text=Imagem+Indisponível`;
  }
  // Monta o public_id com base na convenção de nomenclatura.
  const publicId = `mag/${tag}/1`;

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${OPTIMIZATION_PARAMS}/${publicId}`;
};
