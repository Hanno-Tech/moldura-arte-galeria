import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import teta from "@/assets/teta.jpg";
import teta2 from "@/assets/teta2.jpg";
import teta3 from "@/assets/teta3.jpg";
import flor from "@/assets/flor.jpg";

export type Artwork = {
  id: string;
  title: string;
  artist: string;
  price: number;
  type: string;
  images: string[];
  description: string;
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Sem nome",
    artist: "Zélio Andrezzo",
    price: 12000,
    type: "Pintura a óleo",
    images: [flor, artwork2, artwork3, artwork4, artwork2],
    description:
      "Sem descrição",
  },
  {
    id: "2",
    title: "A Deusa da Fertilidade",
    artist: "Vera Sabino",
    price: 32000,
    type: "Acrílico Sobre Eucatex",
    images: [teta, teta2, teta3],
    description:
      "Sem descrição.",
  },
  {
    id: "3",
    title: "Sem desc",
    artist: "Marlete Tridapalli",
    price: 2900,
    type: "Acrílico Sobre Tela",
    images: [artwork3, artwork1, artwork2, artwork4, artwork1],
    description:
      "Estudo delicado de figura com ênfase em expressões e movimento.",
  },
  {
    id: "4",
    title: "Flores no Jardim",
    artist: "Beatriz Rocha",
    price: 3800,
    type: "Pintura a óleo",
    images: [artwork4, artwork3, artwork2, artwork1, artwork3],
    description:
      "Série floral que combina pinceladas soltas e composição harmoniosa.",
  },
  {
    id: "5",
    title: "Ritmo Terracota",
    artist: "Clara Nunes",
    price: 3100,
    type: "Natureza morta",
    images: [artwork2, artwork4, artwork1, artwork3, artwork4],
    description:
      "Sequência cromática que investiga ritmos e repetições visuais.",
  },
  {
    id: "6",
    title: "Geometrias Suaves",
    artist: "Rafael Dias",
    price: 2700,
    type: "Desenho realista",
    images: [artwork3, artwork2, artwork4, artwork1, artwork2],
    description:
      "Intersecções geométricas com transições de cor delicadas.",
  },
];
