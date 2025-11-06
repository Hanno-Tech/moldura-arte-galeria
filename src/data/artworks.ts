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
    title: "Bahia",
    artist: "Willy Zumblick",
    price: null,
    type: "Pintura a óleo",
    tag: "obra_1",
    images: [],
    description: "Willy Zumblick - Biografia",
    year: 1956
  },
  {
    id: "2",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 12000,
    type: "Pintura a óleo",
    tag: "obra_2",
    images: [],
    description: "Zélio Andrezzo: Uma Trajetória Artística de Destaque",
    year: 2017
  },
  {
    id: "3",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 6700,
    type: "Pintura a óleo",
    tag: "obra_3",
    images: [],
    description: "Zélio Andrezzo: Uma Trajetória Artística de Destaque",
    year: 2018
  },
  {
    id: "4",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 6800,
    type: "Pintura a óleo",
    tag: "obra_4",
    images: [],
    description: "Zélio Andrezzo: Uma Trajetória Artística de Destaque",
    year: null
  },
  {
    id: "5",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 6300,
    type: "Pintura a óleo",
    tag: "obra_5",
    images: [],
    description: "Zélio Andrezzo: Uma Trajetória Artística de Destaque",
    year: null
  },
  {
    id: "6",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 2800,
    type: "Pintura a óleo",
    tag: "obra_6",
    images: [],
    description: "Zélio Andrezzo: Uma Trajetória Artística de Destaque",
    year: null
  },
  {
    id: "7",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 2800,
    type: "Pintura a óleo",
    tag: "obra_7",
    images: [],
    description: "Zélio Andrezzo: Uma Trajetória Artística de Destaque",
    year: null
  },
  {
    id: "8",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 6800,
    type: "Pintura a óleo",
    tag: "obra_8",
    images: [],
    description: "Zélio Andrezzo: Uma Trajetória Artística de Destaque",
    year: null
  },
  {
    id: "9",
    title: "António Guimarães",
    artist: "António Guimarães",
    price: 2100,
    type: "Pintura a óleo",
    tag: "obra_9",
    images: [],
    description: "António Guimarães: Uma Vida Dedicada à Arte",
    year: 2013
  },
  {
    id: "10",
    title: "A Deusa da Fertilidade",
    artist: "Vera Sabino",
    price: 32000,
    type: "Acrílico",
    tag: "obra_10",
    images: [],
    description: "Biografia de Vera Sabino",
    year: null
  },
  {
    id: "11",
    title: "Mulher II",
    artist: "Valda Costa",
    price: 9900,
    type: "Acrílico",
    tag: "obra_11",
    images: [],
    description: "Biografia de Valda Costa",
    year: 1991
  },
  {
    id: "12",
    title: "Valda Costa",
    artist: "Valda Costa",
    price: 11200,
    type: "Acrílico",
    tag: "obra_12",
    images: [],
    description: "Biografia de Valda Costa",
    year: 1991
  },
  {
    id: "13",
    title: "Marlete Tridapalli",
    artist: "Marlete Tridapalli",
    price: 4100,
    type: "Acrílico",
    tag: "obra_13",
    images: [],
    description: "Biografia de Marlete Tridapalli",
    year: null
  },
  {
    id: "14",
    title: "Marlete Tridapalli",
    artist: "Marlete Tridapalli",
    price: 2900,
    type: "Acrílico",
    tag: "obra_14",
    images: [],
    description: "Biografia de Marlete Tridapalli",
    year: null
  },
  {
    id: "15",
    title: "Rosas",
    artist: "Marlete Tridapalli",
    price: 2300,
    type: "Acrílico",
    tag: "obra_15",
    images: [],
    description: "Biografia de Marlete Tridapalli",
    year: null
  },
  {
    id: "16",
    title: "Marlete Tridapalli",
    artist: "Marlete Tridapalli",
    price: 1900,
    type: "Acrílico",
    tag: "obra_16",
    images: [],
    description: "Biografia de Marlete Tridapalli",
    year: null
  },
  {
    id: "17",
    title: "Marlete Tridapalli",
    artist: "Marlete Tridapalli",
    price: 4900,
    type: "Acrílico",
    tag: "obra_17",
    images: [],
    description: "Biografia de Marlete Tridapalli",
    year: null
  },
  {
    id: "18",
    title: "Marlete Tridapalli",
    artist: "Marlete Tridapalli",
    price: 2200,
    type: "Acrílico",
    tag: "obra_18",
    images: [],
    description: "Biografia de Marlete Tridapalli",
    year: null
  },
  {
    id: "19",
    title: "Marlete Tridapalli",
    artist: "Marlete Tridapalli",
    price: 2500,
    type: "Acrílico",
    tag: "obra_19",
    images: [],
    description: "Biografia de Marlete Tridapalli",
    year: null
  },
  {
    id: "20",
    title: "Silvio Pleticos",
    artist: "Silvio Pleticos",
    price: 500000,
    type: "Pintura a óleo",
    tag: "obra_20",
    images: [],
    description: "biografia_silvio_pleticos",
    year: null
  },
  {
    id: "21",
    title: "Pôr do Sol do Paraná",
    artist: "Sidney Mariano",
    price: 3900,
    type: "Técnica Mista",
    tag: "obra_21",
    images: [],
    description: "biografia_sidney_mariano",
    year: 2007
  },
  {
    id: "22",
    title: "Sidney Mariano",
    artist: "Sidney Mariano",
    price: 5600,
    type: "Técnica Mista",
    tag: "obra_22",
    images: [],
    description: "biografia_sidney_mariano",
    year: 2005
  },
  {
    id: "23",
    title: "Sergio Bonson",
    artist: "Sergio Bonson",
    price: 5500,
    type: null,
    tag: "obra_23",
    images: [],
    description: "Biografia de Sérgio Bonson",
    year: 2005
  },
  {
    id: "24",
    title: "Sandra Mello",
    artist: "Sandra Mello",
    price: 3200,
    type: null,
    tag: "obra_24",
    images: [],
    description: "Sandra Mello: Uma Biografia Artística",
    year: 2006
  },
  {
    id: "25",
    title: "RS Carvalho",
    artist: "RS Carvalho",
    price: 2400,
    type: null,
    tag: "obra_25",
    images: [],
    description: "Biografia de R",
    year: 1999
  },
  {
    id: "26",
    title: "Reynaldo Manzke",
    artist: "Reynaldo Manzke",
    price: 19000,
    type: "Pintura a óleo",
    tag: "obra_26",
    images: [],
    description: "Reynaldo Manzke: Um Mestre da Pintura Brasileira",
    year: 1968
  },
  {
    id: "27",
    title: "A Última Ceia de Canaã",
    artist: "Raul Taurant Delavy",
    price: 17000,
    type: "Pintura a óleo",
    tag: "obra_27",
    images: [],
    description: "Biografia de Raul Taurant Delavy",
    year: null
  },
  {
    id: "28",
    title: "Barcos do Maranhão",
    artist: "Raimundo Botelho",
    price: 6900,
    type: "Pintura a óleo",
    tag: "obra_28",
    images: [],
    description: "Raimundo Honório Botêlho Neto: Uma Vida Dedicada à Arte",
    year: 1997
  },
  {
    id: "29",
    title: "Paisagem Vinícola em Amarante - Portugal",
    artist: "Paulo Marinho",
    price: 25000,
    type: "Pintura a óleo",
    tag: "obra_29",
    images: [],
    description: "Biografia de Paulo Marinho",
    year: 1984
  },
  {
    id: "30",
    title: "Ovelhas no Celeiro",
    artist: "Paulo Marinho",
    price: 25000,
    type: "Pintura a óleo",
    tag: "obra_30",
    images: [],
    description: "Biografia de Paulo Marinho",
    year: 1992
  },
  {
    id: "31",
    title: "Carro de Boi",
    artist: "Paulo Marinho",
    price: 6900,
    type: "Pintura a óleo",
    tag: "obra_31",
    images: [],
    description: "Biografia de Paulo Marinho",
    year: 1982
  },
  {
    id: "32",
    title: "Nilton Zanotti",
    artist: "Nilton Zanotti",
    price: 6900,
    type: null,
    tag: "obra_32",
    images: [],
    description: "Nilton Zanotti: Uma Biografia Abrangente",
    year: null
  },
  {
    id: "33",
    title: "Nicson",
    artist: "Nicson",
    price: 1800,
    type: "Pintura a óleo",
    tag: "obra_33",
    images: [],
    description: "João Feliciano (Nicson): O Talentoso Artista da Espátula",
    year: 2001
  },
  {
    id: "34",
    title: "Nicson",
    artist: "Nicson",
    price: 1800,
    type: "Pintura a óleo",
    tag: "obra_34",
    images: [],
    description: "João Feliciano (Nicson): O Talentoso Artista da Espátula",
    year: 2001
  },
  {
    id: "35",
    title: "Nicson",
    artist: "Nicson",
    price: 1800,
    type: "Pintura a óleo",
    tag: "obra_35",
    images: [],
    description: "João Feliciano (Nicson): O Talentoso Artista da Espátula",
    year: 2001
  },
  {
    id: "36",
    title: "Monteiro Prestes",
    artist: "Monteiro Prestes",
    price: 2550,
    type: "Pintura a óleo",
    tag: "obra_36",
    images: [],
    description: "Biografia de Monteiro Prestes",
    year: null
  },
  {
    id: "37",
    title: "Na Praça",
    artist: "Miriam Postal",
    price: 1100,
    type: null,
    tag: "obra_37",
    images: [],
    description: "Miriam Postal: A Alma Brasileira em Cores Vibrantes",
    year: 2015
  },
  {
    id: "38",
    title: "Mir Sestrem",
    artist: "Mir Sestrem",
    price: 2900,
    type: null,
    tag: "obra_38",
    images: [],
    description: "Mir Sestrem: A Arte em Aglutinado Celular de Madeira Estratificada",
    year: 2004
  },
  {
    id: "39",
    title: "Penélope",
    artist: "Marcos Leal",
    price: null,
    type: "Acrílico",
    tag: "obra_39",
    images: [],
    description: "Marcos Leal: Biografia do Artista Plástico",
    year: 2023
  },
  {
    id: "40",
    title: "Mademoiselles",
    artist: "Marcos Leal",
    price: 3500,
    type: "Acrílico",
    tag: "obra_40",
    images: [],
    description: "Marcos Leal: Biografia do Artista Plástico",
    year: 2022
  },
  {
    id: "41",
    title: "Céu Azul",
    artist: "Marcos Leal",
    price: 1700,
    type: "Acrílico",
    tag: "obra_41",
    images: [],
    description: "Marcos Leal: Biografia do Artista Plástico",
    year: 2016
  },
  {
    id: "42",
    title: "Marcos Leal",
    artist: "Marcos Leal",
    price: 1580,
    type: "Acrílico",
    tag: "obra_42",
    images: [],
    description: "Marcos Leal: Biografia do Artista Plástico",
    year: null
  },
  {
    id: "43",
    title: "Marco Antônio Moreira",
    artist: "Marco Antônio Moreira",
    price: 5900,
    type: null,
    tag: "obra_43",
    images: [],
    description: "Biografia: Marco Antônio Moreira",
    year: 2002
  },
  {
    id: "44",
    title: "Mângelo",
    artist: "Mângelo",
    price: 2400,
    type: null,
    tag: "obra_44",
    images: [],
    description: "Mângelo: Um Artista Plástico Brasileiro",
    year: 1995
  },
  {
    id: "45",
    title: "Luiz Si",
    artist: "Luiz Si",
    price: 2900,
    type: "Pintura a óleo",
    tag: "obra_45",
    images: [],
    description: "Luiz Si: Uma Vida Dedicada à Arte Catarinense",
    year: 2009
  },
  {
    id: "46",
    title: "Luiz Si",
    artist: "Luiz Si",
    price: 1400,
    type: "Pintura a óleo",
    tag: "obra_46",
    images: [],
    description: "Luiz Si: Uma Vida Dedicada à Arte Catarinense",
    year: 1984
  },
  {
    id: "47",
    title: "Luiz Si",
    artist: "Luiz Si",
    price: 1400,
    type: "Pintura a óleo",
    tag: "obra_47",
    images: [],
    description: "Luiz Si: Uma Vida Dedicada à Arte Catarinense",
    year: 1982
  },
  {
    id: "48",
    title: "Luiz Carlos Albertini",
    artist: "Luiz Carlos Albertini",
    price: 6900,
    type: "Pintura a óleo",
    tag: "obra_48",
    images: [],
    description: "Luiz Carlos Albertini: Uma Biografia Artística",
    year: 1992
  },
  {
    id: "49",
    title: "Luiz Carlos Albertini",
    artist: "Luiz Carlos Albertini",
    price: 6750,
    type: "Pintura a óleo",
    tag: "obra_49",
    images: [],
    description: "Luiz Carlos Albertini: Uma Biografia Artística",
    year: 1994
  },
  {
    id: "50",
    title: "Arlequim",
    artist: "Lúcia Horst Calluf",
    price: 1900,
    type: "Pintura a óleo",
    tag: "obra_50",
    images: [],
    description: "biografia_lucia_horst_calluf",
    year: 1993
  },
  {
    id: "51",
    title: "Cinzas Vulcânicas",
    artist: "Kenji Fukuda",
    price: 30000,
    type: "Técnica Mista",
    tag: "obra_51",
    images: [],
    description: "biografia_kenji_fukuda",
    year: 2020
  },
  {
    id: "52",
    title: "João calixto",
    artist: "João calixto",
    price: 4600,
    type: "Pintura a óleo",
    tag: "obra_52",
    images: [],
    description: "João Batista Calixto de Jesus: Uma Biografia Artística",
    year: null
  },
  {
    id: "53",
    title: "Cabo Frio",
    artist: "Jean Guillaume",
    price: 1800,
    type: "Pintura a óleo",
    tag: "obra_53",
    images: [],
    description: "Biografia de Jean Guillaume (Jean Jules Joseph Guillaume)",
    year: 1969
  },
  {
    id: "54",
    title: "Jair Martins",
    artist: "Jair Martins",
    price: 3400,
    type: null,
    tag: "obra_54",
    images: [],
    description: "Biografia de Jair Martins",
    year: 2017
  },
  {
    id: "55",
    title: "Ivo Silva",
    artist: "Ivo Silva",
    price: 1800,
    type: "Acrílico",
    tag: "obra_55",
    images: [],
    description: "Ivo Silva: Uma Jornada Artística entre o Real e o Fantástico",
    year: 1986
  },
  {
    id: "56",
    title: "O Saxofonista",
    artist: "Inos Corradin",
    price: 17000,
    type: "Pintura a óleo",
    tag: "obra_56",
    images: [],
    description: "Inos Corradin: Uma Vida de Arte e Expressão",
    year: null
  },
  {
    id: "57",
    title: "Idesio Leal",
    artist: "Idesio Leal",
    price: 2700,
    type: null,
    tag: "obra_57",
    images: [],
    description: "biografia_idesio_leal",
    year: 2005
  },
  {
    id: "58",
    title: "Início de Viagem",
    artist: "Helcio Iorio",
    price: 2800,
    type: "Pintura a óleo",
    tag: "obra_58",
    images: [],
    description: "Biografia de Helcio Iorio",
    year: null
  },
  {
    id: "59",
    title: "Hamilton Cordeiro",
    artist: "Hamilton Cordeiro",
    price: 950,
    type: "Acrílico",
    tag: "obra_59",
    images: [],
    description: "Hamilton Cordeiro: Uma Vida Dedicada à Arte",
    year: 2002
  },
  {
    id: "60",
    title: "Hamilton Cordeiro",
    artist: "Hamilton Cordeiro",
    price: 1700,
    type: "Acrílico",
    tag: "obra_60",
    images: [],
    description: "Hamilton Cordeiro: Uma Vida Dedicada à Arte",
    year: 2004
  },
  {
    id: "61",
    title: "Pastoral Entre Colinas",
    artist: "Hamilton Cordeiro",
    price: 2000,
    type: "Acrílico",
    tag: "obra_61",
    images: [],
    description: "Hamilton Cordeiro: Uma Vida Dedicada à Arte",
    year: 2001
  },
  {
    id: "62",
    title: "Hamilton Cordeiro",
    artist: "Hamilton Cordeiro",
    price: 1200,
    type: "Acrílico",
    tag: "obra_62",
    images: [],
    description: "Hamilton Cordeiro: Uma Vida Dedicada à Arte",
    year: 2002
  },
  {
    id: "63",
    title: "Mulher e Flor",
    artist: "Gabriel Bertazzoli",
    price: 7600,
    type: "Acrílico",
    tag: "obra_63",
    images: [],
    description: "Biografia de Gabriel Bertazzoli",
    year: 2019
  },
  {
    id: "64",
    title: "Porto de Hamburgo",
    artist: "Fernando Calderari",
    price: 17000,
    type: "Pintura a óleo",
    tag: "obra_64",
    images: [],
    description: "biografia_fernando_calderari",
    year: 1997
  },
  {
    id: "65",
    title: "Ely Albernaz",
    artist: "Ely Albernaz",
    price: 2200,
    type: null,
    tag: "obra_65",
    images: [],
    description: "Biografia de Ely Albernaz",
    year: null
  },
  {
    id: "66",
    title: "Ely Albernaz",
    artist: "Ely Albernaz",
    price: 3380,
    type: null,
    tag: "obra_66",
    images: [],
    description: "Biografia de Ely Albernaz",
    year: null
  },
  {
    id: "67",
    title: "Paisagem de Santo Amaro da Imperatriz",
    artist: "Élio Hahnemann",
    price: 7000,
    type: "Pintura a óleo",
    tag: "obra_67",
    images: [],
    description: "biografia_elio_hahnemann",
    year: 2000
  },
  {
    id: "68",
    title: "Elias Andrade",
    artist: "Elias Andrade",
    price: 4900,
    type: "Acrílico",
    tag: "obra_68",
    images: [],
    description: "Elias Andrade: O Artista da Alma Manezinha",
    year: null
  },
  {
    id: "69",
    title: "Dudu Rodrigues",
    artist: "Dudu Rodrigues",
    price: null,
    type: "Acrílico",
    tag: "obra_69",
    images: [],
    description: "Biografia de Dudu Rodrigues",
    year: null
  },
  {
    id: "70",
    title: "Dudu Rodrigues",
    artist: "Dudu Rodrigues",
    price: null,
    type: "Acrílico",
    tag: "obra_70",
    images: [],
    description: "Biografia de Dudu Rodrigues",
    year: null
  },
  {
    id: "71",
    title: "Dudu Rodrigues",
    artist: "Dudu Rodrigues",
    price: null,
    type: "Acrílico",
    tag: "obra_71",
    images: [],
    description: "Biografia de Dudu Rodrigues",
    year: null
  },
  {
    id: "72",
    title: "Mamão Amazônia",
    artist: "Cleusa Soares",
    price: 3900,
    type: "Pintura a óleo",
    tag: "obra_72",
    images: [],
    description: "Cleusa Soares: Uma Vida Dedicada à Arte",
    year: 2015
  },
  {
    id: "73",
    title: "Laranja Ponkan",
    artist: "Cleusa Soares",
    price: 2500,
    type: "Pintura a óleo",
    tag: "obra_73",
    images: [],
    description: "Cleusa Soares: Uma Vida Dedicada à Arte",
    year: 2015
  },
  {
    id: "74",
    title: "Caio Borges",
    artist: "Caio Borges",
    price: 15000,
    type: "Acrílico",
    tag: "obra_74",
    images: [],
    description: "biografia_caio_borges",
    year: 2004
  },
  {
    id: "75",
    title: "Caio Borges",
    artist: "Caio Borges",
    price: 13000,
    type: "Acrílico",
    tag: "obra_75",
    images: [],
    description: "biografia_caio_borges",
    year: 2005
  },
  {
    id: "76",
    title: "Entrada do Rancho",
    artist: "Arthur Figueiredo",
    price: 6200,
    type: "Pintura a óleo",
    tag: "obra_76",
    images: [],
    description: "Arthur Alves Figueiredo: Uma Vida Dedicada à Arte",
    year: 1985
  },
  {
    id: "77",
    title: "Ângelo Cannone",
    artist: "Ângelo Cannone",
    price: 10300,
    type: null,
    tag: "obra_77",
    images: [],
    description: "biografia_angelo_canonne",
    year: null
  },
  {
    id: "78",
    title: "Hosana Dzerounian",
    artist: "Hosana Dzerounian",
    price: 8900,
    type: null,
    tag: "obra_78",
    images: [],
    description: "Hosana Dzerounian: Uma Visão Geral de Sua Trajetória Artística",
    year: 1978
  },
  {
    id: "79",
    title: "Arte Cusquenha",
    artist: "Arte Cusquenha",
    price: 4900,
    type: null,
    tag: "obra_79",
    images: [],
    description: "",
    year: null
  },
  {
    id: "80",
    title: "Digo Tertschitsch",
    artist: "Digo Tertschitsch",
    price: 4200,
    type: "Pintura a óleo",
    tag: "obra_80",
    images: [],
    description: "Biografia de Digo Tertschitsch",
    year: 2018
  },
  {
    id: "81",
    title: "Tania Campos",
    artist: "Tania Campos",
    price: 1350,
    type: null,
    tag: "obra_81",
    images: [],
    description: "",
    year: 1997
  },
  {
    id: "82",
    title: "Marcos Martins",
    artist: "Marcos Martins",
    price: 3900,
    type: "Acrílico",
    tag: "obra_82",
    images: [],
    description: "",
    year: 1994
  },
  {
    id: "83",
    title: "Rosas",
    artist: "Zélia Bússolo",
    price: 3200,
    type: null,
    tag: "obra_83",
    images: [],
    description: "",
    year: 1994
  },
  {
    id: "84",
    title: "Zélia Bússolo",
    artist: "Zélia Bússolo",
    price: 3900,
    type: null,
    tag: "obra_84",
    images: [],
    description: "",
    year: null
  },
  {
    id: "85",
    title: "Zélia Bússolo",
    artist: "Zélia Bússolo",
    price: 20000,
    type: null,
    tag: "obra_85",
    images: [],
    description: "",
    year: null
  },
  {
    id: "86",
    title: "Roberto Pereira",
    artist: "Roberto Pereira",
    price: 4900,
    type: null,
    tag: "obra_86",
    images: [],
    description: "",
    year: null
  },
  {
    id: "87",
    title: "Priscila Rogoski",
    artist: "Priscila Rogoski",
    price: 3900,
    type: null,
    tag: "obra_87",
    images: [],
    description: "",
    year: 2011
  },
  {
    id: "88",
    title: "Priscila Rogoski",
    artist: "Priscila Rogoski",
    price: 4900,
    type: null,
    tag: "obra_88",
    images: [],
    description: "",
    year: 2021
  },
  {
    id: "89",
    title: "Priscila Rogoski",
    artist: "Priscila Rogoski",
    price: 3500,
    type: null,
    tag: "obra_89",
    images: [],
    description: "",
    year: 2021
  },
  {
    id: "90",
    title: "José Azevedo",
    artist: "José Azevedo",
    price: 5200,
    type: null,
    tag: "obra_90",
    images: [],
    description: "",
    year: null
  },
  {
    id: "91",
    title: "Nairo Souza",
    artist: "Nairo Souza",
    price: 1500,
    type: null,
    tag: "obra_91",
    images: [],
    description: "Nairo Souza",
    year: 2005
  },
  {
    id: "92",
    title: "Nairo Souza",
    artist: "Nairo Souza",
    price: 1500,
    type: null,
    tag: "obra_92",
    images: [],
    description: "Nairo Souza",
    year: 2017
  },
  {
    id: "93",
    title: "Nairo Souza",
    artist: "Nairo Souza",
    price: 1500,
    type: null,
    tag: "obra_93",
    images: [],
    description: "Nairo Souza",
    year: 2018
  },
  {
    id: "94",
    title: "Leonidas Monte",
    artist: "Leonidas Monte",
    price: 3600,
    type: null,
    tag: "obra_94",
    images: [],
    description: "",
    year: null
  },
]