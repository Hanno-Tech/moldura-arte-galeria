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
  price: number | null;
  new_price?: number;
  is_promotion?: boolean;
  type: string;
  size?: string;
  size_with_frame?: string;
  tag: string; // Tag usada no Cloudinary para identificar a obra (ex: "obra_1")
  images: string[]; // Será preenchido dinamicamente pela aplicação
  description: string;
  year?: number | null;
};

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Bahia",
    artist: "Willy Zumblick",
    price: null,
    type: "Pintura a óleo",
    size: "60x80",
    size_with_frame: "82x102",
    tag: "1001",
    images: [],
    description: `Willy Alfredo Zumblick (1913-2008) foi um dos mais importantes pintores e escultores brasileiros do século XX, com uma obra que transcende a arte e se torna um valioso registro histórico e cultural de Santa Catarina. Nascido e falecido em Tubarão, sua cidade natal, Zumblick deixou um legado inestimável, caracterizado por sua paixão em retratar a vida, as tradições e os acontecimentos de sua região. Autodidata e multifacetado, ele não apenas dominou as artes plásticas, mas também exerceu as profissões de relojoeiro e óptico, herdadas de seu pai, Roberto Zumblick.

A Vida e a Formação de um Artista Autodidata Filho de pai alemão e mãe descendente de italianos, Willy Zumblick começou sua jornada artística ainda muito jovem, desenvolvendo um talento natural para a pintura e a escultura sem a necessidade de uma formação acadêmica formal. Essa característica autodidata permitiu que ele desenvolvesse um estilo único, livre das convenções e escolas artísticas tradicionais, o que conferiu autenticidade e originalidade à sua produção. Casado por 60 anos com Célia Sá Zumblick, sua vida pessoal foi marcada pela estabilidade e pelo profundo enraizamento em sua comunidade.

Além de sua dedicação às artes, Zumblick manteve as profissões de relojoeiro e óptico, continuando o negócio da família iniciado por seu pai em 1902. Essa conexão com o cotidiano e com o trabalho manual influenciou diretamente sua arte, que frequentemente aborda temas relacionados à vida simples, ao trabalho e às paisagens de sua terra. Um exemplo notável de sua ligação com a história local é o marco descritivo afixado na parede frontal de seu estabelecimento, que registra o nível das águas do Rio Tubarão durante a catastrófica enchente de 1974, um evento que ele também imortalizou em suas telas.

A vasta obra de Willy Zumblick, que conta com mais de 5.000 peças, é um verdadeiro painel da história e da cultura de Santa Catarina. Seu estilo figurativo, marcado por cores vibrantes e pinceladas fortes, transformava cada tela em uma narrativa visual, repleta de emoção e significado. Embora em alguns momentos sua arte pudesse flertar com um modernismo primitivista, sua principal força residia na capacidade de capturar a essência de sua gente e de sua terra.`,
    year: 1956
  },
  {
    id: "2",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 12000,
    new_price: 9600,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "40x90",
    size_with_frame: "77x127",
    tag: "1004",
    images: [],
    description: `Zélio Andrezzo, nascido em Florianópolis, Santa Catarina, em 1948, é um renomado artista plástico brasileiro cuja obra se destaca pela maestria na pintura figurativa e retratista. Sua jornada artística teve início em 1964, quando se mudou para São Paulo e ingressou na Associação Paulista de Belas Artes, onde aprimorou suas técnicas e consolidou seu estilo.

Desde os primeiros anos de sua formação, Andrezzo demonstrou um profundo interesse pela retratação e figuração humana.Ele buscou aprimoramento contínuo, frequentando diversos cursos com pintores italianos, o que enriqueceu sua abordagem e técnica.Essa base sólida permitiu- lhe desenvolver uma linguagem artística própria, caracterizada pela sensibilidade e precisão em suas representações.

Zélio Andrezzo é amplamente reconhecido como um pintor figurativo e retratista.Além disso, ele se dedica à pintura de gênero, explorando temas que retratam o cotidiano e a cultura brasileira.Suas obras abrangem uma vasta gama de assuntos, desde paisagens vibrantes até delicadas figuras femininas, sempre com um toque de realismo e emoção.A maioria de suas criações é realizada em óleo sobre tela ou acrílica sobre tela, evidenciando sua versatilidade e domínio de diferentes mídias.

A trajetória de Zélio Andrezzo é marcada por importantes reconhecimentos e uma vasta presença em acervos.Suas obras não se limitam ao Brasil, estando presentes em coleções particulares em diversos países, como Argentina, França, Alemanha e Japão.No cenário nacional, ele é o artista responsável por retratar os ex - presidentes da Assembleia Legislativa de Santa Catarina desde 1989, um testemunho de sua relevância e habilidade em capturar a essência de figuras públicas.

Ao longo de sua carreira, Andrezzo foi agraciado com importantes prêmios, incluindo o Prêmio Aquisição da Secretaria de Estado da Cultura de São Paulo em 1988 e 1991. Em 1991, ele também recebeu o título de Hors Concours no IX Congresso Universitário Paulista da Universidade de São Paulo, solidificando sua posição como um artista de destaque.Sua participação em exposições, como a exibida no programa "Mil e Uma Noites", e a presença de 15 de suas obras em galerias, reforçam sua contribuição para o cenário artístico.

Zélio Andrezzo também é coautor do livro "A cor das palavras" com Adriano Zanotto, publicado em 2010, demonstrando seu engajamento com outras formas de expressão artística e cultural.Sua obra continua a inspirar e encantar, consolidando seu legado como um dos grandes nomes da arte brasileira contemporânea.`,
    year: 2017
  },
  {
    id: "3",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 6700,
    new_price: 5360,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "40x50",
    size_with_frame: "69x79",
    tag: "1005",
    images: [],
    description: `Zélio Andrezzo: Uma Trajetória Artística de Destaque`,
    year: 2018
  },
  {
    id: "4",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 6800,
    new_price: 5440,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "30x40",
    size_with_frame: "60x70",
    tag: "1006",
    images: [],
    description: `Zélio Andrezzo: Uma Trajetória Artística de Destaque`,
    year: null
  },
  {
    id: "5",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 6300,
    new_price: 5040,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "40x60",
    size_with_frame: "57x77",
    tag: "1007",
    images: [],
    description: `Zélio Andrezzo: Uma Trajetória Artística de Destaque`,
    year: null
  },
  {
    id: "6",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 2800,
    new_price: 2240,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "22x18",
    size_with_frame: "46x42",
    tag: "1008",
    images: [],
    description: `Zélio Andrezzo: Uma Trajetória Artística de Destaque`,
    year: null
  },
  {
    id: "7",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 2800,
    new_price: 2240,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "22x18",
    size_with_frame: "46x42",
    tag: "1009",
    images: [],
    description: `Zélio Andrezzo: Uma Trajetória Artística de Destaque`,
    year: null
  },
  {
    id: "8",
    title: "Zélio Andrezzo",
    artist: "Zélio Andrezzo",
    price: 6800,
    new_price: 5440,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "30x40",
    size_with_frame: "60x70",
    tag: "1010",
    images: [],
    description: `Zélio Andrezzo: Uma Trajetória Artística de Destaque`,
    year: null
  },
  {
    id: "9",
    title: "António Guimarães",
    artist: "António Guimarães",
    price: 2100,
    new_price: 1575,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "70x100",
    size_with_frame: "72x102",
    tag: "1019",
    images: [],
    description: `António Guimarães: Uma Vida Dedicada à Arte`,
    year: 2013
  },
  {
    id: "11",
    title: "Mulher II",
    artist: "Valda Costa",
    price: 9900,
    new_price: 6930,
    is_promotion: true,
    type: "Acrílico",
    size: "40x40",
    size_with_frame: "66x66",
    tag: "1023",
    images: [],
    description: `Vivalda Terezinha da Costa, conhecida como Valda Costa, nasceu em Florianópolis, Santa Catarina, em 1951. Nascida no bairro da Coloninha, Valda mudou-se para o Morro do Mocotó, no centro de Florianópolis, aos 12 anos. Autodidata, sua paixão pela arte foi notada por Iracema Nunes Silva, que lhe cedeu um ateliê.

    A obra de Valda Costa é marcada por retratar o cotidiano de Florianópolis, com foco nos morros, casarios e na cultura local.Suas pinturas frequentemente apresentavam a representatividade negra, e seu estilo era comparado a grandes nomes como Di Cavalcanti e Djanira.
Ascensão e Desafios

Valda Costa teve uma carreira de sucesso, com uma ascensão rápida no cenário artístico.No entanto, sua vida foi marcada por desafios pessoais, incluindo problemas financeiros e de saúde, que a levaram a uma morte prematura em 1993, aos 42 anos.

Apesar da carreira curta, Valda Costa deixou um legado de mais de 800 obras.Seu trabalho é reconhecido por sua força e originalidade, e ela é considerada uma referência na arte de Santa Catarina.O Museu de Arte de Santa Catarina(MASC) possui obras da artista em seu acervo, e em 2023, um mural em sua homenagem foi inaugurado no centro de Florianópolis.
Valda foi musa e modelo de Martinho de Haro, uma figura central em sua formação artística.`,
    year: 1991
  },
  {
    id: "12",
    title: "Valda Costa",
    artist: "Valda Costa",
    price: 11200,
    new_price: 7840,
    is_promotion: true,
    type: "Acrílico",
    size: "28x49",
    size_with_frame: "60x81",
    tag: "1024",
    images: [],
    description: `Vivalda Terezinha da Costa, conhecida como Valda Costa, nasceu em Florianópolis, Santa Catarina, em 1951. Nascida no bairro da Coloninha, Valda mudou-se para o Morro do Mocotó, no centro de Florianópolis, aos 12 anos. Autodidata, sua paixão pela arte foi notada por Iracema Nunes Silva, que lhe cedeu um ateliê.
A obra de Valda Costa é marcada por retratar o cotidiano de Florianópolis, com foco nos morros, casarios e na cultura local.Suas pinturas frequentemente apresentavam a representatividade negra, e seu estilo era comparado a grandes nomes como Di Cavalcanti e Djanira.
Ascensão e Desafios
Valda Costa teve uma carreira de sucesso, com uma ascensão rápida no cenário artístico.No entanto, sua vida foi marcada por desafios pessoais, incluindo problemas financeiros e de saúde, que a levaram a uma morte prematura em 1993, aos 42 anos.
Apesar da carreira curta, Valda Costa deixou um legado de mais de 800 obras.Seu trabalho é reconhecido por sua força e originalidade, e ela é considerada uma referência na arte de Santa Catarina.O Museu de Arte de Santa Catarina(MASC) possui obras da artista em seu acervo, e em 2023, um mural em sua homenagem foi inaugurado no centro de Florianópolis.
Valda foi musa e modelo de Martinho de Haro, uma figura central em sua formação artística.`,
    year: 1991
  },
  {
    id: "13",
    title: "Marlete Tridapalli",
    artist: "Marlete Tridapalli",
    price: 4100,
    new_price: 2870,
    is_promotion: true,
    type: "Acrílico",
    size: "90x80",
    tag: "1027",
    images: [],
    description: `Marlete Tridapalli é uma renomada artista plástica brasileira, natural de Brusque, Santa Catarina. “Trida” sempre se identificou com a arte, especialmente com a pintura. Aos 14 anos iniciou sua trajetória artística na ABRAC – Associação Brusquense de Artesanato e Cultura, sob orientação da mestra Raquel Santos. Desde então, a pintura tornou-se uma constante em sua vida, com participação em cursos, demonstrações, seminários e diversas exposições individuais e coletivas.
Em 1995 mudou - se para Criciúma / SC, onde realizou o curso específico de pintura na UNESC – Universidade do Extremo Sul Catarinense.Após a conclusão, foi convidada a lecionar na mesma instituição.
Também desenvolveu sua arte em Curitiba / PR, com obras expostas em galerias e em parceria com decoradores.Seu trabalho já alcançou diferentes países da Europa, Estados Unidos e Ásia, levado por turistas e colecionadores que se encantam com seu estilo único.
Residindo atualmente em Florianópolis / SC, seu trabalho como pintora é um reflexo de sua paixão e dedicação, enriquecendo o panorama cultural de Santa Catarina e arredores.`,
    year: null
  },
  {
    id: "14",
    title: "Marlete Tridapalli",
    artist: "Marlete Tridapalli",
    price: 2900,
    new_price: 2030,
    is_promotion: true,
    type: "Acrílico",
    size: "50x70",
    size_with_frame: "75x95",
    tag: "1028",
    images: [],
    description: `Biografia de Marlete Tridapalli`,
    year: null
  },
  {
    id: "15",
    title: "Rosas",
    artist: "Marlete Tridapalli",
    price: 2300,
    new_price: 1610,
    is_promotion: true,
    type: "Acrílico",
    size: "40x77",
    size_with_frame: "65x102",
    tag: "1029",
    images: [],
    description: `Biografia de Marlete Tridapalli`,
    year: null
  },
  {
    id: "16",
    title: "Marlete Tridapalli",
    artist: "Marlete Tridapalli",
    price: 1900,
    new_price: 1330,
    is_promotion: true,
    type: "Acrílico",
    size: "50x100",
    size_with_frame: "65x115",
    tag: "1030",
    images: [],
    description: `Biografia de Marlete Tridapalli`,
    year: null
  },
  {
    id: "17",
    title: "Marlete Tridapalli",
    artist: "Marlete Tridapalli",
    price: 4900,
    new_price: 3430,
    is_promotion: true,
    type: "Acrílico",
    size: "38x98",
    size_with_frame: "62x122",
    tag: "1032",
    images: [],
    description: `Biografia de Marlete Tridapalli`,
    year: null
  },
  {
    id: "18",
    title: "Marlete Tridapalli",
    artist: "Marlete Tridapalli",
    price: 2200,
    new_price: 1540,
    is_promotion: true,
    type: "Acrílico",
    tag: "1033",
    images: [],
    description: `Biografia de Marlete Tridapalli`,
    year: null
  },
  {
    id: "19",
    title: "Marlete Tridapalli",
    artist: "Marlete Tridapalli",
    price: 2500,
    new_price: 1750,
    is_promotion: true,
    type: "Acrílico",
    tag: "1034",
    images: [],
    description: `Biografia de Marlete Tridapalli`,
    year: null
  },
  {
    id: "20",
    title: "Silvio Pleticos",
    artist: "Silvio Pleticos",
    price: 500000,
    type: "Pintura a óleo",
    size: "125x280",
    tag: "1038",
    images: [],
    description: `Silvio Pléticos (Pula, Iugoslávia, atual Croácia, 1924 - Florianópolis, Santa Catarina, 2020) foi um artista multifacetado – pintor, desenhista e professor – cuja notável trajetória e profundo impacto cultural o estabeleceram como uma figura central na arte brasileira, com especial relevância para o estado de Santa Catarina. Sua obra, rica em simbolismo e técnica, reflete uma vida de dedicação e paixão pela expressão artística.
Nascido em Pula, uma cidade que à época de seu nascimento pertencia à Itália e hoje integra o território da Croácia, Pléticos iniciou sua jornada no mundo da arte em um contexto de efervescência cultural e histórica.Seus primeiros estudos artísticos ocorreram na Itália, entre os anos de 1939 e 1940, período crucial para a formação de sua sensibilidade e técnica.Posteriormente, aprofundou seus conhecimentos na prestigiada Escola de Arte Aplicada de Zagreb, na então Iugoslávia, entre 1947 e 1954. Durante essa fase, Pléticos não apenas aprimorou suas habilidades, mas também se especializou em pintura mural, uma técnica que demonstrava sua versatilidade e domínio de diferentes linguagens artísticas.Sua capacidade e paixão pelo ensino o levaram a lecionar desenho e pintura em diversas escolas iugoslavas, como Vondnjan, Fazana e Jursici, de 1954 a 1959, compartilhando seu conhecimento e inspirando futuras gerações de artistas em sua terra natal.

    Em 1961, Silvio Pléticos tomou a decisão de emigrar para o Brasil, um movimento que viria a enriquecer significativamente o cenário artístico do país.Sua primeira parada foi em Ribeirão Preto, São Paulo, onde rapidamente se integrou à comunidade artística, realizando sua primeira exposição individual e assumindo a posição de professor na Faculdade de Artes Plásticas em 1966. Sua jornada o levou, no ano seguinte, a Passo Fundo, Rio Grande do Sul, onde continuou a ministrar aulas na Escola de Arte.No entanto, foi sua chegada a Florianópolis, Santa Catarina, em 1968, que marcou um divisor de águas em sua carreira e na história da arte catarinense.Em Florianópolis, Pléticos assumiu a responsabilidade pelos Cursos de Desenho e Pintura do Museu de Arte de Santa Catarina(MASC) até 1972. Sua presença e didática transformaram - no em um mentor e um interlocutor essencial para uma nova geração de artistas catarinenses, que buscavam a experimentação plástica, a adoção de novos conceitos e propostas, e a utilização de materiais e procedimentos inovadores.Ele não apenas ensinava, mas também inspirava e catalisava o desenvolvimento de uma cena artística vibrante e moderna no estado.

A obra de Silvio Pléticos é um testemunho de sua originalidade e de sua capacidade de sintetizar diferentes correntes artísticas.Seu estilo é frequentemente descrito como uma fusão vigorosa de influências do cubismo, surrealismo e expressionismo.Essa combinação resultava em pinturas ricas em cores vivas e soluções surrealistas, que demonstravam uma interpretação livre e pessoal do cubismo.A temática em suas obras era frequentemente fantástica, com figuras que se desdobravam em composições complexas e expressivas.Um dos aspectos mais marcantes de sua produção é a recorrente presença de peixes, o que lhe rendeu o carinhoso apelido de "Artista dos Peixes".Essa temática não era meramente decorativa; simbolizava sua profunda conexão com o mar, a cultura local e a vida costeira de Santa Catarina, elementos que permeavam sua visão de mundo e sua expressão artística.Além de sua prolífica produção em pintura e desenho, Pléticos também explorou a escultura, demonstrando sua versatilidade e a amplitude de seu talento artístico.

Ao longo de sua vida, Silvio Pléticos foi amplamente reconhecido por sua contribuição inestimável à arte.Suas obras foram exibidas em importantes exposições individuais e coletivas, tanto no Brasil quanto no exterior, incluindo participações em salões de arte e bienais.Entre as muitas homenagens que recebeu, destacam - se o título de Cidadão Honorário de Florianópolis, concedido em 1984, e a retrospectiva "Sílvio Pléticos: 25 Anos de Brasil", realizada pelo MASC em 1986, que celebrou sua marcante trajetória no país.Em 1993, sua arte ganhou ainda mais visibilidade ao ilustrar o livro "As Anna Marias", de Lindolf Bell.Em 1994, foi agraciado com a Medalha de Mérito Anita Garibaldi pelo Governo do Estado de Santa Catarina, e em 2000, recebeu o título de Cidadão Honorário de São José, cidade onde viveu seus últimos anos.No ano seguinte, foi condecorado com a Medalha de Mérito Cultural Cruz e Sousa, um reconhecimento de seu impacto duradouro na cultura catarinense.

A partir de 2010, Pléticos dedicou - se intensamente ao ensino e à orientação artística em São José e São Pedro de Alcântara, contribuindo ativamente para a formação de novos talentos.Sua paixão pela educação artística culminou na criação do Instituto de Cultura Sílvio Pléticos, uma organização sem fins lucrativos dedicada à promoção da arte e da cultura.Ele também foi um incentivador e participante ativo na criação da Associação de Artistas Plásticos de São José e da Federação das Associações de Artistas Plásticos de Santa Catarina, demonstrando seu compromisso com o fortalecimento da comunidade artística local.

Silvio Pléticos faleceu em 2020, aos 95 anos, deixando um legado artístico e cultural imensurável.Sua obra continua a inspirar e a encantar, sendo um testemunho de sua resistência à massificação e de sua visão cósmica do universo, sempre enraizada em suas experiências e em sua profunda conexão com a cultura e a natureza.Sua contribuição para a arte brasileira, e em particular para a catarinense, permanece viva e relevante, perpetuando a memória de um artista que soube traduzir a complexidade da vida em formas e cores vibrantes.`,
    year: null
  },
  {
    id: "21",
    title: "Pôr do Sol do Paraná",
    artist: "Sidney Mariano",
    price: 3900,
    new_price: 3120,
    is_promotion: true,
    type: "Técnica Mista",
    size: "65x60",
    size_with_frame: "95x90",
    tag: "1040",
    images: [],
    description: `Sidney Mariano, renomado artista plástico brasileiro, nasceu em 29 de janeiro de 1944, na cidade de Ponta Grossa, Paraná. Desde muito jovem, aos 12 anos, Mariano já demonstrava um profundo interesse e talento para a pintura e o desenho, marcando o início de uma jornada artística que se estenderia por décadas.

A obra de Sidney Mariano é notável por sua versatilidade e expressividade.Ele transita com maestria por diversas técnicas, incluindo pintura acrílica, colagem, caneta esferográfica e lápis de cor.Seus quadros frequentemente capturam a essência da vida no campo, retratando paisagens serenas, plantações vibrantes, a delicadeza das flores e a simplicidade dos moradores rurais.Além disso, Mariano explora com igual destreza a arte abstrata, demonstrando sua capacidade de inovar e expandir seus horizontes artísticos.

Além de sua prolífica produção artística, Sidney Mariano dedicou - se também ao ensino, compartilhando seu conhecimento e paixão pela arte.Ele lecionou no Conservatório Musical Maestro Cyrillo Ferreira por 11 anos e foi professor de pintura na Pró - Reitoria de Extensão e Assuntos Culturais(PROEX) por 17 anos.Atualmente, ele continua a inspirar novos talentos em seu próprio ateliê.

O reconhecimento de seu trabalho transcende as fronteiras nacionais.Suas exposições já encantaram o público em diversas cidades brasileiras, como Curitiba, Maringá, Camboriú e Florianópolis.Internacionalmente, as obras de Mariano foram adquiridas por colecionadores em países como Estados Unidos, Japão, Suíça, Israel, Panamá, Finlândia e Reino Unido, atestando a universalidade e o impacto de sua arte.`,
    year: 2007
  },
  {
    id: "22",
    title: "Sidney Mariano",
    artist: "Sidney Mariano",
    price: 5600,
    new_price: 4480,
    is_promotion: true,
    type: "Técnica Mista",
    size: "100x95",
    size_with_frame: "123x118",
    tag: "1041",
    images: [],
    description: `biografia_sidney_mariano`,
    year: 2005
  },
  {
    id: "23",
    title: "Sergio Bonson",
    artist: "Sergio Bonson",
    price: 5500,
    new_price: 3300,
    is_promotion: true,
    type: "Acrílico",
    size: "90x100",
    size_with_frame: "96x106",
    tag: "1042",
    images: [],
    description: `Sérgio Luiz de Castro Bonson (Florianópolis/SC, 13 de novembro de 1949 – 11 de dezembro de 2005) foi um artista multifacetado, historiador de formação e autodidata nas artes. Reconhecido como chargista, cartunista, desenhista, aquarelista, caricaturista e artista plástico, Bonson deixou um legado significativo, especialmente por sua representação do cotidiano e da cultura de Florianópolis em suas obras.

Bonson iniciou sua carreira como cartunista em 1973 no jornal O Estado, em Florianópolis.Posteriormente, colaborou com veículos importantes como o Jornal de Santa Catarina, Jornal da Semana, Folha de São Paulo e O Estado de São Paulo.

Ao longo de sua carreira, produziu inúmeras charges, aquarelas e histórias em quadrinhos.Sua obra é marcada por uma linguagem visual única e um forte apelo à cultura local, sem, contudo, deixar de dialogar com temas nacionais e universais.

Sérgio Bonson faleceu em Florianópolis em 11 de dezembro de 2005. Em 2006, em sua homenagem, foi realizada uma exposição coletiva na Assembleia Legislativa de Santa Catarina pelo Grupo de Arte Sete da Ilha, do qual foi um dos idealizadores.Sua obra está representada no acervo do MASC e continua sendo estudada e celebrada por sua originalidade e forte identidade regional.Sua capacidade de transitar entre diferentes linguagens artísticas, como a gravura, aquarela e o desenho, demonstra sua inquietude e domínio técnico.`,
    year: 2005
  },
  {
    id: "24",
    title: "Sandra Mello",
    artist: "Sandra Mello",
    price: 3200,
    new_price: 2400,
    is_promotion: true,
    type: "Acrílico",
    size: "44x49",
    size_with_frame: "66x81",
    tag: "1043",
    images: [],
    description: `Nascida em Tubarão, Santa Catarina, em 7 de março de 1955, Sandra Mello é uma renomada artista plástica brasileira, reconhecida por sua versatilidade como escultora, pintora e desenhista. Sua trajetória artística é marcada por uma constante evolução e experimentação, transitando do realismo para o expressionismo e, posteriormente, explorando movimentos pós-modernistas e conceituais.

Sandra Mello aprimorou suas habilidades na Escola de Artes Visuais do Rio de Janeiro(Parque Laje), entre 1980 e 1987, onde teve a oportunidade de ser orientada por grandes nomes como Sandro Donatello Teixeira, Cláudio Valério Teixeira e Roberto Leal.Sua busca por conhecimento a levou a cursos importantes, como o de Processo Criativo “Procedencia e Propriedade” (2007), com orientação de Charles Watson e Cadu, e o Curso de História da Arte no Instituto Internacional de Cultura Ipanema(1982).A artista também realizou viagens de estudo a Buenos Aires(Argentina) e Nova York(EUA), ampliando suas perspectivas e influências artísticas.

O trabalho de Sandra Mello é elogiado por críticos de arte por sua profundidade e originalidade.João Evangelista de Andrade Filho, ex - diretor do Museu de Arte de Santa Catarina(MASC), descreve suas obras como um "abstracionismo lírico", destacando o encontro de "perspectivas labirínticas".Em algumas de suas séries, a artista retoma um debate histórico do século XVI sobre a importância do desenho em relação à cor, demonstrando sua capacidade de dialogar com a tradição pictórica de forma inovadora.

Ao longo de sua carreira, Sandra Mello participou de diversas exposições coletivas e individuais, consolidando seu nome no cenário artístico.Entre as coletivas, destacam - se a Mostra de Novos Talentos no Palácio Barriga Verde(1978), o 8º Salão Catarinense de Novos Artistas, e exposições em galerias renomadas como a Galeria de Arte AMC(Rio de Janeiro, 1985) e a Iva Gandara Galeria de Arte(Florianópolis, 2006).Suas exposições individuais incluem mostras no Espaço de Artes Café das Artes(1998) e no Espaço de Artes McDonalds(1999).

Além de sua produção artística, Sandra Mello também contribuiu para o campo da educação e crítica de arte, atuando como professora aposentada da UFSC e como curadora e crítica.Sua dedicação e talento a tornam uma figura importante na arte contemporânea brasileira.`,
    year: 2006
  },
  {
    id: "25",
    title: "RS Carvalho",
    artist: "RS Carvalho",
    price: 2400,
    new_price: 1680,
    is_promotion: true,
    type: "Acrílico",
    size: "70x50",
    size_with_frame: "95x75",
    tag: "1045",
    images: [],
    description: `Sebastião Rodrigues de Carvalho, artisticamente conhecido como R. Carvalho, é um renomado pintor autodidata nascido em 1964, no distrito de Luminosa, em Brasópolis, Minas Gerais. Sua obra é profundamente marcada por um estilo impressionista e romântico, que se manifesta na representação poética e detalhada de paisagens naturais, como montanhas, campos e florestas. A paixão pela natureza intacta e a busca por uma pureza existencial são temas recorrentes em suas pinturas, que frequentemente utilizam a técnica da pintura a óleo.

Desde a infância, R.Carvalho demonstrou uma inclinação natural para as artes, sendo incentivado por pais e professores.Durante sua fase escolar, destacou - se em disciplinas ligadas à arte e cultura.Na adolescência, explorou diversos materiais, como guache e aquarela, antes de se dedicar à pintura a óleo.Inicialmente, desenhava por prazer, retratando cenas do cotidiano e as paisagens de sua terra natal.

Já na fase adulta, R.Carvalho transformou sua paixão em profissão, dedicando - se à pintura de telas, móveis e painéis decorativos.Nos últimos anos, tem se especializado em restaurações e na aplicação de sua técnica em portas e janelas antigas de demolição, conferindo uma nova vida a esses objetos com sua arte.

Sua trajetória artística inclui a participação em inúmeras exposições individuais e coletivas, com destaque para as Semanas de Arte realizadas anualmente em Brasópolis, MG, na Pinacoteca Camargo Freire em Campos do Jordão, SP, e nas Feiras de Arte do Festival de Inverno Arrobas Martins, também em Campos do Jordão, SP.Suas obras também foram exibidas em diversas cidades do Vale do Paraíba.

Uma de suas obras notáveis, Caminho da Mantiqueira, foi doada ao Museu de Arte do Parlamento de São Paulo.Esta pintura, realizada sobre uma antiga porta de peroba, exemplifica seu empenho mais poético do que técnico, reforçando sua visão de que a pintura é um instrumento de mensagem, e não apenas um objeto de decoração.As obras de R.Carvalho estão presentes em diversas coleções particulares e no acervo do Museu de Arte do Parlamento de São Paulo.`,
    year: 1999
  },
  {
    id: "26",
    title: "Reynaldo Manzke",
    artist: "Reynaldo Manzke",
    price: 19000,
    type: "Pintura a óleo",
    size: "53x73",
    size_with_frame: "82x102",
    tag: "1046",
    images: [],
    description: `Reynaldo Manzke (1906-1980) foi um proeminente pintor brasileiro, reconhecido por sua maestria na representação de paisagens e marinhas, além de ser um dos pioneiros na utilização da técnica do espatulado no Brasil. Sua obra transcende a mera representação visual, capturando a essência dos costumes, tradições e a vida simples do povo brasileiro, deixando um legado artístico que eterniza uma época e um modo de vida que, em grande parte, se transformaram ao longo do tempo. 

Nascido em 1906, Reynaldo Manzke iniciou seus estudos artísticos no convento Santo Antônio, em Blumenau, sua cidade natal, sob a orientação do mestre frei Genésio Hansen O.F.M., que o introduziu ao desenho e à pintura.Posteriormente, Manzke aprimorou suas habilidades em centros artísticos como São Paulo e Rio de Janeiro, dedicando - se intensamente à pintura a óleo sobre tela e, notavelmente, à aquarela.Sua paixão pela natureza e pela cultura brasileira o levou a viajar extensivamente pelo país, absorvendo as paisagens e as cenas cotidianas que viriam a compor o repertório de suas obras.Uma característica marcante de seu processo criativo era a capacidade de reter as imagens em sua mente, dispensando o uso de esboços, e muitas vezes pintando ao ar livre, diretamente no local de inspiração. 

O estilo de Reynaldo Manzke é marcado pela sensibilidade e pela fidelidade à realidade que o cercava.Ele se destacou por retratar principalmente temas da região sul do Brasil, bem como de São Paulo e Minas Gerais, focando em cenas que celebravam a vida dos caboclos e caiçaras.A técnica do espatulado, da qual foi um dos precursores no Brasil, conferiu às suas obras uma textura e uma expressividade únicas, enquanto sua habilidade com a aquarela demonstrou sua versatilidade e domínio de diferentes mídias.Suas pinturas são um testemunho visual da diversidade de povos e da simplicidade da vida no Brasil antigo. 

A trajetória de Reynaldo Manzke foi pontuada por diversas exposições e reconhecimentos.Sua primeira exposição individual ocorreu em São Paulo, em 1939, seguida por outras em 1945, 1946 e 1948. Ele foi agraciado com vários prêmios no Salão Nacional de Belas Artes do Rio de Janeiro e pelo governo de São Paulo.Em 1951, participou da primeira edição da Bienal de São Paulo, um marco importante em sua carreira.Além de sua produção artística, Manzke também atuou como orientador de outros pintores, como Durval Pereira e Rios Pinto, e foi membro de júri em diversas exposições oficiais.Ele foi um dos fundadores da Associação Paulista de Belas Artes e mantinha escolas de aperfeiçoamento artístico em seus ateliês em São Paulo e Blumenau. 

Reynaldo Manzke faleceu em 1980, mas seu legado perdura através de suas obras, que continuam a ser apreciadas por colecionadores e amantes da arte.Suas pinturas estão presentes em galerias particulares no Brasil e em diversos países, incluindo Alemanha, Estados Unidos, Canadá, França, Inglaterra, Israel, Itália e Líbano, além de integrarem o acervo de pinacotecas em Jundiaí e São Carlos. [1] O valor de suas obras em leilões tem variado, com preços realizados entre 40 e 80 USD, dependendo do tamanho e da técnica da obra.O recorde de preço para o artista em leilão, desde 2007, foi de 80 USD por uma pintura a guache de cena de porto, vendida em 2025.`,
    year: 1968
  },
  {
    id: "27",
    title: "A Última Ceia de Canaã",
    artist: "Raul Taurant Delavy",
    price: 17000,
    new_price: 13600,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "90x110",
    size_with_frame: "116x136",
    tag: "1047",
    images: [],
    description: `Raul Taurant Delavy (1942-2007) foi um proeminente artista plástico e escultor, cuja obra transcendeu fronteiras, deixando um legado significativo tanto na Argentina, seu país natal, quanto no Brasil, onde viveu por muitos anos. Sua trajetória artística foi marcada por uma profunda inclinação para as artes desde cedo, desenvolvendo um estilo multifacetado que abrangeu pintura, escultura, escrita e música.

Nascido em 10 de agosto de 1942, no bairro de Palermo, em Buenos Aires, Argentina, Raul Delavy demonstrou desde a infância um talento inato para o desenho e a criação.Embora tenha estudado publicidade, uma carreira que escolheu devido à sua forte inclinação artística, ele se considerava um autodidata nas artes plásticas, tendo frequentado apenas algumas aulas na Escola de Belas Artes.Essa formação diversificada e sua paixão inerente pelas artes moldaram sua visão e técnica, permitindo - lhe explorar diferentes mídias e expressões ao longo de sua carreira.

    Em 1964, Delavy casou - se e abriu seu próprio ateliê, onde inicialmente se dedicou a trabalhos publicitários e à criação de caricaturas para o jornal El Territorio.Esse período inicial foi crucial para o desenvolvimento de sua habilidade em capturar a essência de personagens e eventos, uma característica que mais tarde se refletiria em suas obras de arte mais complexas.

A década de 1960 foi um período de intensa atividade para Delavy, com sua participação em diversas exposições e salões de arte.Em 1967, ele alcançou um marco significativo ao vencer o Salón Nacional, representando os artistas do interior da Argentina, com sua obra "Pintor de leyendas políticas".Esta pintura, uma crítica contundente à ditadura militar da época, demonstrou não apenas sua habilidade artística, mas também seu compromisso com questões sociais e políticas.

Com o passar do tempo, a paixão de Delavy pela escultura se intensificou.Na década de 1980, ele dedicou - se mais profundamente a essa forma de arte, explorando materiais como mármore e bronze.Sua abordagem era abrangente, envolvendo - se em todo o processo criativo, desde a concepção até a execução, incluindo aspectos de arquitetura e engenharia em suas obras monumentais.A culminância desse período foi a inauguração de uma de suas maiores obras: o monumento em homenagem ao General San Martín.Reconhecido pelo Instituto Sanmartiniano como o terceiro maior monumento do país e o primeiro a ser totalmente realizado na Argentina, essa obra é um testemunho da grandiosidade e do impacto de seu trabalho como escultor.

    Em 1988, Raul Taurant Delavy foi convidado pelo governo federal brasileiro para realizar uma mostra itinerante com obras que abordavam a repressão política na Argentina.A exposição teve grande repercussão, o que o levou a ministrar cursos e realizar outras mostras em diversos ateliês coordenados pela Secretaria de Cultura de Curitiba, no Paraná.Ele se radicou em Curitiba por vinte anos, estabelecendo uma forte conexão com o cenário artístico brasileiro.

Durante sua estadia no Brasil, Delavy também viajou para Paris, onde se conectou com diversas galerias e participou de um ateliê compartilhado por inúmeros artistas.Nos Estados Unidos, ele expôs em várias galerias, recebendo propostas de trabalho e permanência.No entanto, o desejo de estar próximo da família o fez retornar ao Brasil, optando por viagens alternadas.

Raul Taurant Delavy faleceu em 17 de janeiro de 2007, aos 65 anos, em Córdoba, Argentina.Sua morte encerrou uma carreira rica e diversificada, mas seu legado perdura.Ele é lembrado como um artista multifacetado – pintor, escultor, escritor e músico – que deixou uma marca indelével tanto na Argentina quanto no Brasil.Suas obras são reconhecidas e expostas em galerias no Brasil, Europa e Estados Unidos, consolidando seu lugar como uma figura importante na arte latino - americana.

Ao longo de sua carreira, Raul Taurant Delavy realizou diversas exposições individuais, que atestam a amplitude e o reconhecimento de sua obra:

  1988: SESC da Esquina, Curitiba - Pinturas Abstratas
  1989: Galeria Academus, Curitiba
  1989: Sala Miguel Bakun, Secretaria de Estado da Cultura(Casa Andrade Muricy), Curitiba
  1992: Acervo Galeria de Arte, Curitiba
  1995: Pontifícia Universidade Católica do Paraná(PUC), Curitiba
1997: Metal - pano, Abstratos e técnica mista, Galeria Selmeershein, Paris
  1998: Triángulos amorosos y otras tonterías(Abstracción expressionista), Gabinete de Arte Milagros Barajas, Barcelona
  1998: Nini Barontini Galeria de Arte, Curitiba
  2005: Homenagem a "Fernando Fader" na Galeria Atenea, Córdoba, Argentina
  2006: Exposição na Galeria Braque, Buenos Aires - "Fader x Taurant"`,
    year: null
  },
  {
    id: "28",
    title: "Barcos do Maranhão",
    artist: "Raimundo Botelho",
    price: 6900,
    new_price: 4830,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "45x60",
    size_with_frame: "63x78",
    tag: "1048",
    images: [],
    description: `Raimundo Honório Botêlho Neto, nascido em 9 de fevereiro de 1946, na pitoresca cidade de Viana, Maranhão, é um dos mais proeminentes pintores e desenhistas brasileiros de sua geração. Sua jornada artística, marcada por uma profunda conexão com suas raízes e uma incessante busca pela maestria da luz e da cor, o consolidou como um nome respeitado no cenário das artes plásticas nacionais.

Desde a tenra infância, Botêlho demonstrava uma inclinação natural para o desenho.Em sua cidade natal, Viana, o jovem Raimundo já se destacava por suas criações coloridas e angulosas, muitas vezes vendendo seus trabalhos para amigos e vizinhos.Essa habilidade precoce, aliada a uma paixão inata pela arte, impulsionou - o a buscar novos horizontes.Ainda na juventude, deixou Viana, primeiro rumo à capital maranhense, São Luís, e posteriormente, em 1969, estabeleceu - se no Rio de Janeiro, um dos maiores centros culturais do Brasil.

Na Cidade Maravilhosa, Botêlho aprimorou sua técnica e expandiu seus conhecimentos artísticos.Ingressou na Sociedade Brasileira de Belas Artes, onde teve o privilégio de conhecer e se tornar amigo do mestre Antenor Finatti.A afinidade entre aluno e professor era tamanha que Raimundo Botêlho carinhosamente ganhou o apelido de "Finatinho" entre seus colegas.Além da influência de Finatti, ele também se aproximou de outros artistas renomados da época, como Ney Tecídio, Arlindo Mesquita e Acélio de Mello, absorvendo diferentes perspectivas e enriquecendo sua própria visão artística.

Raimundo Botêlho se autodefine como um pintor impressionista, e essa classificação é evidente em sua obra.Sua principal característica é o domínio da luz, explorado através de um meticuloso contraste de claro - escuro que confere vida e profundidade às suas telas.Para Botêlho, a iluminação é mais do que um elemento técnico; é a essência que dá alma a cada cor, como se em seus olhos o mundo estivesse sempre em um eterno amanhecer.

Os temas de suas pinturas são um reflexo direto de sua identidade e de sua profunda ligação com o Maranhão.Paisagens litorâneas, com seus barcos, ancoradouros e praias desertas, são recorrentes em sua obra.O Maranhão, sua terra natal, é um tema quase obrigatório, tratado com reverência e uma nostalgia que transparece em cada pincelada.Suas obras não apenas retratam a beleza natural desses cenários, mas também capturam a emoção das formas e das cores, apresentando um cromatismo vibrante e limpo, característico dos trópicos.

Críticos de arte, como Josué Montello, membro da Academia Brasileira de Letras, e Mauro Ferreira, artista plástico, destacam a singularidade de sua arte.Montello afirmou que Botêlho "nasceu para pintar como outros nascem para cantar ou escrever", ressaltando a intrínseca ligação do artista com sua vocação.Mauro Ferreira, por sua vez, elogia o "colorido limpo fiel ao cromatismo vibrante dos trópicos" e a capacidade de Botêlho de "embeber a tela com luz e cor", comparando - o a mestres como Joaquin Sorolla.

Ao longo de décadas, Raimundo Botêlho consolidou - se como um nome de peso no cenário das artes plásticas brasileiras.Suas obras são amplamente apreciadas por colecionadores, tanto no Brasil quanto no exterior, atestando a universalidade de sua arte e a qualidade de seu trabalho.Em 2010, sua cidade natal, Viana, prestou - lhe uma justa homenagem, concedendo - lhe a placa de "Honra ao Mérito Vianense" da AVL - Academia Vianense de Letras, um reconhecimento de seu impacto e de como ele honra o nome de sua terra.

Além de sua carreira artística, Raimundo Botêlho construiu uma vida familiar sólida.Casado com Sueli Maciel, é pai de Fábio e André, ambos conceituados professores universitários, e de Natália Maciel Botêlho, sua filha adotiva, cuja história de superação e esperança se tornou um pilar emocional para o casal.

Algumas de suas obras mais conhecidas incluem "Marina da Glória - RJ", "Paraty", "Santa Tereza", "Barcos do Maranhão", "Central do Brasil", "Areias - SP" e "Paisagem de Maricá – RJ".Cada uma dessas telas é um testemunho de sua habilidade em capturar a essência da paisagem e a emoção do momento, transformando - as em expressões artísticas que ressoam com o público.

A biografia de Raimundo Botêlho é a história de um artista que, com sensibilidade e talento, soube traduzir em cores e formas a beleza do mundo ao seu redor, deixando um legado duradouro no panorama da arte brasileira.`,
    year: 1997
  },
  {
    id: "29",
    title: "Paisagem Vinícola em Amarante - Portugal",
    artist: "Paulo Marinho",
    price: 25000,
    type: "Pintura a óleo",
    size: "38x46",
    size_with_frame: "70x78",
    tag: "1050",
    images: [],
    description: `Paulo Marinho (Rio de Janeiro, 5 de dezembro de 1944 - Rio de Janeiro, 17 de outubro de 2014) foi um pintor, desenhista e professor brasileiro renomado. Conhecido por sua abordagem autodidata e profunda conexão com a arte, Marinho deixou um legado significativo no cenário artístico nacional e internacional.

Nascido no Rio de Janeiro em 5 de dezembro de 1944, Paulo Marinho desenvolveu seu talento artístico de forma autodidata, tornando - se um profundo conhecedor de sua arte.Sua infância no bairro de Santa Teresa, no Rio de Janeiro, serviu como uma fonte constante de inspiração para suas obras.Embora autodidata, Marinho também buscou aprimoramento em diversas instituições, incluindo a Escola Brasileira de Desenho Publicitário(1958), o Liceu de Artes e Ofícios(1961), a Sociedade Brasileira de Belas Artes(1968) e a Associação Brasileira de Propaganda e Marketing(1970).

O cotidiano das pequenas cidades do interior do Brasil é o tema central das pinturas de Paulo Marinho.Suas obras retratam a vida pacata e simples de pessoas - povo com pinceladas suaves, transpassadas de lirismo e perdidas no tempo - espaço.As cenas da infância do pintor carioca são frequentemente revisitadas em suas telas, que se destacam pelo uso expressivo das cores.

Ao longo de sua carreira, Paulo Marinho recebeu inúmeras premiações no Brasil e no exterior, consolidando - se como um dos pintores mais respeitados do país.Entre os prêmios notáveis, destacam - se:

  1961 – Menção Honrosa – Salão Nacional
  1963 – Medalha de Bronze – Sociedade Brasileira de Belas Artes
  1970 – Medalha de Prata – Sociedade Brasileira de Belas Artes
  1980 – Medalha de Ouro – Salão da Aeronáutica
  1982 – Prêmio de Viagem ao Exterior – Salão Nacional Flumitur

Suas obras foram amplamente expostas em diversas galerias e eventos artísticos ao redor do mundo, incluindo:

  1970 – Queen’s Way Gallery – Califórnia, EUA
  1991 – La Galerie D’art Britannique – Lausanne, Suíça
  1992 – Grand Palms Club – Miami, EUA
  2007 – Oscar’s Galeria de Arte – Lisboa, Portugal

Marinho também realizou inúmeras exposições individuais e coletivas em diversas cidades brasileiras, como Rio de Janeiro, São Paulo, Vitória, Salvador, Recife, Curitiba, Porto Alegre, entre outras.

Paulo Marinho faleceu em 17 de outubro de 2014, no Rio de Janeiro, deixando um vasto e importante legado artístico.Suas obras fazem parte de acervos de instituições renomadas, como o Museu Nacional de Belas Artes no Rio de Janeiro e o Museu Maria Fontainha em Lisboa, Portugal, além de diversas coleções particulares e oficiais nacionais e estrangeiras.Sua contribuição para a arte brasileira é inegável, e seu trabalho continua a encantar e inspirar apreciadores da arte.`,
    year: 1984
  },
  {
    id: "30",
    title: "Ovelhas no Celeiro",
    artist: "Paulo Marinho",
    price: 25000,
    type: "Pintura a óleo",
    size: "45x54",
    size_with_frame: "79x88",
    tag: "1051",
    images: [],
    description: `Biografia de Paulo Marinho`,
    year: 1992
  },
  {
    id: "31",
    title: "Carro de Boi",
    artist: "Paulo Marinho",
    price: 6900,
    type: "Pintura a óleo",
    size: "32x40",
    size_with_frame: "66x74",
    tag: "1052",
    images: [],
    description: `Biografia de Paulo Marinho`,
    year: 1982
  },
  {
    id: "32",
    title: "Nilton Zanotti",
    artist: "Nilton Zanotti",
    price: 6900,
    new_price: 4140,
    is_promotion: true,
    type: "Acrílico",
    size: "50x70",
    size_with_frame: "71x81",
    tag: "1055",
    images: [],
    description: `Nilton Zanotti (1945-2008) foi um proeminente artista plástico brasileiro, cuja obra se destaca pela singularidade no tratamento das cores e por suas perspectivas inovadoras. Reconhecido por sua capacidade de transitar entre o figurativo e o abstrato, Zanotti deixou um legado artístico marcado pela expressividade e pela busca constante por novas formas de representação.

Nascido em 1945, Nilton Zanotti demonstrou desde cedo um profundo interesse pelas artes.Sua formação acadêmica incluiu passagens por instituições renomadas como a Associação Paulista de Belas Artes, a Pinacoteca do Estado de São Paulo(onde estudou modelo vivo), o Núcleo de Arte(desenho), e a Fundação Armando Álvares Penteado(FAAP), no Ateliê Livre.Além disso, aprofundou seus conhecimentos em história da arte na Biblioteca Mário de Andrade e dedicou - se ao estudo da manufatura de tintas, pigmentos e resinas nas Galerias Documenta, em São Paulo.Embora tenha atuado profissionalmente na área de publicidade até 1994, sua paixão pelas artes plásticas o levou a dedicar - se exclusivamente a elas a partir de 1995.

O estilo de Nilton Zanotti é inconfundível.Suas pinturas são notáveis pela forma como as cores se fundem e se sobrepõem, criando uma atmosfera quase translúcida e diáfana.Ele não se limitou a um único tema, explorando diversas abordagens e desenvolvendo uma linguagem visual própria que o distinguia no cenário artístico.Sua primeira exposição individual ocorreu em 1984, marcando o início de uma trajetória expositiva rica e diversificada.

Ao longo de sua carreira, Zanotti participou de importantes salões e exposições individuais e coletivas, tanto no Brasil quanto no exterior.Entre suas participações em salões, destacam - se o IV e V Salão da Faculdade N.S.do Patrocínio(onde recebeu o Prêmio Aquisição em 1983), e o 1º e 2º evento do Dia Internacional da Cor.Suas exposições individuais foram realizadas em galerias de prestígio como a Galeria de Arte Beth Barreto, o Hotel Hilton, a Galeria Legya Jafet, a Caixa Econômica Federal, a Frida Wolosker Zimberg, a Galeria de Arte André, a Galeria de Arte Elizabeth Nasser, a Beatriz Telles Ferreira e a Helena Fretta Galeria de Arte.Internacionalmente, suas obras foram exibidas na Overseas Gallery, em Miami, EUA.

Nilton Zanotti faleceu em março de 2008, deixando uma lacuna no mundo das artes.No entanto, seu legado permanece vivo através de suas obras e das homenagens póstumas.A cidade de Praia Grande, onde residia, nomeou a galeria de arte do Palácio das Artes como "Galeria Nilton Zanotti" em sua honra, um reconhecimento à sua contribuição para a cultura local e nacional.Sua última exposição, "Cores do Mundo", foi realizada postumamente, celebrando a riqueza e a diversidade de sua produção artística.

As obras de Nilton Zanotti, como "Paisagem", "Lírios" e "Natureza Morta", continuam a ser valorizadas no mercado de arte, sendo frequentemente leiloadas em casas de renome como Pátio, Clube Sírio, Renato Magalhães Gouveia, Maksoud Plaza e Wiso.Sua arte transcende o tempo, convidando o espectador a uma experiência visual única e profunda.`,
    year: null
  },
  {
    id: "33",
    title: "Nicson",
    artist: "Nicson",
    size: "30x40",
    price: null,
    size_with_frame: "50x60",
    is_promotion: true,
    type: "Pintura a óleo",
    tag: "1056",
    images: [],
    description: `João Feliciano, conhecido artisticamente como Nicson, foi um dos mais talentosos e reconhecidos pintores contemporâneos brasileiros, celebrado por sua maestria única na técnica de pintura com espátula em óleo sobre tela. Nascido em 22 de janeiro de 1946 e falecido em 24 de fevereiro de 2024, Nicson deixou um legado artístico excepcional que transcende fronteiras geográficas, com suas obras espalhadas pelo Brasil e pelo exterior.

O nome artístico "Nicson" representa uma fusão simbólica entre sua vida pessoal e profissional, sendo formado pela junção do nome de sua ex - esposa, Nicem, com seu sobrenome.Esta escolha reflete a natureza íntima e pessoal de sua arte, que sempre esteve profundamente conectada com suas experiências de vida e relacionamentos.

Nicson foi um artista autodidata, característica que o tornou ainda mais notável no cenário artístico brasileiro.Desde o final da década de 1960, dedicou - se integralmente à arte da pintura, desenvolvendo de forma independente sua técnica distintiva com espátula.Esta autodidaxia não representou uma limitação, mas sim uma fonte de originalidade e autenticidade em seu trabalho, permitindo - lhe desenvolver um estilo próprio e inconfundível.

Sua formação acadêmica incluiu estudos no Colégio Estadual General Osório e posteriormente na Escola de Curtimento de Estância Velha, no Rio Grande do Sul.Embora sua educação formal não tenha sido especificamente voltada para as artes plásticas, estas experiências contribuíram para formar sua visão de mundo e sensibilidade artística, elementos que posteriormente se refletiriam em suas obras.

O artista catarinense, radicado em Florianópolis, estabeleceu - se como um dos poucos pintores impressionistas autodidatas a alcançar reconhecimento comercial e crítico significativo durante sua própria vida.Esta conquista é particularmente notável considerando os desafios enfrentados por artistas autodidatas no mercado de arte contemporânea brasileiro.

A marca registrada de Nicson era sua maestria na pintura com espátula, uma técnica que ele elevou a um patamar de excelência.Através da espátula, ele conseguia criar texturas ricas e vibrantes, conferindo às suas obras uma profundidade e dinamismo únicos.Seu estilo impressionista, caracterizado pela captura da luz e da atmosfera, permitia - lhe transmitir emoção e movimento em cada pincelada.

Seus temas eram vastos e variados, refletindo sua paixão por diferentes paisagens e culturas.Nicson retratou com igual sensibilidade:

Paisagens Urbanas e Bucólicas: Desde as movimentadas ruas de Paris e Veneza até os tranquilos cenários rurais do Brasil e dos Estados Unidos, Nicson tinha a capacidade de capturar a essência de cada local.
Cenários Catarinenses: Ele era especialmente hábil em pintar as belezas naturais da Ilha de Santa Catarina, com seus casarios antigos e praias deslumbrantes, tornando - se um cronista visual da região.
Cenas Cotidianas e Figuras Humanas: Embora menos frequentes, suas obras também incluíam representações de figuras humanas e cenas do cotidiano, sempre com a mesma sensibilidade e técnica apurada.

Sua capacidade de transitar entre diferentes temas e locais, mantendo sempre um estilo coeso e reconhecível, demonstrava sua versatilidade e a profundidade de sua visão artística.
Reconhecimento e Legado
Ao longo de sua carreira, Nicson conquistou um reconhecimento significativo, tanto no Brasil quanto internacionalmente.Suas obras foram amplamente divulgadas e adquiridas por colecionadores e amantes da arte, solidificando sua posição como um dos artistas contemporâneos mais aclamados do país.Ele era conhecido por manter um ateliê no Floripa Shopping, em Florianópolis, onde frequentemente pintava "ao vivo", permitindo que o público testemunhasse seu processo criativo e interagisse com o artista.

O falecimento de João Feliciano em 24 de fevereiro de 2024, no Hospital Santa Terezinha, em Torres(RS), marcou o fim de uma era para a arte brasileira.No entanto, seu legado perdura através das centenas de obras que deixou, as quais continuam a encantar e inspirar.Nicson não foi apenas um pintor talentoso; ele foi um cidadão engajado, preocupado com a promoção da arte e da cultura, e sua sensibilidade e dedicação à arte são um testemunho de sua contribuição inestimável para o patrimônio cultural brasileiro.

Ele deixou um filho, um neto e sua viúva, Eneci Rocha Feliciano, que continuam a preservar sua memória e seu trabalho.A arte de Nicson, com suas cores vibrantes e texturas expressivas, continuará a reviver a "Era de Ouro do Impressionismo" em seu estilo exclusivo de espátula em óleo sobre tela, revisitando paisagens e emoções de forma atemporal.`,
    year: 2001
  },
  {
    id: "34",
    title: "Nicson",
    artist: "Nicson",
    price: 1800,
    new_price: 900,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "30x40",
    size_with_frame: "61x71",
    tag: "1057",
    images: [],
    description: `João Feliciano (Nicson): O Talentoso Artista da Espátula`,
    year: 2001
  },
  {
    id: "35",
    title: "Nicson",
    artist: "Nicson",
    price: 1800,
    new_price: 900,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "30x40",
    size_with_frame: "54x64",
    tag: "1058",
    images: [],
    description: `João Feliciano (Nicson): O Talentoso Artista da Espátula`,
    year: 2001
  },
  {
    id: "36",
    title: "Monteiro Prestes",
    artist: "Monteiro Prestes",
    price: 2550,
    new_price: 2040,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "47x61",
    size_with_frame: "77x91",
    tag: "1059",
    images: [],
    description: `Monteiro Prestes é um renomado artista plástico brasileiro, nascido em 1958 em Santana de Parnaíba, São Paulo. Sua jornada artística é marcada por uma transição notável de uma carreira em engenharia e administração para a dedicação integral à pintura a óleo, onde se destacou por seu estilo único e técnica apurada. Reconhecido por suas naturezas-mortas, paisagens, marinhas, florais, nus e interiores, Prestes é uma figura influente no cenário artístico brasileiro e internacional.

A paixão de Monteiro Prestes pela arte manifestou - se desde cedo.Em 1977, ele iniciou suas experimentações com desenhos a bico de pena e nanquim, evoluindo rapidamente para o uso de crayon no início dos anos oitenta.O ano de 1989 marcou um ponto de virada em sua carreira, quando ele pintou sua primeira obra a óleo.No início dos anos noventa, Prestes já estava expondo suas pinturas em diversas mostras individuais e coletivas por todo o Brasil.

Prestes é um artista autodidata, o que torna sua maestria ainda mais impressionante.Ele abandonou suas carreiras anteriores como engenheiro e administrador de empresas para se dedicar completamente à arte, uma decisão que reflete sua profunda conexão e compromisso com a pintura.

Os estilos favoritos de Monteiro Prestes incluem o clássico, o acadêmico e o neo - impressionista.Sua técnica é amplamente respeitada no meio artístico, e ele é conhecido por sua habilidade em explorar a luz e a sombra, conferindo vida e profundidade às suas obras.Em suas naturezas - mortas e florais, por exemplo, a luz que ele adota faz com que as flores pareçam vivas.Nas paisagens, ele explora as famílias do azul escondidas na natureza, e na figura humana, ele valoriza a luz e a sombra.

Suas pinceladas são firmes, confiantes e distintas, e suas cores são quentes e vibrantes, como a própria natureza.O brilho em suas obras é pura emoção, e cada trabalho é considerado uma obra - prima de seu talento.

Monteiro Prestes não é apenas um pintor prolífico, mas também um educador dedicado.Ele já teve uma galeria de arte em Moema, São Paulo, com mais de cem alunos, e ministrou aulas em diversas galerias e workshops por todo o Brasil.Atualmente, ele continua a dar aulas e workshops, e suas obras são produzidas para Nova York e mais de 50 países.

Ele também é autor de dois vídeos instrucionais sobre o uso do claro - escuro e da cor, demonstrando seu compromisso em compartilhar seu conhecimento e técnica com outros artistas.

A trajetória de Monteiro Prestes é um testemunho de sua paixão inabalável pela arte e de seu talento excepcional.De engenheiro a mestre da pintura a óleo, ele deixou uma marca indelével no mundo da arte, inspirando outros artistas e encantando colecionadores com suas obras vibrantes e cheias de vida.Sua contribuição para a arte brasileira e internacional é inegável, e seu legado continua a crescer a cada nova pincelada.`,
    year: null
  },
  {
    id: "37",
    title: "Na Praça",
    artist: "Miriam Postal",
    price: 1100,
    new_price: 990,
    is_promotion: true,
    type: "Serigrafia em Canva",
    size: "43x43",
    size_with_frame: "60x60",
    tag: "1060",
    images: [],
    description: `Miriam Postal Garbelotto, nascida em 21 de maio de 1962, em Passo Fundo, Rio Grande do Sul, é uma das mais renomadas artistas plásticas brasileiras da atualidade. Com um estilo inconfundível e uma paleta de cores vibrantes, Miriam conquistou seu espaço no cenário artístico nacional e internacional, retratando com maestria o cotidiano e a essência do povo brasileiro em suas obras.

Miriam Postal é bacharel em Desenho e Plástica(1982) e pós - graduada em Arte / Educação pela Universidade de Passo Fundo(UPF).Sua formação acadêmica, aliada a cursos de especialização no Brasil e no exterior, contribuiu para o desenvolvimento de um estilo artístico singular e facilmente reconhecível.A artista utiliza predominantemente a técnica de acrílico sobre tela, explorando a intensidade das cores e a expressividade dos traços.

Uma das características mais marcantes de sua obra é a representação de personagens com corpos volumosos e posturas ingênuas, muitas vezes vestidos com chita e chinelos.Essa escolha estética confere um toque de simplicidade e autenticidade às suas figuras, que se tornaram uma espécie de assinatura visual de Miriam Postal.Suas telas são um convite a um universo de cores quentes e composições dinâmicas, que refletem a alegria e a vivacidade da cultura brasileira.

A temática central da obra de Miriam Postal gira em torno do cotidiano e da alma brasileira.Suas pinturas são narrativas visuais que retratam cenas do dia a dia, festas populares, namoricos em praças, jogos de cartas e outros momentos que evocam a simplicidade e a riqueza cultural do Brasil.Os cenários frequentemente remetem a centros urbanos e ambientes familiares, criando uma atmosfera de familiaridade e aconchego.

Os personagens de Miriam Postal, com seus corpos roliços e carismáticos, são o fio condutor de suas histórias.Eles expressam emoções e situações de forma ingênua e cativante, convidando o observador a mergulhar em um universo de afetos e memórias.A artista tem a habilidade de transformar o ordinário em extraordinário, revelando a beleza e a poesia presentes nas pequenas coisas da vida.

Além das telas, a arte de Miriam Postal transcendeu os limites das galerias e museus, estampando diversos produtos como canecas, agendas e outros itens.Essa popularização de sua obra demonstra o alcance e a identificação do público com seu estilo e suas temáticas.

Ao longo de sua carreira, Miriam Postal participou de importantes exposições de arte, tanto no Brasil quanto no exterior.Suas obras foram exibidas em eventos de destaque como a ARTEXPO em Nova Iorque, além de exposições na Bélgica e Alemanha, consolidando sua presença no cenário artístico internacional.

O reconhecimento de seu trabalho é evidenciado pelos diversos prêmios e menções honrosas que recebeu.Em 2019, a artista foi homenageada pela Academia Passo - fundense de Letras com a Comenda de Mérito Cultural Sante Uberto Barbieri, um testemunho de sua contribuição significativa para a cultura.A singularidade de seu estilo e a profundidade de suas temáticas fizeram com que suas pinturas fossem facilmente reconhecíveis, tornando - se uma marca registrada no universo da arte brasileira.`,
    year: 2015
  },
  {
    id: "38",
    title: "Mir Sestrem",
    artist: "Mir Sestrem",
    price: 2900,
    new_price: 2030,
    is_promotion: true,
    type: "Encremento de Cupim na Madeira",
    size: "33x48",
    size_with_frame: "60x75",
    tag: "1061",
    images: [],
    description: `Mir Sestrem, cujo nome de batismo é Claudemir João Sestrem, é um artista plástico brasileiro que se destaca por sua abordagem singular e inovadora na criação artística. Sua obra é intrinsecamente ligada a uma técnica que ele mesmo denomina "Aglutinado Celular de Madeira Estratificada", um processo que utiliza um material inusitado e surpreendente: os excrementos de cupins.

A jornada de Sestrem com essa técnica peculiar teve início em 1979, durante um trabalho escolar sobre o Dia da Árvore.Foi nesse contexto que ele teve seu primeiro contato aprofundado com madeiras e, consequentemente, com os insetos que delas se alimentam.Esse encontro inicial despertou uma fascinação pelos cupins, que se transformaria em uma paixão e, posteriormente, na base de sua expressão artística.

Através de seus estudos e observações, Mir Sestrem descobriu a riqueza cromática presente nos excrementos desses insetos.Ele notou que os cupins, dependendo do tipo de madeira que consomem, produzem resíduos em uma vasta gama de tonalidades.Essa percepção o levou a explorar e catalogar essa paleta natural, identificando até 79 tons distintos que podem ser extraídos dos excrementos de diferentes espécies de cupins.

O processo criativo de Sestrem é meticuloso e exige uma paciência notável.Ele mantém um viveiro com 250 espécies de cupins, alimentando - os com 3.600 tipos variados de madeira para obter a diversidade de cores desejada.Uma vez coletados, os minúsculos excrementos são cuidadosamente manuseados.Com o auxílio de pinças, o artista cola cada partícula individualmente, construindo imagens e paisagens intrincadas em suas obras.Essa técnica, que transforma o que muitos consideram um resíduo em matéria - prima artística, é um testemunho da visão única de Sestrem e de sua capacidade de encontrar beleza e potencial onde menos se espera.

Além da originalidade da técnica, Mir Sestrem enfatiza que todo o processo é ecologicamente correto, não utilizando produtos químicos em nenhuma etapa da criação.Suas obras, que já foram expostas em diversas cidades e em instituições renomadas como o MASP(Museu de Arte de São Paulo) em 1981, demonstram a versatilidade e o impacto de sua "Arte em Cupim", consolidando seu lugar como um artista verdadeiramente inovador no cenário contemporâneo.`,
    year: 2004
  },
  {
    id: "39",
    title: "Penélope",
    artist: "Marcos Leal",
    price: 2900,
    new_price: 2175,
    is_promotion: true,
    type: "Acrílico",
    size: "100x50",
    tag: "1062",
    images: [],
    description: `Marcos Alexandre Leal é um renomado artista plástico brasileiro, nascido em 10 de junho de 1967, na cidade de Caxias do Sul, Rio Grande do Sul, onde reside e trabalha atualmente. Sua jornada artística começou cedo, em 1980, como um autodidata, explorando o universo da pintura de forma independente. Além de sua dedicação à arte, Marcos Leal também atuou profissionalmente como designer, projetista e arte-finalista, experiências que, sem dúvida, enriqueceram sua percepção e técnica.

A primeira exposição individual de Marcos Leal, intitulada "Paisagens Gaúchas", marcou sua entrada oficial no cenário artístico em 1997. Dois anos depois, em 1999, o artista deu um passo significativo em sua carreira ao se mudar para Milão, na Itália.Essa experiência internacional foi crucial para seu desenvolvimento, permitindo - lhe apresentar seu trabalho a um novo público, experimentar novas técnicas e aprimorar ainda mais sua arte.Ao longo de sua carreira, Marcos Leal participou de mais de quarenta exposições, entre individuais e coletivas, consolidando sua presença no mundo da arte.

Marcos Leal é amplamente reconhecido por seu estilo único, que ele próprio define como "cubismo arredondado".Suas obras são imediatamente identificáveis pelo uso vibrante de cores e pela representação expressiva da figura humana em seu contexto social.O artista demonstra uma particular sensibilidade e dedicação à figura feminina, que frequentemente se destaca em suas composições.Sua versatilidade técnica é notável, utilizando materiais como acrílica sobre tela, óleo e aquarela para dar vida às suas visões artísticas.

O trabalho de Marcos Leal transcendeu fronteiras, sendo exibido em diversos países e integrando acervos de importantes galerias de arte e coleções particulares.A crítica especializada elogia sua capacidade de criar obras que emanam um "sentido de libertação de toda angústia existencial", ressaltando a profundidade e o impacto emocional de sua arte.Marcos Leal continua a ser uma figura influente no cenário da arte brasileira, com um ateliê aberto em Caxias do Sul, onde segue em um processo criativo contínuo, produzindo novas obras diariamente.`,
    year: 2023
  },
  {
    id: "40",
    title: "Mademoiselles",
    artist: "Marcos Leal",
    price: 3500,
    new_price: 2625,
    is_promotion: true,
    type: "Acrílico",
    size: "700x100",
    tag: "1063",
    images: [],
    description: `Marcos Leal: Biografia do Artista Plástico`,
    year: 2022
  },
  {
    id: "41",
    title: "Céu Azul",
    artist: "Marcos Leal",
    price: 1700,
    new_price: 1275,
    is_promotion: true,
    type: "Acrílico",
    size: "40x100",
    tag: "1064",
    images: [],
    description: `Marcos Leal: Biografia do Artista Plástico`,
    year: 2016
  },
  {
    id: "42",
    title: "Marcos Leal",
    artist: "Marcos Leal",
    price: 1600,
    new_price: 1200,
    is_promotion: true,
    type: "Acrílico",
    size: "46x61",
    size_with_frame: "49x64",
    tag: "1065",
    images: [],
    description: `Marcos Leal: Biografia do Artista Plástico`,
    year: null
  },
  {
    id: "43",
    title: "Marco Antônio Moreira",
    artist: "Marco Antônio Moreira",
    price: 5900,
    new_price: 3540,
    is_promotion: true,
    type: "Acrílico",
    size: "70x50",
    size_with_frame: "98x78",
    tag: "1072",
    images: [],
    description: `Marco Antônio Moreira, nascido em Caeté, Minas Gerais, em 1946, é um renomado pintor brasileiro cuja obra se destaca no cenário das artes plásticas. Com uma carreira consolidada ao longo de décadas, Moreira tem participado de inúmeras exposições coletivas tanto no Brasil quanto no exterior, solidificando seu nome como um artista de relevância. Sua trajetória artística é marcada por uma constante evolução e um estilo que cativa admiradores e colecionadores.

A carreira de Marco Antônio Moreira é pontuada por uma vasta participação em exposições coletivas, demonstrando a abrangência e o reconhecimento de sua arte.No Brasil, suas obras foram exibidas em importantes centros culturais e galerias nos estados de Minas Gerais, Rio de Janeiro, Distrito Federal, São Paulo, Santa Catarina e Espírito Santo.Essa presença em diversas regiões do país reflete a aceitação e o interesse do público e da crítica por seu trabalho.

Além de sua atuação nacional, Marco Antônio Moreira também levou sua arte para o cenário internacional.Entre os anos de 1973 e 1986, o pintor participou de coletivas em Nova York e Nova Jersey, nos Estados Unidos.Essa experiência no exterior contribuiu para a projeção de sua obra e para o intercâmbio cultural, expondo seu talento a um público mais amplo e diversificado.

Embora a data exata de seu nascimento não esteja disponível em todas as fontes, a Artmajeur o descreve como um artista contemporâneo brasileiro, ativo desde 2017 na plataforma, com obras de pintura em acrílico sobre tela.Suas pinturas frequentemente retratam paisagens rurais, cenas abstratas e temas que exploram a luz e a energia cósmica, como visto em obras como "Luz na noite profunda", "Paisagem rural em Alto Jequitibá (MG)" e "Energia Cósmica".

O estilo de Marco Antônio Moreira, conforme observado em suas obras disponíveis, abrange a pintura abstrata, arte outsider, expressionismo, impressionismo e pop art.Essa versatilidade demonstra a capacidade do artista de transitar por diferentes correntes e técnicas, enriquecendo sua produção.Suas obras são caracterizadas por um "mergulho na intensidade do gesto e na poesia do instante", revelando uma abordagem profunda e expressiva em suas criações.

  Entre as obras notáveis de Moreira, destacam - se pinturas a óleo sobre tela, como "Casario", que exemplifica sua habilidade em retratar elementos arquitetônicos e paisagísticos com sensibilidade.As obras listadas na Artmajeur, como "Luz na noite profunda", "Paisagem rural em Alto Jequitibá (MG)", "Sinfonia de luz", "Expansão da matéria", "Energia Cósmica", "Paisagem crepuscular com reflexos", "...E do vazio se fez a luz" e "Rubras árvores", demonstram a diversidade de seus temas e a riqueza de sua paleta de cores, com o uso predominante de acrílico sobre tela.`,
    year: 2002
  },
  {
    id: "44",
    title: "Mângelo",
    artist: "Mângelo",
    price: 2400,
    new_price: 1680,
    is_promotion: true,
    type: "Acrílico",
    size: "49x79",
    size_with_frame: "78x108",
    tag: "1074",
    images: [],
    description: `Mângelo: Um Artista Plástico Brasileiro`,
    year: 1995
  },
  {
    id: "45",
    title: "Luiz Si",
    artist: "Luiz Si",
    price: 2900,
    new_price: 1450,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "58x78",
    size_with_frame: "87x107",
    tag: "1075",
    images: [],
    description: `Luiz Carlos da Silva (1941-2011), conhecido artisticamente como Luiz Si, foi uma figura proeminente no cenário das artes plásticas de Santa Catarina e do Brasil. Nascido em São José, sua trajetória foi marcada por uma dedicação incansável à pintura e ao desenho, bem como por um forte engajamento na formação de novos talentos e na difusão da arte em sua região. Sua obra, caracterizada pelo abstracionismo e pela experimentação, rendeu-lhe reconhecimento nacional e internacional, consolidando seu legado como um dos grandes nomes da arte catarinense.

Luiz Si iniciou sua jornada acadêmica cursando Sociologia Urbana na Universidade Federal de Santa Catarina(UFSC).Contudo, sua paixão pelas artes o levou a buscar formação específica em desenho e pintura com Sílvio Pléticos, em Florianópolis, e a realizar um estágio em escultura com Maria Guilhermina Gonçalves, em Goiânia / GO.Essa base diversificada contribuiu para a riqueza e a profundidade de sua produção artística.

A carreira de Luiz Si começou a ganhar destaque em 1969, com sua participação no Salão Arte Jovem MAC em Campinas(SP).A partir de então, ele participou de inúmeras exposições coletivas e individuais em diversas cidades de Santa Catarina e outros estados brasileiros, incluindo a Pré - Bienal de São Paulo em 1970. Em 1976, realizou sua primeira exposição individual na galeria Açú - Açú, em Blumenau.

    Em 1978, Luiz Si fixou residência em Joinville, cidade que se tornaria o epicentro de sua atuação artística e educacional.Por indicação de Lindolf Bell, poeta e proprietário da galeria de arte Açú - Açú, Luiz Si engajou - se ativamente no meio artístico local.Ele foi convidado para lecionar pintura na Escola de Artes Fritz Alt, na Casa da Cultura Fausto Rocha Júnior, onde permaneceu por 27 anos, formando gerações de artistas.Além de sua atuação como professor, Luiz Si foi fundamental na organização de movimentos e entidades como a AAPLAJ(Associação dos Artistas Plásticos de Joinville) e a Coletiva de Artistas de Joinville, trabalhando incansavelmente pela difusão das artes plásticas na região.

Sua obra transcendeu as fronteiras nacionais, sendo exposta em países como Argentina, Uruguai, Peru, Itália e Espanha.Luiz Si era reconhecido por sua dedicação ao abstracionismo e à experimentação, utilizando diversas técnicas e materiais, como óleo sobre madeira e tinta de caneta, para criar uma linguagem única e sofisticada.

Além de sua produção artística, Luiz Si dedicou - se a projetos educacionais, levando a arte para as escolas e bairros de Joinville.Entre 1996 e 2009, ele realizou pinturas murais em 21 escolas municipais, como parte de um projeto que visava integrar crianças e jovens ao universo artístico, despertando o interesse pela arte e incentivando a criatividade.Essas iniciativas, com o apoio da Secretaria Municipal de Educação, tornaram a arte mais acessível e impactante para a comunidade.

Luiz Si faleceu em 2011, aos 69 anos, deixando um legado inestimável para a arte brasileira.Sua contribuição não se limita às suas obras, mas se estende à sua atuação como educador e articulador cultural, que ajudou a moldar o cenário artístico de Santa Catarina e a inspirar inúmeros artistas.Sua memória e sua obra continuam a ser celebradas, reafirmando seu lugar de destaque na história da arte.`,
    year: 2009
  },
  {
    id: "46",
    title: "Luiz Si",
    artist: "Luiz Si",
    price: 1400,
    new_price: 700,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "26x30",
    size_with_frame: "48x52",
    tag: "1076",
    images: [],
    description: `Luiz Si: Uma Vida Dedicada à Arte Catarinense`,
    year: 1984
  },
  {
    id: "47",
    title: "Luiz Si",
    artist: "Luiz Si",
    price: 1400,
    new_price: 700,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "29x39",
    size_with_frame: "39x49",
    tag: "1077",
    images: [],
    description: `Luiz Si: Uma Vida Dedicada à Arte Catarinense`,
    year: 1982
  },
  {
    id: "48",
    title: "Luiz Carlos Albertini",
    artist: "Luiz Carlos Albertini",
    price: 6900,
    new_price: 5175,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "77x95",
    size_with_frame: "103x122",
    tag: "1079",
    images: [],
    description: `Luiz Carlos Albertini, nascido em 20 de julho de 1941, na Fazenda São José, em Pedregulho, São Paulo, é um artista plástico multifacetado, reconhecido por sua trajetória singular que transita entre a ilustração, a tapeçaria e a pintura. Autodidata, Albertini construiu uma carreira artística sólida, marcada pela experimentação e pela busca constante por novas formas de expressão. Sua obra reflete uma sensibilidade apurada e um domínio técnico que o consolidaram como uma figura importante no cenário artístico brasileiro.

A trajetória de Luiz Carlos Albertini é notável por seu caráter autodidata.Em 1957, já residindo em São Paulo, ele iniciou sua jornada profissional trabalhando com a ilustração de dicionários, uma atividade que, paralelamente, o permitiu desenvolver suas habilidades em pintura.Antes de se dedicar integralmente à arte, Albertini também atuou em empresas automobilísticas e desempenhou funções como secretário bilíngue, intérprete e tradutor, experiências que, sem dúvida, enriqueceram sua percepção de mundo e sua capacidade de expressão artística.

O estilo de Luiz Carlos Albertini é caracterizado por sua versatilidade, navegando com fluidez entre o figurativo e o abstrato.Em suas obras figurativas, o artista demonstra um meticuloso trabalho com pinceladas pequenas e precisas, que conferem detalhes e profundidade às suas criações.Já nos trabalhos abstratos, Albertini explora a liberdade do gesto e a expressividade das manchas de cor, muitas vezes aplicadas com espátula, resultando em composições dinâmicas e vibrantes.A técnica predominante em sua produção é o óleo sobre tela, que ele domina com maestria, explorando as possibilidades de textura e luminosidade que essa mídia oferece.

Ao longo de sua carreira, Luiz Carlos Albertini conquistou reconhecimento no meio artístico, com suas obras sendo exibidas em diversas exposições individuais.Dentre elas, destacam - se mostras na Livraria Cultura e na Galeria de Arte do Auditório Itália, que permitiram ao público apreciar a diversidade e a profundidade de sua produção.A relevância de seu trabalho é atestada pela presença de seu nome em importantes acervos e catálogos de arte, como o Catálogo das Artes, o Guia das Artes e a Enciclopédia Itaú Cultural, consolidando seu lugar na história da arte brasileira.Além da pintura, Albertini também é reconhecido por sua contribuição à tapeçaria moderna brasileira, com trabalhos desenvolvidos na década de 70.

Luiz Carlos Albertini representa um exemplo de dedicação e talento no cenário artístico.Sua capacidade de transitar entre diferentes linguagens e técnicas, aliada à sua paixão pela arte, resultou em uma obra rica e diversificada que continua a encantar e inspirar.Sua biografia é um testemunho da força da autodidaxia e da persistência na busca pela expressão artística.`,
    year: 1992
  },
  {
    id: "49",
    title: "Luiz Carlos Albertini",
    artist: "Luiz Carlos Albertini",
    price: 6750,
    new_price: 5025,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "72x93",
    size_with_frame: "77x98",
    tag: "1080",
    images: [],
    description: `Luiz Carlos Albertini: Uma Biografia Artística`,
    year: 1994
  },
  {
    id: "50",
    title: "Arlequim",
    artist: "Lúcia Horst Calluf",
    price: 1900,
    new_price: 950,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "50x40",
    size_with_frame: "76x66",
    tag: "1082",
    images: [],
    description: `Lúcia Horst Calluf, nascida em 1941 em Alfredo Wagner, Santa Catarina, foi uma notável pintora que estabeleceu residência em Curitiba, Paraná. Desde a infância, Lúcia demonstrou um profundo interesse pelas artes plásticas, um caminho que viria a trilhar com dedicação e paixão ao longo de sua vida.

Sua jornada formal no mundo da arte teve início em 1979, quando começou seus estudos em Desenho e Pintura sob a orientação do renomado Alberto Massuda.Buscando aprofundar seu conhecimento e compreensão da arte, Lúcia dedicou - se ao estudo da História Universal da Arte, entre 1980 e 1984, e da História da Arte no Brasil, em 1987, ambas as disciplinas cursadas com Maria Cecília Araújo Noronha, no Museu de Arte do Paraná(MAA).

    Entre 1981 e 1987, frequentou os Cursos Livres de Desenho e Pintura na prestigiada Andrade Lima Galeria & Escola de Arte, onde foi orientada por Luiz Carlos de Andrade Lima.Em 1982, expandiu ainda mais seus horizontes artísticos ao participar de um Curso Intensivo de Impressionismo e Expressionismo em São Paulo, ministrado por Miguel Lopes Pallas.Essa formação diversificada e aprofundada moldou sua visão artística e a preparou para uma carreira prolífica.

A obra de Lúcia Horst Calluf é caracterizada por sua dedicação a temas como naturezas - mortas, flores e figuras humanas.Seu estilo pode ser descrito como "matisseano", uma referência ao mestre Henri Matisse, conhecido por seu uso vibrante da cor e composições harmoniosas.Para Lúcia, a cor era um elemento fundamental, essencial para conferir expressividade e vida às suas criações.Um exemplo notável de sua produção é a obra "Natureza Morta (Begônia)", datada de 1981, que reflete a maestria da artista em capturar a beleza e a essência de seus temas.

Além de sua produção artística, Lúcia Horst Calluf foi uma figura ativa e engajada na comunidade artística.Participou de diversas palestras e encontros de arte, demonstrando seu compromisso com o diálogo e o intercâmbio de ideias no meio artístico.Sua liderança foi reconhecida quando coordenou a 3ª ENAPP(Encontro Nacional de Artistas Plásticos do Paraná) em 1992. Adicionalmente, exerceu o cargo de Vice - Diretora Administrativa da APAP - PR(Associação Profissional dos Artistas Plásticos do Paraná) durante a gestão de 1989 a 1992, contribuindo significativamente para o desenvolvimento e a valorização da arte no Paraná.

Lúcia Horst Calluf faleceu em 29 de dezembro de 2024, deixando um legado artístico e uma contribuição inestimável para a cultura brasileira.`,
    year: 1993
  },
  {
    id: "51",
    title: "Cinzas Vulcânicas",
    artist: "Kenji Fukuda",
    price: 30000,
    type: "Técnica Mista",
    size: "120x110",
    size_with_frame: "128x118",
    tag: "1084",
    images: [],
    description: `Roberto Kenji Fukuda (1943-2021) foi um dos mais importantes artistas plásticos nisseis do Brasil. Filho do renomado pintor e imigrante japonês Tamotsu Fukuda, Kenji herdou do pai o talento e a paixão pela arte, trilhando um caminho de sucesso e reconhecimento nacional e internacional. Sua obra, que transita entre o figurativo e o abstrato, é marcada pela maestria técnica, pela sensibilidade oriental e por uma profunda conexão com a expressão artística.

Kenji Fukuda iniciou sua jornada artística precocemente, aos 12 anos, sob a orientação de seu pai.Seus primeiros trabalhos eram predominantemente figurativos, explorando temas como paisagens, naturezas - mortas e retratos.Essa fase inicial foi crucial para o desenvolvimento de sua técnica e para a construção de sua identidade artística.Em 1963, realizou sua primeira exposição individual na cidade de Lins, São Paulo, marcando o início de uma prolífica carreira expositiva.

    Aos 35 anos, Kenji Fukuda deu um passo decisivo em sua carreira, migrando para o abstracionismo.Essa transição não foi por acaso; para ele, o abstrato representava a fase mais livre e desafiadora da arte, um campo de infinitas possibilidades.Sua obra abstrata é caracterizada pela espontaneidade, pelo uso vibrante das cores e por uma técnica apurada que transmitia força e leveza simultaneamente.

O reconhecimento internacional não tardou a chegar.Kenji Fukuda expôs suas obras em importantes cidades ao redor do mundo, como Berlim(1985), Paris(1989), Los Angeles(1990), Madri e Nova Iorque, consolidando seu nome no cenário artístico global.

Além de sua notável contribuição para a pintura, Kenji Fukuda também se destacou como escultor.Seu talento nessa área foi imortalizado em 2007, quando foi o responsável pela criação do monumento comemorativo aos Jogos Pan - Americanos do Rio de Janeiro.A imponente obra, com 15 metros de altura e cinco toneladas, está localizada na Avenida Abelardo Bueno, na Barra da Tijuca, e representa o reconhecimento pleno de seu trabalho como artista plástico brasileiro.Para Fukuda, a oportunidade de confeccionar uma escultura para um evento de tamanha magnitude foi o maior presente que um artista poderia receber.

Kenji Fukuda faleceu em 30 de março de 2021, em Curitiba, Paraná, deixando um legado inestimável para a arte brasileira.Suas obras, que refletem uma fusão única de influências orientais e ocidentais, podem ser encontradas em importantes museus e coleções particulares no Brasil e no exterior.Considerado um dos artistas nisseis mais influentes, Kenji Fukuda transcendeu fronteiras e estilos, deixando uma marca indelével na história da arte contemporânea.`,
    year: 2020
  },
  {
    id: "52",
    title: "João calixto",
    artist: "João calixto",
    price: 4600,
    new_price: 2760,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "44x35",
    size_with_frame: "66x57",
    tag: "1086",
    images: [],
    description: `João Batista Calixto de Jesus (1922-1994) foi um proeminente artista brasileiro, cuja multifacetada carreira abrangeu a pintura, a serigrafia, a publicidade e o ensino. Nascido e falecido em São Paulo, Calixto deixou um legado significativo no cenário artístico nacional, caracterizado por sua abordagem única da paisagem urbana e sua profunda conexão com a cidade que o viu nascer e crescer.

A jornada artística de Calixto teve início na Escola de Belas Artes de São Paulo, onde estudou entre 1947 e 1952. Sua busca por conhecimento se estendeu à história da estética, cursada no renomado Museu de Arte de São Paulo(MASP) em 1961, e à serigrafia, aprimorada no Sesi em 1969. Essa formação diversificada forneceu - lhe as ferramentas e a sensibilidade necessárias para explorar diferentes vertentes da arte.

Sua primeira exposição individual, realizada em 1954, marcou o início de sua projeção no circuito artístico.Paralelamente à sua produção em tela, Calixto dedicou - se à arte sacra, contribuindo com a decoração de importantes igrejas em São Paulo, como a Igreja Vera Cruz(trabalho que se estendeu por cinco anos a partir de 1952), a Igreja Nossa Senhora do Paraíso(1954) e a Igreja Ocauçu(1956).Essa fase de sua carreira demonstra sua versatilidade e a capacidade de aplicar seu talento em diferentes contextos.

    Entre 1957 e 1975, João Calixto fez uma incursão notável no universo da publicidade, especializando - se em artes gráficas.Essa experiência, embora fora do campo da pintura tradicional, influenciou profundamente seu estilo artístico posterior, conferindo - lhe um olhar objetivo e pragmático, com uma percepção aguçada para a composição e o impacto visual.A influência do cinema, com seus "close-ups", "medium shots" e "long shots", tornou - se uma característica distintiva de suas obras, refletindo sua vivência no mundo da comunicação visual.

Além de sua atuação como artista e publicitário, Calixto dedicou - se ao ensino, compartilhando seu conhecimento e paixão pela arte com as novas gerações.Lecionou na Escola Panamericana de Arte e na Faculdade de Belas Artes de São Paulo, onde, em 1971, alcançou o posto de professor - titular.Sua contribuição acadêmica foi fundamental para a formação de diversos artistas e para o desenvolvimento do ensino de artes no Brasil.

A obra de João Calixto é intrinsecamente ligada à cidade de São Paulo.Sua pintura é um testemunho de seu amor pela paisagem urbana e sua preocupação com a "arqueologia urbana", explorando as ruas, os minhocões e os outdoors que compõem o cenário metropolitano.As telas de Calixto transmitem a impressão de um mundo vibrante e colorido, por vezes acolhedor, por vezes desafiador, mas sempre repleto de vida.

Conforme Carlos Von Schmidt, crítico de arte, a pintura de Calixto "nos dá a impressão exata de um mundo exuberante, colorido, mas nem sempre acolhedor. (...) Aqui, a influência do cinema, do olho objetivo e pragmático do ex-publicitário, é nítida. Os 'close-ups', os 'mediuns shots', os 'long shots', ocorrem com natural normalidade".Essa citação ressalta a singularidade de seu estilo, que mescla a sensibilidade artística com a precisão visual.

Ao longo de sua carreira, João Calixto participou de inúmeras exposições individuais e coletivas, tanto no Brasil quanto no exterior, consolidando sua posição como um dos grandes nomes da arte brasileira.Suas obras foram exibidas em importantes instituições, como o Museu de Arte Brasileira(MAB - FAAP), o Museu de Arte Contemporânea da USP(MAC / USP) e a Pinacoteca do Estado de São Paulo.

João Batista Calixto de Jesus foi um artista completo, cuja obra e trajetória refletem a efervescência cultural de São Paulo e a riqueza da arte brasileira.Sua capacidade de transitar entre diferentes linguagens artísticas, sua dedicação ao ensino e sua visão singular da paisagem urbana o consolidam como uma figura de grande relevância, cujo legado continua a inspirar e a enriquecer o panorama artístico.`,
    year: null
  },
  {
    id: "53",
    title: "Cabo Frio",
    artist: "Jean Guillaume",
    price: 1800,
    new_price: 1260,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "27x41",
    size_with_frame: "46x60",
    tag: "1087",
    images: [],
    description: `Jean Jules Joseph Guillaume (Bayonne, Aquitânia, França, 26 de maio de 1912 - Cabo Frio, RJ, 25 de agosto de 1985), conhecido como Jean Guillaume, foi um pintor, desenhista e ilustrador francês, radicado no Brasil.

Guillaume teve uma formação artística autodidata, aprimorando suas habilidades em Bordeaux e Paris.Em 1938, estudou na renomada Académie de La Grande Chaumière, em Paris.Em 1939, antes da Segunda Guerra Mundial, viajou pelo Extremo Oriente(China, Vietnã, Camboja) como marinheiro.Ele foi convocado para o exército francês e participou da 2ª Guerra Mundial(1939 - 1945).

    Em 1951, Jean Guillaume mudou - se para o Rio de Janeiro, onde estabeleceu um ateliê e trabalhou como ilustrador.Sua obra é caracterizada como figurativista, com notável influência do surrealismo, especialmente do artista Max Ernst.

      Em 1961, ele se estabeleceu em Cabo Frio, no estado do Rio de Janeiro, onde continuou a pintar e viveu até sua morte em 1985. A cidade de Cabo Frio e seus arredores foram temas recorrentes em suas obras, como evidenciado em um grande painel retratando o porto da cidade.`,
    year: 1969
  },
  {
    id: "54",
    title: "Jair Martins",
    artist: "Jair Martins",
    price: 3400,
    new_price: 2380,
    is_promotion: true,
    type: "Acrílico",
    size: "118x150",
    size_with_frame: "121x153",
    tag: "1088",
    images: [],
    description: `Jair Martins é um renomado artista plástico natural de Florianópolis, Santa Catarina, onde vive e trabalha. Sua trajetória artística é profundamente ligada à cultura e às tradições da Ilha de Santa Catarina, as quais ele eterniza em suas obras com um estilo singular.

Nascido em uma família com inclinações artísticas, Jair Martins teve seu primeiro contato com o universo da arte ainda na infância.Aos 15 anos, já demonstrava seu talento ao realizar sua primeira exposição individual, marcando o início de uma promissora carreira.Sua formação acadêmica foi consolidada na Universidade do Estado de Santa Catarina(UDESC), onde se graduou em Educação Artística com habilitação em Artes Plásticas em 1993. Antes de sua formação, ele trabalhou como moldureiro por sete anos, de 1982 a 1989, período que despertou ainda mais sua paixão pela pintura.

A pintura de Jair Martins é facilmente reconhecível pela superposição de planos e cores, frequentemente em tons pastéis, que conferem uma atmosfera única às suas criações.Ele transforma as ricas tradições da ilha em signos plásticos, criando uma linguagem visual que celebra a identidade local.Seus temas recorrentes incluem os principais ícones patrimoniais e antropológicos de Florianópolis, como a pesca artesanal, as manifestações culturais do boi - de - mamão e do pau de fitas, e a arquitetura colonial que pontua a paisagem da ilha.

Ao longo de sua carreira, Jair Martins participou de inúmeras exposições, tanto individuais quanto coletivas, consolidando seu nome no cenário artístico.Dentre suas mostras mais notáveis, destacam - se "Ilha Faceira" e "Ilha Formosa", ambas homenageando a rica cultura de Florianópolis.Em uma ocasião especial, ele expôs ao lado de seus três irmãos, também artistas plásticos, em um evento que celebrou o talento da família Martins.Jair Martins valoriza o contato com o público, vendo suas exposições como uma oportunidade de compartilhar sua arte e interagir com as pessoas.

Além de sua produção artística, Jair Martins também dedicou parte de sua carreira à educação.Lecionou História da Arte e Fundamentos da Linguagem Visual no Instituto Estadual de Educação(IEE) e compartilhou seu conhecimento sobre manifestações folclóricas, contribuindo para a formação de novas gerações e a preservação da cultura local.

Jair Martins é, portanto, um artista que não apenas retrata a alma de Florianópolis em suas telas, mas também a difunde e a perpetua através de sua arte e de seu trabalho como educador.`,
    year: 2017
  },
  {
    id: "55",
    title: "Ivo Silva",
    artist: "Ivo Silva",
    price: 1800,
    new_price: 900,
    is_promotion: true,
    type: "Acrílica Sobre Eucatex",
    size: "50x40",
    size_with_frame: "69x59",
    tag: "1089",
    images: [],
    description: `Ivo Silva, nascido em Florianópolis, Santa Catarina, em 1952, é um nome proeminente nas artes plásticas brasileiras, reconhecido por sua versatilidade como escultor, pintor e gravador. Sua trajetória artística, marcada por uma abordagem autodidata e uma profunda conexão com a natureza e o universo do fantástico, o estabeleceu como uma figura singular no cenário cultural catarinense e nacional.

Ainda jovem, Ivo Silva demonstrou um talento inato para as artes.Sua formação inicial ocorreu no Colégio de Aplicação da Universidade Federal de Santa Catarina(UFSC), onde teve a oportunidade de ser orientado pela renomada professora Delci Canela.Essa experiência foi fundamental para o desenvolvimento de suas habilidades e para o despertar de sua paixão pela expressão artística.Em 1968, Ivo Silva já participava de sua primeira exposição coletiva na UFSC, um marco que sinalizava o início de uma promissora carreira.

Ao longo das décadas, Ivo Silva construiu um impressionante currículo expositivo, com participações em mostras individuais e coletivas que o levaram a diversos cantos do Brasil e até mesmo ao exterior.Suas obras foram exibidas em importantes instituições e galerias, consolidando seu nome no circuito artístico.Entre as exposições individuais(Ind.) e coletivas(Col.) mais notáveis, destacam - se:

  1974 / 76: Ind.Diretur, Florianópolis.
1977: Salão dos Novos, Curitiba.
1979: Gravadores Nacionais, Museu de Arte de Santa Catarina(MASC).
1981: Ind.Casa da Cultura, Florianópolis.
1984: Ind.Eletrosul, Florianópolis.
1985: Ind.SEE, Florianópolis.
1987: Ind.Casa da Cultura de Blumenau / SC.
1988: Ind.Galeria de Arte do Palácio Barriga Verde, Florianópolis; Col.MASC.
1990: Ind.Galeria de Arte da Câmara Municipal de Florianópolis.
1991: Ind.Espaço Cultural Fernando Beck, Badesc; Cols.de Verão e de Inverno, ACAP.
1995 / 98 e 2000: Cols.ACAP.
1996: Ind.Galeria de Arte do Palácio Barriga Verde, Florianópolis.
1998: Ind.Casa da Cultura de Florianópolis.
2001: Participação no IV Salão Nacional A Arte de Viver, São Paulo / SP, e coletiva em Paris, França, patrocinada pelo Ministério da Cultura, Brasília / DF.
2002: Ind.Prenúncios da Primavera, Galeria da Câmara Municipal de Florianópolis; Ind.Naturezas Mortas, Palácio do Governo de SC.
2003: Ind.Naturezas Mortas, Sala Lindolf Bell, Criciúma / SC; Ind.Momentos do Acervo, MASC; Ind.Galeria de Arte do Estreito, Florianópolis; e nova viagem à Europa, expondo suas obras na França, Alemanha e Itália.
2004: Col.Galeria Meyer Filho, Assembleia Legislativa, Florianópolis; Col.Big Gallery, Riverside, Califórnia, EUA.
2005: Col.Espaço Cultural do Tribunal de Justiça, Florianópolis.
2006: Ind.Galeria e Museu Van Gogh, Florianópolis.

A obra de Ivo Silva é profundamente marcada por uma temática que transita entre o retorno à natureza de sua infância e uma imersão no universo do fantástico.Suas criações frequentemente apresentam alusões a seres que habitam o centro da terra ou a entidades extraterrestres, muitas vezes dotadas de um poder telepático de comunicação com o ser humano.Essa fusão entre o real e o imaginário confere às suas obras uma atmosfera única e intrigante, convidando o observador a explorar dimensões além da percepção comum.

Ivo Silva é um artista que, através de sua produção autodidata e de sua visão singular, contribuiu significativamente para o enriquecimento do panorama artístico brasileiro.Sua capacidade de explorar temas complexos e de traduzi - los em formas e cores o tornou uma referência, especialmente em Santa Catarina.`,
    year: 1986
  },
  {
    id: "56",
    title: "O Saxofonista",
    artist: "Inos Corradin",
    price: 17000,
    type: "Pintura a óleo",
    size: "80x60",
    size_with_frame: "121x97",
    tag: "1090",
    images: [],
    description: `Inos Corradin (1929-2021) foi um artista ítalo-brasileiro de grande relevância, cuja obra se destaca pela originalidade, sensibilidade e um toque lúdico. Nascido em Vogogna, Itália, em 1929, Corradin imigrou para o Brasil em 1950, onde encontrou um terreno fértil para desenvolver seu estilo único e marcante. Sua trajetória artística é um testemunho de dedicação e paixão, resultando em uma vasta produção que abrange pintura, gravura, cenografia e desenho.

Os primeiros passos de Inos Corradin no mundo da arte foram dados ainda em solo italiano, sob a tutela do professor Tardivello, em Castelbaldo.Ao chegar ao Brasil em 1950, fixou residência em Jundiaí, São Paulo, cidade que se tornaria o epicentro de sua prolífica carreira.Desde 1952, Corradin participou ativamente de importantes mostras coletivas, como o Salão Paulista de Arte Moderna e o Salão Nacional de Arte Moderna, consolidando sua presença no cenário artístico brasileiro.Entre 1954 e 1955, dedicou - se também à cenografia, demonstrando sua versatilidade e talento em diferentes formas de expressão artística.

A arte de Inos Corradin é predominantemente figurativa, explorando temas como paisagens, naturezas - mortas e figuras humanas.Seu estilo é caracterizado por uma abordagem bem - humorada e jocosa, com uma forte tendência à estilização e um domínio notável dos recursos cromáticos.As cores vibrantes e os traços expressivos são marcas registradas de suas obras, que frequentemente apresentam personagens caricatos, revelando um aguçado senso de observação e ironia.Suas paisagens transmitem uma sensibilidade profunda, enquanto seus retratos capturam a essência de figuras curiosas com um toque de humor.

Ao longo de sua carreira, Inos Corradin conquistou reconhecimento tanto no Brasil quanto internacionalmente.Suas exposições individuais percorreram diversas cidades brasileiras e países como Itália, Israel, Alemanha, Suíça, Estados Unidos, Argentina, Uruguai, Holanda e Canadá.Em 1953, teve um contato significativo com a cena artística baiana em Salvador, interagindo com nomes como Mário Cravo Júnior, Carybé, Jenner Augusto e Dorival Caymmi.Recebeu importantes prêmios, como o Prêmio Internacional Paris Sud(França, 1975) e o Prêmio Quadrivio de Pintura(Itália, 1979).O legado de Inos Corradin para a arte brasileira é imenso.Seu estilo único, que mescla elementos da caricatura com um tom humorístico em diversas vertentes artísticas, o coloca em um lugar de destaque entre os artistas de sua geração.Suas obras continuam a proporcionar momentos de alegria e reflexão, convidando o público a apreciar a beleza das coisas simples e a celebrar a diversidade da vida.Um documentário sobre sua vida e obra, intitulado "Inos", foi lançado em 2008, perpetuando sua memória e contribuição para a arte.

Inos faleceu no dia 17 de setembro de 2025 em Jundiaí(SP), deixando um vasto legado com a arte brasileira.`,
    year: null
  },
  {
    id: "57",
    title: "Idesio Leal",
    artist: "Idesio Leal",
    price: 2700,
    new_price: 1890,
    is_promotion: true,
    type: "Acrílico",
    size: "40x30",
    size_with_frame: "68x58",
    tag: "1091",
    images: [],
    description: `Idesio Leal é um renomado artista plástico, ilustrador e mosaicista brasileiro, cuja trajetória artística é intrinsecamente ligada à rica paisagem cultural da Ilha de Santa Catarina. Reconhecido por sua maestria na arte do mosaico e por sua profunda e duradoura colaboração com o icônico artista Rodrigo de Haro, Leal consolidou-se como uma figura central no cenário artístico catarinense, deixando um legado de obras monumentais e de grande significado cultural.

A colaboração entre Idesio e o artista plástico Rodrigo de Haro é um capítulo fundamental na história da arte de Santa Catarina.Por mais de quatro décadas, Idesio foi o braço direito e o parceiro criativo de De Haro, uma parceria que se estendeu por 42 anos e resultou em inúmeras obras de arte que hoje adornam espaços públicos e privados.Essa relação profissional e pessoal era tão profunda que Rodrigo de Haro era padrinho de um dos filhos de Idesio, e os dois artistas chegaram a morar juntos por um período significativo de suas vidas.

Um dos marcos mais expressivos dessa colaboração é o grandioso mosaico "Um livro aberto da América pré-Colombiana", localizado na fachada da Reitoria da Universidade Federal de Santa Catarina(UFSC).Produzida entre 1995 e 1997, essa obra de 440m² é um dos maiores mosaicos da América Latina, testemunho da habilidade técnica e da visão artística de ambos os criadores.A complexidade e a escala do trabalho exigiam um processo meticuloso, onde cada fragmento de azulejo era cortado à mão, uma técnica que Idesio Leal domina com maestria.

Mesmo após o falecimento de Rodrigo de Haro em 2021, Idesio Leal assumiu a nobre missão de dar continuidade ao legado de seu amigo e mentor.Atualmente, ele está envolvido na conclusão da obra "Folclore Popular", também na UFSC, um projeto iniciado em março de 2022 e com previsão de término em julho do mesmo ano.Este compromisso demonstra não apenas a lealdade de Idesio à memória de De Haro, mas também sua dedicação inabalável à arte do mosaico e à cultura catarinense.

Ao longo de sua carreira, Idesio Leal e Rodrigo de Haro realizaram trabalhos em diversas cidades, incluindo Florianópolis, Porto Alegre e Curitiba.Além dos mosaicos na Reitoria da UFSC, suas obras podem ser encontradas em locais de destaque como o Centro de Hematologia e Hemoterapia de Santa Catarina(Hemosc), a Praça dos Três Poderes(em frente à Assembleia Legislativa de SC) e a fachada do Clube Doze, no centro da cidade.Até maio de 2022, a produção conjunta de mosaicos totalizava 56 obras, um número impressionante que reflete a prolífica e impactante trajetória da dupla.
Além de seu notável trabalho como mosaicista, Idesio Leal é um pintor talentoso, com uma produção artística que abrange diversas mídias.Sua obra já foi exibida em importantes espaços culturais, como a FUNARTE em São Paulo, e ele possui trabalhos que integram o acervo do prestigiado Museu de Arte de Santa Catarina(MASC).

    Recentemente, Idesio Leal foi o destaque da exposição "Lírico Mitógrafo", realizada no Espaço Oficinas do Centro Integrado de Cultura(CIC) entre maio e junho de 2025. A mostra apresentou nove de suas pinturas acrílicas, realizadas sobre tela e eucatex.Um aspecto singular dessa exposição foi a inclusão de registros e análises que Rodrigo de Haro havia feito sobre as obras de Idesio em 2013. Em um "exercício inverso" criativo, Idesio refez cinco telas para a exposição, utilizando as anotações de De Haro como referência e guia para a recriação de algumas de suas pinturas, evidenciando a profunda influência e o respeito mútuo entre os dois artistas.

A versatilidade de Idesio Leal se estende para além da pintura e do mosaico.Nos anos 80, ele atuou em uma editora artesanal conhecida como "Athanor", demonstrando seu interesse e envolvimento com o universo editorial e a produção de arte em diferentes formatos.Além disso, Idesio contribuiu para o cinema nacional, trabalhando como cenógrafo no filme "Cruz e Souza – O poeta do Desterro", lançado em 1998. Essas experiências multifacetadas enriquecem ainda mais sua biografia, revelando um artista com um amplo espectro de talentos e interesses.

Idesio Leal, com sua dedicação à arte, sua parceria histórica com Rodrigo de Haro e sua contínua produção de obras significativas, permanece como uma figura inspiradora e um pilar da cultura catarinense, cujo trabalho continua a encantar e a enriquecer o patrimônio artístico do Brasil.`,
    year: 2005
  },
  {
    id: "58",
    title: "Início de Viagem",
    artist: "Helcio Iorio",
    price: 2800,
    new_price: 1960,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "30x40",
    size_with_frame: "61x71",
    tag: "1092",
    images: [],
    description: `Helcio Iorio (1925-2018) foi um renomado artista plástico brasileiro, cuja obra se destaca pela forte influência do expressionismo abstrato e pela representação de temas variados, desde paisagens vibrantes a nus artísticos e cenas do cotidiano. Sua contribuição para as artes visuais brasileiras é reconhecida e suas obras são frequentemente encontradas em galerias e leilões de arte.

Nascido em 1925, Helcio Iorio demonstrou desde cedo um talento inato para a pintura.Sua formação artística incluiu o curso na prestigiada Escola Paulista de Belas Artes(EPBA), um dos pilares da educação artística no Brasil.Além da formação acadêmica, Iorio aprimorou suas habilidades e desenvolveu seu estilo único frequentando os ateliês de mestres como Oscar Campiglia e Angelo Simeoni.Esses encontros e aprendizados foram cruciais para a consolidação de sua técnica e visão artística.

A década de 1950, período de grande efervescência cultural e artística, exerceu uma profunda influência sobre Helcio Iorio.O expressionismo abstrato, movimento que floresceu nesse período, com sua ênfase na expressão emocional e na subjetividade, ressoou fortemente com o artista.Essa inspiração pode ser percebida em suas obras, que frequentemente exploram a cor, a forma e a textura de maneira expressiva, buscando transmitir sentimentos e sensações em vez de meramente reproduzir a realidade.

A técnica predominante de Helcio Iorio era a pintura a óleo sobre tela, dominada com maestria para criar composições ricas em detalhes e nuances.Sua paleta de temas era vasta e diversificada, refletindo sua sensibilidade e sua capacidade de encontrar beleza e significado em diferentes aspectos da vida e da natureza.

Entre suas obras mais conhecidas, destacam - se as paisagens, como "Sítio da Rose" e "Vista da Lagoa Jacareí", que capturam a serenidade e a beleza do ambiente rural com um toque pessoal e expressivo.As naturezas - mortas, como "Rosas", revelam sua habilidade em retratar objetos inanimados com vida e emoção.Além disso, Helcio Iorio também se dedicou ao nu artístico, explorando a forma humana com delicadeza e respeito, e a cenas do cotidiano rural, que oferecem um vislumbre da vida simples e autêntica.

O trabalho de Helcio Iorio foi amplamente reconhecido em vida e continua a ser valorizado após seu falecimento em 2018. Sua inclusão no Catálogo de Artes Plásticas de Júlio Louzada, uma referência importante no cenário artístico brasileiro, atesta a relevância de sua obra e seu lugar entre os grandes nomes da pintura nacional.`,
    year: null
  },
  {
    id: "59",
    title: "Hamilton Cordeiro",
    artist: "Hamilton Cordeiro",
    price: 950,
    new_price: 570,
    is_promotion: true,
    type: "Acrílico",
    size: "18x42",
    size_with_frame: "25x49",
    tag: "1094",
    images: [],
    description: `Hamilton Cordeiro (1943-2005) foi um proeminente artista plástico brasileiro, cuja trajetória multifacetada abrangeu as áreas de escultura, pintura, desenho e restauração. Nascido em Joinville, Santa Catarina, em 3 de março de 1943, Hamilton Cordeiro deixou um legado significativo no cenário artístico nacional e internacional. Sua vida foi marcada por uma profunda imersão no universo cultural, desde suas primeiras experiências como ator até sua consagração como um dos nomes importantes das artes visuais brasileiras.

Antes de se dedicar integralmente às artes plásticas, Hamilton Cordeiro teve uma participação ativa em movimentos culturais na cidade de São Paulo.Ele atuou como ator em filmes, novelas e no teatro experimental, sob a direção de nomes como Solano Trindade e Clóvis Carvalho Jr.Essa vivência no campo das artes cênicas, sem dúvida, contribuiu para a sua sensibilidade e percepção artística.Sua formação em artes visuais foi consolidada através de estudos com o renomado mestre João Suzuki, em São Paulo.

Além de sua produção artística, Hamilton Cordeiro dedicou - se ao ensino, compartilhando seu conhecimento e paixão pela arte com novas gerações.Ele atuou como professor de Escultura Contemporânea nas Oficinas de Arte do CIC e lecionou pintura em importantes instituições de ensino superior, como a Fundação Universidade Regional de Blumenau(FURB), a Universidade do Estado de Santa Catarina(UDESC) e a Universidade Federal de Santa Catarina(UFSC).Sua atuação como educador reforça seu compromisso com o desenvolvimento e a disseminação da arte no Brasil.`,
    year: 2002
  },
  {
    id: "60",
    title: "Hamilton Cordeiro",
    artist: "Hamilton Cordeiro",
    price: 1700,
    new_price: 1020,
    is_promotion: true,
    type: "Acrílico",
    size: "58x38",
    size_with_frame: "73x53",
    tag: "1095",
    images: [],
    description: `Hamilton Cordeiro: Uma Vida Dedicada à Arte`,
    year: 2004
  },
  {
    id: "61",
    title: "Pastoral Entre Colinas",
    artist: "Hamilton Cordeiro",
    price: 2000,
    new_price: 1200,
    is_promotion: true,
    type: "Acrílico",
    size: "50x83",
    size_with_frame: "69x102",
    tag: "1096",
    images: [],
    description: `Hamilton Cordeiro: Uma Vida Dedicada à Arte`,
    year: 2001
  },
  {
    id: "62",
    title: "Hamilton Cordeiro",
    artist: "Hamilton Cordeiro",
    price: 1200,
    new_price: 720,
    is_promotion: true,
    type: "Acrílico",
    size: "30x67",
    size_with_frame: "50x87",
    tag: "1097",
    images: [],
    description: `Hamilton Cordeiro: Uma Vida Dedicada à Arte`,
    year: 2002
  },
  {
    id: "63",
    title: "Mulher e Flor",
    artist: "Gabriel Bertazzoli",
    price: 7600,
    type: "Acrílico",
    size: "100x200",
    tag: "1103",
    images: [],
    description: `Gabriel Bertazzoli é um renomado artista plástico com mais de duas décadas de experiência, conhecido por suas obras expressivas em grande formato. Nascido em Buenos Aires, Argentina, Bertazzoli reside atualmente em Guapimirim, Rio de Janeiro, onde continua a desenvolver sua arte distintiva.

Sua trajetória artística é marcada pela exploração da luz e da cor, utilizando a técnica de acrílico sobre tela.As pinturas de Bertazzoli são caracterizadas por texturas únicas, criadas através de múltiplas camadas de tinta, e por cores vibrantes que resultam da mistura ótica de pigmentos superpostos.Essas características conferem às suas obras uma influência sedutora nos ambientes em que são exibidas, tornando - as valiosas tanto para decoração quanto para colecionadores.

    Desde 2000 até 2016, Gabriel Bertazzoli expôs suas obras na Feira Hippie de Ipanema, no Rio de Janeiro, o que lhe proporcionou um contato direto com o público e a oportunidade de viver exclusivamente de sua arte.Ele também aceita encomendas personalizadas, permitindo que os clientes escolham o tema, a paleta de cores e o tamanho da obra, e oferece demonstrações virtuais gratuitas para auxiliar na escolha da pintura ideal para cada ambiente.

As obras de Gabriel Bertazzoli são notáveis por sua expressividade e pelo uso de cores vibrantes.Ele emprega uma técnica de acrílico sobre tela, criando texturas únicas através de múltiplas camadas de tinta.A mistura ótica de pigmentos superpostos resulta em cores vivas e envolventes que dão vida às suas criações.As pinturas de Bertazzoli frequentemente exploram temas abstratos e figurativos, com um foco particular na interação da luz com a superfície da tela.Seus trabalhos são frequentemente em grande formato, o que amplifica o impacto visual e a imersão do observador.

A jornada de Gabriel Bertazzoli como artista é marcada por sua dedicação e paixão pela pintura.Sua formação na Escuela Nacional de Bellas Artes Manuel Belgrano, em Buenos Aires, forneceu a base para o desenvolvimento de seu estilo único.Ao longo dos anos, Bertazzoli viveu em diversas localidades, incluindo Paraguai, Bahia, São Paulo e Rio de Janeiro, experiências que, sem dúvida, enriqueceram sua perspectiva artística e influenciaram suas criações.

O reconhecimento de seu trabalho se manifesta não apenas na constante demanda por suas obras, mas também em sua presença contínua na Feira Hippie de Ipanema, um espaço tradicional que o conecta diretamente com apreciadores de arte.Essa interação direta com o público permitiu que ele construísse uma carreira sólida e independente, vivendo exclusivamente de sua arte.`,
    year: 2019
  },
  {
    id: "64",
    title: "Porto de Hamburgo",
    artist: "Fernando Calderari",
    price: 17000,
    new_price: 13600,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "80x92",
    size_with_frame: "97x109",
    tag: "1104",
    images: [],
    description: `Fernando Rogério Senna Calderari foi um renomado artista plástico, pintor, gravador, desenhista, escultor e professor brasileiro. Nascido em Lapa, Paraná, em 10 de fevereiro de 1939, Calderari é considerado uma figura central na renovação das artes plásticas paranaenses e um mestre que influenciou gerações de artistas.

Calderari iniciou sua jornada artística na Escola de Belas Artes do Paraná, onde estudou entre 1959 e 1962. Durante esse período, teve a oportunidade de aprender com grandes nomes da arte brasileira, como Guido Viaro, Theodoro de Bona e Erbo Stenzel.Além de sua formação em pintura, ele também se graduou em Didática Especial em Desenho na Pontifícia Universidade Católica do Paraná(PUCPR), entre 1960 e 1963, o que demonstra seu compromisso com o ensino e a disseminação da arte.

No início de sua carreira, suas obras eram predominantemente paisagens e naturezas - mortas.No entanto, a partir da década de 1960, Calderari começou a explorar o abstracionismo, tornando - se um dos pioneiros desse movimento no Paraná.Sua incursão no abstrato marcou um ponto de virada em sua produção, consolidando seu estilo inovador e expressivo.

Fernando Calderari transitou com maestria por diversas linguagens artísticas, incluindo pintura, desenho, gravura e escultura.Ele é particularmente conhecido por sua capacidade de criar uma síntese única entre a gravura e a pintura, explorando técnicas de improviso que resultavam em composições ricas e originais, especialmente em suas talhas de madeira.Suas obras com temas marítimos, as famosas "marinas", são também um marco em sua produção, caracterizadas por uma atmosfera de tranquilidade e profundidade.

Sua obra ganhou reconhecimento nacional e internacional, com participações em importantes eventos como a VII Bienal de São Paulo.A originalidade de seu trabalho e a profundidade de sua expressão artística o colocaram em destaque no cenário das artes visuais.

Além de sua prolífica produção artística, Fernando Calderari dedicou grande parte de sua vida ao ensino.Lecionou em instituições de prestígio como a Escola de Música e Belas Artes do Paraná(EMBAP) e a PUCPR, onde deixou um legado duradouro.Sua paixão por compartilhar conhecimento e sua habilidade em inspirar novos talentos fizeram dele um verdadeiro mestre, reverenciado por seus alunos e colegas.

Fernando Calderari faleceu em 14 de dezembro de 2021, aos 82 anos, deixando um vasto e significativo legado para a arte brasileira.Suas obras estão presentes em importantes acervos de museus no Brasil e em diversos outros países, como Estados Unidos, Alemanha e Suíça, atestando a relevância e o impacto de sua contribuição artística.A restauração e reinstalação de uma de suas esculturas em Curitiba, em 2025, é um testemunho da perenidade de sua arte e de sua importância cultural.`,
    year: 1997
  },
  {
    id: "65",
    title: "Ely Albernaz",
    artist: "Ely Albernaz",
    price: 2200,
    new_price: 1540,
    is_promotion: true,
    type: "Acrílico",
    size: "70x50",
    size_with_frame: "86x66",
    tag: "1105",
    images: [],
    description: `Ely Albernaz é um renomado artista plástico uruguaio, nascido em 18 de dezembro de 1947, na cidade de Rivera, Uruguai. Sua trajetória artística é marcada por uma profunda dedicação e versatilidade, abrangendo diversas formas de expressão visual. Ao longo de sua carreira, Albernaz consolidou-se como uma figura importante no cenário artístico, com um trabalho que transita entre o figurativo e o abstrato, e que tem sido reconhecido tanto em seu país natal quanto no Brasil e em outras partes do mundo.

A jornada artística de Ely Albernaz teve início em 1969, quando ele começou seus estudos de desenho e pintura na prestigiada Escola Taller de Artes Plásticas.Durante esse período formativo, Albernaz teve a oportunidade de aprender com mestres de grande influência, como o pintor espanhol Antônio Higueras e o pintor uruguaio Osmar Santos.Esses artistas desempenharam um papel crucial no desenvolvimento de suas habilidades e na formação de sua visão artística.

Além da pintura e do desenho, Albernaz demonstrou um interesse notável por uma ampla gama de disciplinas artísticas.Sua curiosidade e talento o levaram a explorar a cerâmica, a escultura, a cenografia, a ilustração e a gravura.Essa versatilidade é uma característica marcante de sua obra, permitindo - lhe expressar sua criatividade através de diferentes mídias e técnicas.Essa formação abrangente contribuiu para a riqueza e a complexidade de seu trabalho, que se manifesta em diversas formas e estilos.

    Desde 1971, Ely Albernaz tem sido um artista ativo, realizando inúmeras exposições individuais e participando de diversas mostras coletivas.Sua obra tem sido exibida em importantes espaços culturais e galerias de arte, tanto no Uruguai quanto no Brasil, o que demonstra o alcance e a relevância de seu trabalho.Essa constante presença em exposições permitiu que sua arte fosse apreciada por um público amplo e diversificado.

Além de sua produção artística, Albernaz também se dedicou à educação, compartilhando seu conhecimento e paixão pela arte com novas gerações.Ele atuou como professor de arte infantil na Casa de Cultura de Rivera, onde contribuiu para o desenvolvimento criativo de crianças.Posteriormente, lecionou desenho e pintura na URCAMP(Universidade da Região da Campanha), em Santana do Livramento, Brasil.Essa faceta pedagógica de sua carreira ressalta seu compromisso com a disseminação da arte e a formação de novos talentos.

Ao longo de sua carreira, Ely Albernaz participou de importantes mostras e exposições que solidificaram seu nome no cenário artístico.No Uruguai, suas obras foram expostas em locais de destaque, como o Museu de Arte de Maldonado e a Galeria Calle Entera, em Montevidéu.No Brasil, sua arte também ganhou visibilidade em espaços como o Teatro Renascença, em Porto Alegre, o Espaço Cultural, em Florianópolis, e a Galeria de Arte do Jurerê Open Shopping.

Uma das exposições mais notáveis de Albernaz foi "Entre o Figurativo e o Abstrato", realizada na Villa Francioni, em São Joaquim, Santa Catarina.Essa mostra exemplifica a capacidade do artista de transitar entre diferentes estilos, explorando tanto a representação da realidade quanto a abstração.Suas obras também fazem parte de acervos importantes, como o do Museu Municipal de Artes Plásticas de Rivera, onde se encontra, por exemplo, a obra "Composición", de 1983, realizada com meios combinados sobre tela.

O talento e a dedicação de Ely Albernaz foram reconhecidos com diversos prêmios e distinções ao longo de sua trajetória.Ele foi premiado oito vezes em salões de arte, o que atesta a qualidade e o impacto de sua produção.Entre os reconhecimentos mais significativos, destacam - se o 1º Prêmio no “V Salão de Artes de Rivera” e o 1º Prêmio “Viaje a España” no Salão Post - Guernica.Além disso, Albernaz recebeu vários outros prêmios em galerias brasileiras, consolidando sua reputação como um artista de destaque no cenário sul - americano.

Ely Albernaz deixou e continua a deixar uma marca significativa na arte, tanto no Uruguai quanto no Brasil.Sua obra, caracterizada pela versatilidade e pela exploração de diferentes técnicas e estilos, contribui para o enriquecimento do patrimônio artístico da região.O artista continua ativo, com exposições futuras já planejadas, como a mostra internacional na Villa Francioni em 2024, que apresentará pinturas inéditas.Isso demonstra a vitalidade de sua produção e seu contínuo desejo de explorar novas fronteiras artísticas.

Ely Albernaz é, sem dúvida, um artista plástico de grande relevância, cuja obra transcende fronteiras e estilos.Sua dedicação à arte, sua versatilidade e seu compromisso com a educação artística o tornam uma figura inspiradora.Convidamos a todos a conhecerem mais profundamente a rica trajetória e as expressivas criações de Ely Albernaz, um verdadeiro mestre da arte contemporânea.`,
    year: null
  },
  {
    id: "66",
    title: "Ely Albernaz",
    artist: "Ely Albernaz",
    price: 3500,
    new_price: 2450,
    is_promotion: true,
    type: "Acrílico",
    size: "60x120",
    size_with_frame: "62x122",
    tag: "1106",
    images: [],
    description: `Biografia de Ely Albernaz`,
    year: null
  },
  {
    id: "67",
    title: "Paisagem de Santo Amaro da Imperatriz",
    artist: "Élio Hahnemann",
    price: 7000,
    new_price: 4900,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "50x70",
    size_with_frame: "88x108",
    tag: "1108",
    images: [],
    description: `Élio Hahnemann, nascido em Blumenau, Santa Catarina, em 21 de março de 1959, foi um artista plástico brasileiro cuja vida e obra são um testemunho de resiliência, talento e da força transformadora da arte. Portador de uma doença congênita rara e severa, a epidermólise bolhosa, que o privou do uso das mãos, Hahnemann superou barreiras físicas inimagináveis para se tornar um pintor reconhecido e admirado.

A jornada artística de Élio Hahnemann começou cedo.Em 1970, deu seus primeiros passos no mundo da arte, e em 1973, aprofundou seus estudos com o professor Luís Emmerich.Nos anos seguintes, teve a orientação de Reynaldo Manzke, um mestre que, ao reconhecer o talento excepcional do jovem artista, o acolheu e o auxiliou no desenvolvimento de um aparelho que lhe permitia pintar.A partir de 1977, com sua primeira exposição na Galeria Municipal de Artes, sua carreira decolou, e ele passou a se dedicar exclusivamente à pintura.

Élio Hahnemann nasceu com Epidermólise Bolhosa Distrófica, uma doença congênita rara que causava extrema fragilidade em sua pele e o impedia de usar as mãos.Apesar dessa condição desafiadora, ele nunca se deixou abater.Sua mãe catalogou mais de 1.000 obras produzidas por ele, um testemunho de sua dedicação e paixão inabaláveis pela arte.

Élio Hahnemann era amplamente reconhecido por seu estilo impressionista, caracterizado pela força e vivacidade das cores em suas paisagens.Sua produção artística abrangeu diversas técnicas, incluindo óleo sobre tela, grafite, crayon, aquarela e xilogravura.O que tornava sua arte ainda mais notável era a forma como ele superava as limitações físicas impostas pela epidermólise bolhosa, pintando sem o uso das mãos, utilizando instrumentos adaptados que demonstravam sua incrível determinação e paixão pela arte.

Mesmo após seu falecimento em 2006, aos 47 anos, a obra de Élio Hahnemann continua a ser celebrada.Exposições póstumas, como a realizada no Mabeck - Espaço de Arte em Blumenau, revisitam a qualidade de suas obras e reforçam seu legado.Ele é lembrado não apenas por seu talento artístico, mas também como um símbolo de superação e perseverança, inspirando a todos com sua história de vida e sua capacidade de transformar a adversidade em arte.Sua filosofia, expressa na frase: “Nunca se deve dizer que não se consegue, nunca se deve desistir.Desistir, nunca.Eu também tenho problemas, mas eu não olho para trás.Eu olho para frente, amanhã será melhor”, serve como um poderoso lembrete de sua resiliência e otimismo.

A vida e a obra de Élio Hahnemann são um poderoso testemunho da capacidade humana de transcender as adversidades.Seu legado artístico e sua história de superação continuam a inspirar, provando que a paixão e a determinação podem abrir caminhos onde parecia não haver nenhum.Élio Hahnemann não foi apenas um artista; foi um exemplo de vida, um mestre na arte de viver e criar, deixando um impacto indelével no cenário artístico brasileiro e naqueles que tiveram o privilégio de conhecer sua história.`,
    year: 2000
  },
  {
    id: "72",
    title: "Mamão Amazônia",
    artist: "Cleusa Soares",
    price: 3900,
    new_price: 2730,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "30x60",
    size_with_frame: "46x76",
    tag: "1123",
    images: [],
    description: `Cleusa Soares: Uma Vida Dedicada à Arte`,
    year: 2015
  },
  {
    id: "73",
    title: "Laranja Ponkan",
    artist: "Cleusa Soares",
    price: 2500,
    new_price: 1750,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "15x65",
    size_with_frame: "39x89",
    tag: "1124",
    images: [],
    description: `Cleusa Soares, renomada artista plástica brasileira, nasceu em Pelotas, Rio Grande do Sul, em 1950. Sua jornada artística teve início nos anos 60, quando começou a estudar pintura acadêmica com o pintor uruguaio Nestor Marques Rodriguez.

Ao longo de sua carreira, Cleusa escolheu Criciúma e, mais recentemente, Florianópolis para viver e desenvolver seu trabalho.Sua obra é marcada por um estilo pós - impressionista, onde a luz e a cor são elementos centrais para conferir solidez e vida às formas.

Especialista em natureza - morta, Cleusa Soares é extraordinária em retratar com realismo e sensibilidade frutas, flores, taças de vinho e outros objetos cotidianos.Suas pinturas são reconhecidas pela harmonia, pureza das formas e uma paleta cromática exuberante, que se assemelha à fotografia de alta resolução, capturando minuciosamente cada detalhe.

    Com 60 anos de profissão celebrados em 2023, Cleusa Soares possui um vasto currículo de exposições individuais e coletivas em diversos estados do Brasil, incluindo Pelotas, Criciúma e Florianópolis.Suas obras transcendem fronteiras, fazendo parte de acervos particulares não apenas no Brasil, mas também em países como Paraguai, Uruguai, Argentina, Chile, Itália, França, Alemanha e Estados Unidos.

Em setembro de 2023, a artista apresentou a exposição "Natureza Viva" na galeria de arte da Associação Empresarial de Criciúma(Acic), onde demonstrou sua capacidade de trazer elementos acadêmicos para uma abordagem contemporânea, destacando - se na representação de efeitos de luz e sombra e na criação de texturas realistas.

Cleusa Soares se descreve como "sensível às coisas cotidianas", e para ela, a arte da pintura é como respirar e sentir a luz da vida.Seu processo criativo envolve a escolha cuidadosa de flores e frutas da estação no mercado, que servem de modelo em seu ateliê, resultando em obras que são verdadeiros "momentos mágicos, na função do prazer estético" e que revelam as "mil facetas do seu mundo nas belíssimas telas onde há sonhos, mitos, flores e mistério".`,
    year: 2015
  },
  {
    id: "74",
    title: "Caio Borges",
    artist: "Caio Borges",
    price: 15000,
    new_price: 10500,
    is_promotion: true,
    type: "Acrílico",
    size: "71x180",
    size_with_frame: "78x187",
    tag: "1126",
    images: [],
    description: `Caio Borges, nascido em Içara, Santa Catarina, em 1958, é um artista plástico autodidata cuja obra transcende fronteiras, marcada por uma evolução constante e uma profunda conexão com suas raízes. Com mais de 45 anos de carreira, sua produção artística é um testemunho de sua paixão e curiosidade inesgotáveis.

Desde muito jovem, Caio Borges demonstrou uma inclinação natural para a arte, dedicando - se ao desenho e à pintura.Essa busca incessante por conhecimento e expressão moldou sua trajetória.Aos 20 anos, já exibia ao mundo o fruto de sua singular visão artística.Em 1978, aprimorou suas habilidades em cerâmica e escultura no estúdio de Maria Faro, no Rio de Janeiro, onde permaneceu por três anos.Durante esse período frutífero, participou de diversas exposições coletivas e foi reconhecido com o prêmio “Artista de Barro” em 1981.

O reconhecimento de Caio Borges rapidamente se estendeu para além das fronteiras brasileiras.Suas obras foram expostas em diversos países, incluindo Portugal, Grécia, Rússia, França, Itália e Estados Unidos.Em 2018, o artista estabeleceu - se nos EUA, abrindo uma galeria e ateliê em Miami.No entanto, após um período de luto e profunda reflexão, ele decidiu retornar ao Brasil, fixando seu ateliê em Florianópolis, em um local que o conecta diretamente com a Mata Atlântica, fonte de inspiração para suas fases mais recentes.

A obra de Caio Borges é marcada por diferentes fases, refletindo sua constante experimentação e evolução.Inicialmente, ele se destacou pela representação de figuras humanas com cores vibrantes, pinceladas geométricas e formas arredondadas, buscando incessantemente a sensualidade em suas telas.Sua produção é vasta, com mais de 5.000 trabalhos ao longo de sua carreira.

Com o tempo, sua arte evoluiu para uma fase mais introspectiva, onde a natureza se tornou o foco principal.Jardins e fragmentos da Mata Atlântica são retratados em uma atmosfera onírica e contemplativa, utilizando acrílico sobre tela.Além da pintura, Caio Borges também se dedica à escultura e à cerâmica, explorando novos materiais e técnicas que permitem a reutilização e transformação de elementos da natureza.

Caio Borges mantém um forte vínculo com sua cidade natal, Içara.Em um gesto de generosidade e reconhecimento, ele doou 162 de suas obras para o município em 2019. Essas peças formam a Galeria de Arte Caio Borges, localizada no Paço Municipal Ângelo Lodetti, um espaço cultural que permite ao público, especialmente às crianças, o contato direto com sua arte e a história que ela carrega.

    Em 2025, Caio Borges celebra 45 anos de uma carreira dedicada à arte com a exposição individual “Jardins” em Curitiba.A mostra apresenta obras inéditas e poemas de sua autoria, que se entrelaçam com sua produção visual, oferecendo uma experiência imersiva e reflexiva sobre sua jornada artística.`,
    year: 2004
  },
  {
    id: "75",
    title: "Caio Borges",
    artist: "Caio Borges",
    price: 13000,
    new_price: 9100,
    is_promotion: true,
    type: "Acrílico",
    size: "89x118",
    size_with_frame: "96x125",
    tag: "1127",
    images: [],
    description: `biografia_caio_borges`,
    year: 2005
  },
  {
    id: "76",
    title: "Entrada do Rancho",
    artist: "Arthur Figueiredo",
    price: 6200,
    new_price: 3100,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "53x71",
    size_with_frame: "103x121",
    tag: "1130",
    images: [],
    description: `Arthur Alves Figueiredo, renomado pintor brasileiro, nasceu em 13 de agosto de 1924, na cidade de Indaiatuba, São Paulo. Sua trajetória artística é marcada por uma formação sólida e um reconhecimento crescente no cenário das artes plásticas brasileiras.

Figueiredo iniciou sua jornada no mundo da arte com mestres de grande importância.Ele teve como orientadores Caetano Miami, Silvio Alves e Augusto Barbosa, figuras que contribuíram significativamente para o desenvolvimento de sua técnica e visão artística.Além da pintura, Arthur Alves Figueiredo também explorou a cerâmica, cursando com Madame Leduc no prestigiado Museu de Arte de São Paulo(MASP) na década de 1960. Essa diversidade em sua formação sugere uma busca por diferentes formas de expressão e um aprofundamento em diversas linguagens artísticas.

Ao longo de sua carreira, Arthur Alves Figueiredo participou de diversos Salões oficiais, onde suas obras foram consistentemente premiadas.Ele obteve vários prêmios no Salão Paulista de Belas Artes(SPBA), um indicativo da qualidade e do impacto de seu trabalho.Suas pinturas a óleo sobre tela, muitas vezes retratando paisagens, marinhas e cenas do cotidiano, são encontradas em galerias de arte, acervos de colecionadores e são frequentemente leiloadas, o que demonstra a valorização de sua produção no mercado de arte.

As obras de Arthur Alves Figueiredo são predominantemente pinturas a óleo sobre tela, com destaque para paisagens, marinhas e cenas do cotidiano.Embora não haja uma descrição aprofundada de um estilo específico em termos de movimentos artísticos, a recorrência de temas como "Marinha" e "Barcos" em seus trabalhos, como visto em leilões e galerias, sugere uma predileção por elementos naturais e cenários que remetem à tranquilidade e à vida costeira ou rural.A menção de obras como "Feirinha" e "Casario" também indica um interesse em retratar aspectos da vida urbana e arquitetura, possivelmente com um toque de nostalgia ou observação social.A técnica a óleo, conhecida por sua riqueza de cores e durabilidade, permitiu a Figueiredo explorar a profundidade e a luminosidade em suas composições.

O reconhecimento de Arthur Alves Figueiredo se manifesta através dos múltiplos prêmios conquistados em Salões oficiais, como o Salão Paulista de Belas Artes(SPBA).A presença constante de suas obras em leilões e a valorização no mercado de arte são testemunhos de seu legado e da apreciação de sua arte por colecionadores e entusiastas.Sua contribuição para a arte brasileira, embora talvez não tão amplamente documentada quanto a de outros artistas, é inegável, e suas obras continuam a ser procuradas e admiradas por sua beleza e representatividade.`,
    year: 1985
  },
  {
    id: "77",
    title: "Ângelo Cannone",
    artist: "Ângelo Cannone",
    price: 10300,
    new_price: 6180,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "47x57",
    size_with_frame: "75x85",
    tag: "1131",
    images: [],
    description: `Ângelo Canonne (Abruzzo, Itália, 1899 – Rio de Janeiro, Brasil, 1992) foi um proeminente pintor, desenhista e professor ítalo-brasileiro, cuja obra se destaca pela maestria nas transparências e pela representação de paisagens, marinhas e retratos. Sua trajetória artística abrange tanto a Europa quanto a América do Sul, deixando um legado significativo no cenário das artes plásticas.
Primeiros Anos e Formação na Itália
Nascido em Abruzzo, Itália, em 1899, Ângelo Canonne demonstrou talento para a pintura desde cedo, iniciando seus estudos aos oito anos de idade.Ele se formou no Instituto de Belas Artes de Nápoles, onde teve como mestre Paolo Vetri.Durante sua formação, Canonne auxiliou Vetri na execução da pintura do teto do Salão Mor da Universidade de Nápoles, uma obra que, infelizmente, foi destruída durante a Segunda Guerra Mundial.

Após a conclusão de seus estudos, Canonne obteve o título de Professor de Desenho e lecionou no Instituto Técnico.Sua dedicação à arte era tamanha que ele deixou a docência apenas quando a pintura passou a absorver todo o seu tempo.Um marco importante em sua carreira na Itália foi a conquista de uma pensão em um concurso em Nápoles, que lhe permitiu viver em Roma por quatro anos, com todas as despesas de viagem, estadia e um ateliê inclusos.

Durante o período do fascismo na Itália, Canonne, assim como outros artistas, recebeu apoio significativo do governo, com a criação do Sindicato dos Profissionais Liberais e Artistas em 1924, que funcionou até o fim da guerra.Mesmo em meio ao conflito da Segunda Guerra Mundial, com uma família de sete filhos, incluindo o futuro pintor Carolus(Carlo Canonne), o mercado de arte continuou a prosperar, impulsionado por capitalistas que buscavam investir em bens, como quadros, para proteger seu capital da desvalorização.
A Chegada ao Brasil e o Legado Artístico
No final de 1947, Ângelo Canonne e sua família emigraram para o Brasil.Inicialmente, residiram em São Paulo, mas logo se mudaram para o Rio de Janeiro, onde o artista se estabeleceu e permaneceu até seu falecimento em 1992.

No Brasil, Canonne continuou a desenvolver sua arte, sendo reconhecido por suas marinhas e paisagens, nas quais demonstrava um domínio excepcional das transparências.Suas obras refletem um espírito jovem e vivido, e nelas é possível observar o toque magistral do artista.

Entre suas obras mais notáveis no Brasil, destaca - se um retrato em tamanho natural do Papa Pio X, pintado em 1972, que se encontra na Igreja dos Italianos, no Rio de Janeiro.

Canonne considerava a pintura como a manifestação íntima de seus sentimentos e emoções, e não como uma representação circunstancial do que o rodeava.Ele descrevia o ato de pintar como um estado de sonho, onde não via nem ouvia nada ao seu redor.

Ângelo Canonne faleceu no Rio de Janeiro em 1992, deixando um vasto e valioso acervo de obras que continuam a encantar apreciadores de arte.Sua contribuição para a arte ítalo - brasileira é inegável, e seu legado perdura através de suas pinturas, que expressam a profundidade de seus sentimentos e a maestria de sua técnica.`,
    year: null
  },
  {
    id: "78",
    title: "Hosana Dzerounian",
    artist: "Hosana Dzerounian",
    price: 8900,
    type: "Pintura a óleo",
    size: "60x40",
    size_with_frame: "92x72",
    tag: "1132",
    images: [],
    description: `Hosana Dzerounian é uma artista plástica brasileira de origem armênia, reconhecida por sua expressividade em diversas mídias, incluindo gravuras, desenhos e pinturas. Sua obra é notável por explorar o abstracionismo, um estilo que permite a livre interpretação e a manifestação de emoções e conceitos através de formas e cores.

A trajetória artística de Hosana Dzerounian inclui participações em importantes eventos do cenário artístico brasileiro.Destacam - se suas presenças no Salão Paulista de Belas Artes, onde expôs suas obras em duas edições consecutivas: a 43ª edição, em 1979, e a 44ª edição, em 1980. Esses salões são marcos significativos para artistas no Brasil, proporcionando visibilidade e reconhecimento no meio.`,
    year: 1978
  },
  {
    id: "79",
    title: "Arte Cusquenha",
    artist: "Arte Cusquenha",
    price: 4900,
    type: "Acrílico",
    size: "80x120",
    size_with_frame: "99x139",
    tag: "1134",
    images: [],
    description: ``,
    year: null
  },
  {
    id: "80",
    title: "Digo Tertschitsch",
    artist: "Digo Tertschitsch",
    price: 4200,
    new_price: 2520,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "60x40",
    size_with_frame: "79x59",
    tag: "1136",
    images: [],
    description: `Rodrigo Gama D'Eça Tertschitsch, mais conhecido como Digo Tertschitsch, é um renomado artista plástico brasileiro, natural de Florianópolis, Santa Catarina. Com uma carreira que se estende por mais de quatro décadas, Digo Tertschitsch consolidou-se como um mestre do estilo acadêmico e do hiper-realismo contemporâneo, destacando-se pela transparência e fidelidade de seus traços, especialmente em retratos. Suas obras são amplamente admiradas e fazem parte de importantes acervos particulares no Brasil e em diversos países, como Portugal, Argentina e Estados Unidos.

Nascido em Florianópolis, Digo Tertschitsch desenvolveu desde cedo um talento notável para as artes visuais.Seu estilo é caracterizado por uma abordagem acadêmica, combinada com a precisão do hiper - realismo contemporâneo.Essa fusão permite que suas pinturas, em particular os retratos, capturem não apenas a semelhança física, mas também a essência e a 'alma' de seus modelos, uma característica frequentemente elogiada por críticos e admiradores.Além de sua produção artística, Digo Tertschitsch também atua como professor de pintura a óleo, compartilhando seu conhecimento e técnica com novas gerações de artistas.`,
    year: 2018
  },
  {
    id: "81",
    title: "Tania Campos",
    artist: "Tania Campos",
    price: 1350,
    new_price: 1012.5,
    is_promotion: true,
    type: "Acrílico",
    size: "39x49",
    size_with_frame: "60x70",
    tag: "1137",
    images: [],
    description: ``,
    year: 1997
  },
  {
    id: "82",
    title: "Marcos Martins",
    artist: "Marcos Martins",
    price: 3900,
    type: "Acrílico",
    size: "50x98",
    size_with_frame: "75x123",
    tag: "1139",
    images: [],
    description: ``,
    year: 1994
  },
  {
    id: "83",
    title: "Rosas",
    artist: "Zélia Bússolo",
    price: 3200,
    new_price: 2720,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "40x50",
    size_with_frame: "70x80",
    tag: "1141",
    images: [],
    description: ``,
    year: 1994
  },
  {
    id: "84",
    title: "Zélia Bússolo",
    artist: "Zélia Bússolo",
    price: 3900,
    new_price: 2730,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "40x60",
    size_with_frame: "60x80",
    tag: "1142",
    images: [],
    description: ``,
    year: null
  },
  {
    id: "85",
    title: "Zélia Bússolo",
    artist: "Zélia Bússolo",
    price: 20000,
    new_price: 14000,
    is_promotion: true,
    type: "Pintura a óleo",
    size: "80x110",
    size_with_frame: "99x129",
    tag: "1143",
    images: [],
    description: ``,
    year: null
  },
  {
    id: "86",
    title: "Roberto Pereira",
    artist: "Roberto Pereira",
    price: 4900,
    new_price: 3430,
    is_promotion: true,
    type: "Acrílico",
    size: "60x90",
    size_with_frame: "97x117",
    tag: "1144",
    images: [],
    description: ``,
    year: null
  },
  {
    id: "87",
    title: "Priscila Rogoski",
    artist: "Priscila Rogoski",
    price: 3900,
    new_price: 3120,
    is_promotion: true,
    type: "Espatulado em Tela",
    size: "60x90",
    size_with_frame: "81x111",
    tag: "1145",
    images: [],
    description: ``,
    year: 2011
  },
  {
    id: "89",
    title: "Priscila Rogoski",
    artist: "Priscila Rogoski",
    price: 3500,
    new_price: 1925,
    is_promotion: true,
    type: "Espatulado em Tela",
    size: "70x120",
    tag: "1147",
    images: [],
    description: ``,
    year: 2021
  },
  {
    id: "90",
    title: "José Azevedo",
    artist: "José Azevedo",
    price: 5200,
    new_price: 4160,
    is_promotion: true,
    type: "Acrílico",
    size: "75x130",
    size_with_frame: "77x132",
    tag: "1148",
    images: [],
    description: ``,
    year: null
  },
  {
    id: "91",
    title: "Nairo Souza",
    artist: "Nairo Souza",
    price: 1500,
    new_price: 1050,
    is_promotion: true,
    type: "Acrílico",
    size: "30x44",
    size_with_frame: "45x59",
    tag: "1150",
    images: [],
    description: `Nascido em Porto Alegre, Rio Grande do Sul, viveu sua infância até os sete anos de idade em sua terra natal.
Por motivo da profissão de seu pai veio morar na Grande Florianópolis onde passou a admirar as belas paisagens e os casarios, já tinha espírito de artista e era grande observador.Desde pequeno sempre gostou de desenhar.
    Aos 22 anos começou a pintar sendo autodidata, conviveu com grandes artistas por este imenso Brasil, inclusive com Vopti.
Sua técnica é óleo sobre tela e acrílico, com isto Nairo é um artista plástico responsável pela preservação da cultura açoriana, principalmente pelos casarios.
Já expôs em várias capitais do Brasil e também no exterior.Um artista que se dedica resgatando os monumentos históricos do povo e sua cultura.
Sempre voltado a Palhoça, resgatou casarios desta cidade onde vive atualmente.
Já realizou 48 exposições no Brasil e exterior.
 Seu lema: “A arte é Dom de Deus e é com isto que eu me inspiro”.
 Atualmente mora em — Palhoça.`,
    year: 2005
  },
  {
    id: "92",
    title: "Nairo Souza",
    artist: "Nairo Souza",
    price: 1500,
    new_price: 1050,
    is_promotion: true,
    type: "Acrílico",
    size: "32x49",
    size_with_frame: "55x74",
    tag: "1151",
    images: [],
    description: `Nairo Souza`,
    year: 2017
  },
  {
    id: "93",
    title: "Nairo Souza",
    artist: "Nairo Souza",
    price: 1500,
    new_price: 1050,
    is_promotion: true,
    type: "Acrílico",
    size: "36x55",
    size_with_frame: "50x69",
    tag: "1152",
    images: [],
    description: `Nairo Souza`,
    year: 2018
  },
  {
    id: "94",
    title: "Leonidas Monte",
    artist: "Leonidas Monte",
    price: 3600,
    new_price: 2520,
    is_promotion: true,
    type: "Acrílico",
    size: "50x70",
    size_with_frame: "83x103",
    tag: "1153",
    images: [],
    description: ``,
    year: null
  }
];
