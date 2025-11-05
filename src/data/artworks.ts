/**
 * @fileoverview
 * Este arquivo contém a estrutura de dados e a lista de obras de arte da galeria.
 * O sistema é totalmente automatizado com base em uma convenção de nomenclatura no Cloudinary.
 *
 * --- INSTRUÇÕES PARA ADICIONAR UMA NOVA OBRA ---
 *
 * 1. NO CLOUDINARY:
 *    - Crie uma pasta para a nova obra. Ex: `mag/obra_8`.
 *    - Faça o upload das imagens da obra para essa pasta, nomeando-as sequencialmente: `1.jpg`, `2.jpg`, `3.jpg`, etc.
 *    - Selecione todas as imagens que você subiu e adicione uma tag comum a elas. A tag DEVE ser o nome da obra no plural. Ex: "obra_8".
 *
 * 2. NESTE ARQUIVO (`artworks.ts`):
 *    - Adicione um novo objeto ao array `artworks` abaixo.
 *    - Preencha apenas os campos de texto: `id`, `title`, `artist`, `price`, `type`, `description`, e `year`.
 *    - No campo `tag`, coloque a tag que você usou no Cloudinary (ex: "obra_8").
 *
 * É SÓ ISSO! O código irá gerar a URL da imagem de capa e buscar a galeria completa automaticamente.
 */

export type Artwork = {
  id: string;
  title: string;
  artist: string;
  price: number;
  type: string;
  tag: string; // Tag usada no Cloudinary para identificar a obra (ex: "obra_1")
  images: string[]; // Será preenchido dinamicamente pela aplicação
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
    tag: "obra_1",
    images: [], // Preenchido dinamicamente
    description:
      "Zélio Andrezzo, nascido em Florianópolis, Santa Catarina, em 1948...",
    year: 2017,
  },
  {
    id: "2",
    title: "A Deusa da Fertilidade",
    artist: "Vera Sabino",
    price: 32000,
    type: "Acrílico Sobre Eucatex",
    tag: "obra_2",
    images: [],
    description:
      "Vera Sabino, renomada artista plástica e folclorista brasileira...",
  },
  {
    id: "3",
    title: "Pôr do Sol do Paraná",
    artist: "Sidney Mariano",
    price: 3900,
    type: "Acrílico Sobre Tela",
    tag: "obra_3",
    images: [],
    description:
      "Sidney Mariano, renomado artista plástico brasileiro...",
  },
  {
    id: "4",
    title: "Reynaldo Manzke",
    artist: "Reynaldo Manzke",
    price: 19000,
    type: "Óleo Sobre Eucatex",
    tag: "obra_4",
    images: [],
    description:
      "Reynaldo Manzke (1906-1980) foi um proeminente pintor brasileiro...",
  },
  {
    id: "5",
    title: "Barcos do Maranhão",
    artist: "Raimundo Botelho",
    price: 6900,
    type: "Óleo Sobre Eucatex",
    tag: "obra_5",
    images: [],
    description:
      "Raimundo Honório Botêlho Neto, nascido em 9 de fevereiro de 1946...",
  },
  {
    id: "6",
    title: "Paisagem Vinícola em Amarante - Portugal",
    artist: "Paulo Marinho",
    price: 25000,
    type: "Óleo Sobre Tela",
    tag: "obra_6",
    images: [],
    description:
      "Paulo Marinho (Rio de Janeiro, 5 de dezembro de 1944 - Rio de Janeiro, 17 de outubro de 2014)...",
  },
  {
    id: "7",
    title: "Paisagem Vinícola em Amarante - Portugal",
    artist: "Paulo Marinho",
    price: 25000,
    type: "Óleo Sobre Tela",
    tag: "obra_7",
    images: [],
    description:
      "Paulo Marinho (Rio de Janeiro, 5 de dezembro de 1944 - Rio de Janeiro, 17 de outubro de 2014)...",
  },
];
