import teta from "@/assets//obras/obra_2/teta.jpg";
import teta2 from "@/assets/obras/obra_2/teta2.jpg";
import teta3 from "@/assets/obras/obra_2/teta3.jpg";
import obra1 from "@/assets/obras/obra_1/IMG_6828-39.webp";
import obra1_1 from "@/assets/obras/obra_1/IMG_6826-37.webp";
import obra1_2 from "@/assets/obras/obra_1/IMG_6827-38_1.webp";
import obra1_3 from "@/assets/obras/obra_1/IMG_6825-36.webp";
import obra1_4 from "@/assets/obras/obra_1/IMG_6829-40.webp";
import obra3 from "@/assets/obras/obra_3/CAPA.jpg";
import obra3_1 from "@/assets/obras/obra_3/IMG_6857-68.jpg";
import obra3_2 from "@/assets/obras/obra_3/IMG_6858-69.jpg";
import obra3_3 from "@/assets/obras/obra_3/IMG_6859-70.jpg";
import obra3_4 from "@/assets/obras/obra_3/IMG_6860-71.jpg";
import obra4 from "@/assets/obras/obra_4/capa.webp";
import obra4_1 from "@/assets/obras/obra_4/IMG_7053-125.jpg";
import obra4_2 from "@/assets/obras/obra_4/IMG_7054-126.jpg";
import obra4_3 from "@/assets/obras/obra_4/IMG_7055-127.jpg";
import obra4_4 from "@/assets/obras/obra_4/IMG_7057-129.jpg";
import obra5 from "@/assets/obras/obra_5/capa.webp";
import obra5_1 from "@/assets/obras/obra_5/IMG_7118-23.webp";
import obra5_2 from "@/assets/obras/obra_5/IMG_7119-24.webp";
import obra5_3 from "@/assets/obras/obra_5/IMG_7120-25.webp";
import obra6 from "@/assets/obras/obra_6/capa.webp";
import obra6_1 from "@/assets/obras/obra_6/IMG_7028-100.webp";
import obra6_2 from "@/assets/obras/obra_6/IMG_7029-101.webp";
import obra6_3 from "@/assets/obras/obra_6/IMG_7030-102.webp";
import obra6_4 from "@/assets/obras/obra_6/IMG_7032-104.webp";
import obra7 from "@/assets/obras/obra_7/capa.jpg";
import obra7_1 from "@/assets/obras/obra_7/IMG_7095-1.jpg";
import obra7_2 from "@/assets/obras/obra_7/IMG_7096-2.jpg";
import obra7_3 from "@/assets/obras/obra_7/IMG_7097-3.jpg";
import obra7_4 from "@/assets/obras/obra_7/IMG_7099-5.jpg";

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
    images: [obra1, obra1_1, obra1_2, obra1_3, obra1_4],
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
    images: [teta, teta2, teta3],
    description:
      "Vera Sabino, renomada artista plástica e folclorista brasileira, nasceu em 2 de novembro de 1949, em Florianópolis, Santa Catarina. Autodidata, ela desenvolveu um estilo artístico único, profundamente enraizado no folclore e na cultura de sua terra natal.",
  },
  {
    id: "3",
    title: "Pôr do Sol do Paraná",
    artist: "Sidney Mariano",
    price: 3900,
    type: "Acrílico Sobre Tela",
    images: [obra3, obra3_1, obra3_2, obra3_3, obra3_4],
    description:
      "Sidney Mariano, renomado artista plástico brasileiro, nasceu em 29 de janeiro de 1944, na cidade de Ponta Grossa, Paraná. Desde muito jovem, aos 12 anos, Mariano já demonstrava um profundo interesse e talento para a pintura e o desenho, marcando o início de uma jornada artística que se estenderia por décadas.",
  },
  {
    id: "4",
    title: "Reynaldo Manzke",
    artist: "Reynaldo Manzke",
    price: 19000,
    type: "Óleo Sobre Eucatex",
    images: [obra4, obra4_1, obra4_2, obra4_3, obra4_4],
    description:
      "Reynaldo Manzke (1906-1980) foi um proeminente pintor brasileiro, reconhecido por sua maestria na representação de paisagens e marinhas, além de ser um dos pioneiros na utilização da técnica do espatulado no Brasil. Sua obra transcende a mera representação visual, capturando a essência dos costumes, tradições e a vida simples do povo brasileiro, deixando um legado artístico que eterniza uma época e um modo de vida que, em grande parte, se transformaram ao longo do tempo.",
  },
  {
    id: "5",
    title: "Barcos do Maranhão",
    artist: "Raimundo Botelho",
    price: 6900,
    type: "Óleo Sobre Eucatex",
    images: [obra5, obra5_1, obra5_2, obra5_3],
    description:
      "Raimundo Honório Botêlho Neto, nascido em 9 de fevereiro de 1946, na pitoresca cidade de Viana, Maranhão, é um dos mais proeminentes pintores e desenhistas brasileiros de sua geração. Sua jornada artística, marcada por uma profunda conexão com suas raízes e uma incessante busca pela maestria da luz e da cor, o consolidou como um nome respeitado no cenário das artes plásticas nacionais.",
  },
  {
    id: "6",
    title: "Paisagem Vinícola em Amarante - Portugal",
    artist: "Paulo Marinho",
    price: 25000,
    type: "Óleo Sobre Tela",
    images: [obra6, obra6_1, obra6_2, obra6_3, obra6_4],
    description:
      "Paulo Marinho (Rio de Janeiro, 5 de dezembro de 1944 - Rio de Janeiro, 17 de outubro de 2014) foi um pintor, desenhista e professor brasileiro renomado. Conhecido por sua abordagem autodidata e profunda conexão com a arte, Marinho deixou um legado significativo no cenário artístico nacional e internacional.",
  },
  {
    id: "7",
    title: "Paisagem Vinícola em Amarante - Portugal",
    artist: "Paulo Marinho",
    price: 25000,
    type: "Óleo Sobre Tela",
    images: [obra7, obra7_1, obra7_2, obra7_3, obra7_4],
    description:
      "Paulo Marinho (Rio de Janeiro, 5 de dezembro de 1944 - Rio de Janeiro, 17 de outubro de 2014) foi um pintor, desenhista e professor brasileiro renomado. Conhecido por sua abordagem autodidata e profunda conexão com a arte, Marinho deixou um legado significativo no cenário artístico nacional e internacional.",
  },
];
