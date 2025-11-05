export type Artwork = {
  id: string;
  title: string;
  artist: string;
  price: number;
  type: string;
  images: string[];
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
    images: [
      "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134732/mag/obra_1/IMG_6828-39_a2a2c6d83a.webp",
      "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134731/mag/obra_1/IMG_6826-37_50e3346a06.webp",
      "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134731/mag/obra_1/IMG_6827-38_1_a831514745.webp",
      "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134731/mag/obra_1/IMG_6825-36_49c303f0b0.webp",
      "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134732/mag/obra_1/IMG_6829-40_d6e5c464e8.webp"
    ],
    description:
      "Zélio Andrezzo, nascido em Florianópolis, Santa Catarina, em 1948, é um renomado artista plástico brasileiro cuja obra se destaca pela maestria na pintura figurativa e retratista. Sua jornada artística teve início em 1964, quando se mudou para São Paulo e ingressou na Associação Paulista de Belas Artes, onde aprimorou suas técnicas e consolidou seu estilo.",
    year: 2017,
  },
  {
    id: "2",
    title: "A Deusa da Fertilidade",
    artist: "Vera Sabino",
    price: 32000,
    type: "Acrílico Sobre Eucatex",
    images: [
      "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134734/mag/obra_2/teta_742c8d5093.jpg",
      "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134734/mag/obra_2/teta2_7c41551347.jpg",
      "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134734/mag/obra_2/teta3_538743d1a8.jpg"
    ],
    description:
      "Vera Sabino, renomada artista plástica e folclorista brasileira, nasceu em 2 de novembro de 1949, em Florianópolis, Santa Catarina. Autodidata, ela desenvolveu um estilo artístico único, profundamente enraizado no folclore e na cultura de sua terra natal.",
  },
  {
    id: "3",
    title: "Pôr do Sol do Paraná",
    artist: "Sidney Mariano",
    price: 3900,
    type: "Acrílico Sobre Tela",
    images: [
      "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134736/mag/obra_3/CAPA_8295f543d8.jpg",
      "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134736/mag/obra_3/IMG_6857-68_61e1f181f7.jpg",
      "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134736/mag/obra_3/IMG_6858-69_811e98d951.jpg",
      "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134737/mag/obra_3/IMG_6859-70_56c70503f3.jpg",
      "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134737/mag/obra_3/IMG_6860-71_2e77b4d1b3.jpg"
    ],
    description:
      "Sidney Mariano, renomado artista plástico brasileiro, nasceu em 29 de janeiro de 1944, na cidade de Ponta Grossa, Paraná. Desde muito jovem, aos 12 anos, Mariano já demonstrava um profundo interesse e talento para a pintura e o desenho, marcando o início de uma jornada artística que se estenderia por décadas.",
  },
  {
    id: "4",
    title: "Reynaldo Manzke",
    artist: "Reynaldo Manzke",
    price: 19000,
    type: "Óleo Sobre Eucatex",
    images: [
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134740/mag/obra_4/capa_22108d4b31.webp",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134739/mag/obra_4/IMG_7053-125_48e77c44e9.jpg",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134739/mag/obra_4/IMG_7054-126_7db0733a1e.jpg",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134739/mag/obra_4/IMG_7055-127_d5a711b619.jpg",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134740/mag/obra_4/IMG_7057-129_02377b065a.jpg"
    ],
    description:
      "Reynaldo Manzke (1906-1980) foi um proeminente pintor brasileiro, reconhecido por sua maestria na representação de paisagens e marinhas, além de ser um dos pioneiros na utilização da técnica do espatulado no Brasil. Sua obra transcende a mera representação visual, capturando a essência dos costumes, tradições e a vida simples do povo brasileiro, deixando um legado artístico que eterniza uma época e um modo de vida que, em grande parte, se transformaram ao longo do tempo.",
  },
  {
    id: "5",
    title: "Barcos do Maranhão",
    artist: "Raimundo Botelho",
    price: 6900,
    type: "Óleo Sobre Eucatex",
    images: [
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134742/mag/obra_5/capa_1f3de30939.webp",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134741/mag/obra_5/IMG_7118-23_3b0181519d.webp",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134741/mag/obra_5/IMG_7119-24_28e3604d49.webp",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134742/mag/obra_5/IMG_7120-25_22e0e0a514.webp"
    ],
    description:
      "Raimundo Honório Botêlho Neto, nascido em 9 de fevereiro de 1946, na pitoresca cidade de Viana, Maranhão, é um dos mais proeminentes pintores e desenhistas brasileiros de sua geração. Sua jornada artística, marcada por uma profunda conexão com suas raízes e uma incessante busca pela maestria da luz e da cor, o consolidou como um nome respeitado no cenário das artes plásticas nacionais.",
  },
  {
    id: "6",
    title: "Paisagem Vinícola em Amarante - Portugal",
    artist: "Paulo Marinho",
    price: 25000,
    type: "Óleo Sobre Tela",
    images: [
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134744/mag/obra_6/capa_23d4c82c6a.webp",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134743/mag/obra_6/IMG_7028-100_70b3b28b6d.webp",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134743/mag/obra_6/IMG_7029-101_e38343715c.webp",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134744/mag/obra_6/IMG_7030-102_001a1c93a0.webp",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134744/mag/obra_6/IMG_7032-104_f110756598.webp"
    ],
    description:
      "Paulo Marinho (Rio de Janeiro, 5 de dezembro de 1944 - Rio de Janeiro, 17 de outubro de 2014) foi um pintor, desenhista e professor brasileiro renomado. Conhecido por sua abordagem autodidata e profunda conexão com a arte, Marinho deixou um legado significativo no cenário artístico nacional e internacional.",
  },
  {
    id: "7",
    title: "Paisagem Vinícola em Amarante - Portugal",
    artist: "Paulo Marinho",
    price: 25000,
    type: "Óleo Sobre Tela",
    images: [
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134746/mag/obra_7/capa_55025735c0.jpg",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134745/mag/obra_7/IMG_7095-1_0b43534a70.jpg",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134745/mag/obra_7/IMG_7096-2_8a3f8152c9.jpg",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134746/mag/obra_7/IMG_7097-3_1d1f04494c.jpg",
        "https://res.cloudinary.com/dol7hr3h6/image/upload/v1718134746/mag/obra_7/IMG_7099-5_9648a1c93b.jpg"
    ],
    description:
      "Paulo Marinho (Rio de Janeiro, 5 de dezembro de 1944 - Rio de Janeiro, 17 de outubro de 2014) foi um pintor, desenhista e professor brasileiro renomado. Conhecido por sua abordagem autodidata e profunda conexão com a arte, Marinho deixou um legado significativo no cenário artístico nacional e internacional.",
  },
];
