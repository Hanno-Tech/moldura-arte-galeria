/**
 * @fileoverview
 * Este arquivo contém a estrutura de dados e a lista de obras de arte da galeria.
 * Para adicionar uma nova obra, siga os passos abaixo:
 *
 * 1. Faça o upload das imagens da obra para o Cloudinary.
 * 2. Adicione uma tag comum a todas as imagens da mesma obra (ex: "obra_8").
 * 3. Copie a URL da imagem principal (capa) da obra.
 * 4. Adicione um novo objeto ao array `artworks` abaixo, preenchendo todos os campos:
 *    - `id`: Um identificador único (string).
 *    - `title`: O título da obra.
 *    - `artist`: O nome do artista.
 *    - `price`: O preço da obra (número).
 *    - `type`: A técnica utilizada (ex: "Pintura a óleo").
 *    - `coverImage`: A URL da imagem principal que você copiou do Cloudinary.
 *    - `tag`: A tag que você usou para agrupar as imagens no Cloudinary.
 *    - `images`: Deixe como um array vazio `[]`. Ele será preenchido dinamicamente.
 *    - `description`: Uma breve descrição da obra.
 *    - `year` (opcional): O ano de criação da obra.
 *
 * O sistema buscará automaticamente todas as imagens associadas à `tag` na página de detalhes da obra.
 */

export type Artwork = {
  id: string;
  title: string;
  artist: string;
  price: number;
  type: string;
  coverImage: string; // Imagem principal para cards e listagens
  tag: string; // Tag usada no Cloudinary para buscar o restante das imagens
  images: string[]; // Manteremos a propriedade para compatibilidade, mas ela será preenchida dinamicamente
  description: string;
  year?: number;
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 12000,
    type: "Pintura a óleo",
    coverImage: "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134732/mag/obra_1/IMG_6828-39_a2a2c6d83a.webp",
    tag: "obra_1",
    images: [], // Será preenchido dinamicamente
    description:
      "Zélio Andrezzo, nascido em Florianópolis, Santa Catarina, em 1948, é um renomado artista plástico brasileiro cuja obra se destaca pela maestria na pintura figurativa e retratista...",
    year: 2017,
  },
  {
    id: "2",
    title: "A Deusa da Fertilidade",
    artist: "Vera Sabino",
    price: 32000,
    type: "Acrílico Sobre Eucatex",
    coverImage: "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134734/mag/obra_2/teta_742c8d5093.jpg",
    tag: "obra_2",
    images: [],
    description:
      "Vera Sabino, renomada artista plástica e folclorista brasileira, nasceu em 2 de novembro de 1949, em Florianópolis, Santa Catarina...",
  },
  {
    id: "3",
    title: "Pôr do Sol do Paraná",
    artist: "Sidney Mariano",
    price: 3900,
    type: "Acrílico Sobre Tela",
    coverImage: "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134736/mag/obra_3/CAPA_8295f543d8.jpg",
    tag: "obra_3",
    images: [],
    description:
      "Sidney Mariano, renomado artista plástico brasileiro, nasceu em 29 de janeiro de 1944, na cidade de Ponta Grossa, Paraná...",
  },
  {
    id: "4",
    title: "Reynaldo Manzke",
    artist: "Reynaldo Manzke",
    price: 19000,
    type: "Óleo Sobre Eucatex",
    coverImage: "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134740/mag/obra_4/capa_22108d4b31.webp",
    tag: "obra_4",
    images: [],
    description:
      "Reynaldo Manzke (1906-1980) foi um proeminente pintor brasileiro, reconhecido por sua maestria na representação de paisagens e marinhas...",
  },
  {
    id: "5",
    title: "Barcos do Maranhão",
    artist: "Raimundo Botelho",
    price: 6900,
    type: "Óleo Sobre Eucatex",
    coverImage: "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134742/mag/obra_5/capa_1f3de30939.webp",
    tag: "obra_5",
    images: [],
    description:
      "Raimundo Honório Botêlho Neto, nascido em 9 de fevereiro de 1946, na pitoresca cidade de Viana, Maranhão...",
  },
  {
    id: "6",
    title: "Paisagem Vinícola em Amarante - Portugal",
    artist: "Paulo Marinho",
    price: 25000,
    type: "Óleo Sobre Tela",
    coverImage: "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134744/mag/obra_6/capa_23d4c82c6a.webp",
    tag: "obra_6",
    images: [],
    description:
      "Paulo Marinho (Rio de Janeiro, 5 de dezembro de 1944 - Rio de Janeiro, 17 de outubro de 2014) foi um pintor, desenhista e professor brasileiro renomado...",
  },
  {
    id: "7",
    title: "Paisagem Vinícola em Amarante - Portugal",
    artist: "Paulo Marinho",
    price: 25000,
    type: "Óleo Sobre Tela",
    coverImage: "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134746/mag/obra_7/capa_55025735c0.jpg",
    tag: "obra_7",
    images: [],
    description:
      "Paulo Marinho (Rio de Janeiro, 5 de dezembro de 1944 - Rio de Janeiro, 17 de outubro de 2014) foi um pintor, desenhista e professor brasileiro renomado...",
  },
];
