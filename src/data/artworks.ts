import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";

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
    title: "Composição VII",
    artist: "Ana Silva",
    price: 3500,
    type: "Pintura a óleo",
    images: [artwork1, artwork2, artwork3, artwork4, artwork2],
    description:
      "Obra contemporânea que explora a relação entre forma e cor em camadas sutis.",
  },
  {
    id: "2",
    title: "Serra Dourada",
    artist: "Pedro Rocha",
    price: 4200,
    type: "Natureza morta",
    images: [artwork2, artwork3, artwork4, artwork1, artwork3],
    description:
      "Texturas ricas e paleta terrosa que remetem à paisagem brasileira.",
  },
  {
    id: "3",
    title: "Figura com Pássaro",
    artist: "Mana Souza",
    price: 2900,
    type: "Desenho realista",
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
