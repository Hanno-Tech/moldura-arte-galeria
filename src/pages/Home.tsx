import { Button } from "@/components/ui/button";
import { ArtworkCard } from "@/components/ui/artwork-card";
import { QuoteButton } from "@/components/ui/quote-button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import artwork2 from "@/assets/obras/obra_1/IMG_6828-39.webp";
import { artworks } from "@/data/artworks";
import { useEffect, useState } from "react";

const initialFeaturedArtworks = artworks.slice(0, 4).map((a) => ({
  id: a.id,
  image: a.images[0],
  title: a.title,
  artist: a.artist,
}));

const Home = () => {
  const obrasCarousel = artworks.map((a) => ({
    id: a.id,
    image: a.images[0],
    title: a.title,
    artist: a.artist,
  }));
  const [featured, setFeatured] = useState(initialFeaturedArtworks);
  const [fadingIndex, setFadingIndex] = useState<number | null>(null);
  const [fadingInIndex, setFadingInIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState<number | null>(null);

  useEffect(() => {
    // Restaura o título original quando voltar para a home
    document.title = "MAG - Moldura Arte e Galeria";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Seleciona uma imagem aleatória para trocar
      const randomIndex = Math.floor(Math.random() * featured.length);
      setFadingIndex(randomIndex);
      
      // Após o fade-out, troca apenas essa imagem
      setTimeout(() => {
        setFeatured((prev) => {
          const next = [...prev];
          // Substitui a imagem atual por uma nova obra aleatória
          const availableArtworks = obrasCarousel.filter(obra => 
            !prev.some(f => f.id === obra.id)
          );
          
          if (availableArtworks.length > 0) {
            const randomArtwork = availableArtworks[Math.floor(Math.random() * availableArtworks.length)];
            next[randomIndex] = randomArtwork;
          }
          
          return next;
        });
        
        // Aplica fade-in após trocar a imagem
        setFadingInIndex(randomIndex);
        setTimeout(() => {
          setFadingIndex(null);
          setFadingInIndex(null);
        }, 2000); // Tempo do fade-in (2 segundos)
      }, 2000); // Tempo do fade-out
    }, 5000); // 5 segundos entre transições para mais suavidade

    return () => clearInterval(interval);
  }, [featured.length, obrasCarousel]);

  const handleZoom = (index: number) => {
    setZoomed(index);
    setTimeout(() => setZoomed(null), 700);
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gallery-warm min-h-[100vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="font-playfair text-6xl lg:text-7xl font-normal text-primary leading-tight">
                Parede que
                <br />
                faz sentir
              </h1>
              <QuoteButton 
                variant="default" 
                className="font-inter font-medium text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-3"
                useWhatsApp={true}
              >
                Consulta nossa curadoria
              </QuoteButton>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {featured.map((artwork, index) => (
                <div 
                  key={`${artwork.id}-${index}`} 
                  className={`bg-frame-gold/30 p-4 rounded-lg transition-transform duration-300 ${
                    fadingIndex === index ? 'animate-fade-out' : 
                    fadingInIndex === index ? 'animate-fade-in' : ''
                  }`}
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full aspect-square object-cover rounded-sm shadow-frame"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20  bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-playfair text-4xl font-bold mb-6">
                Sobre
              </h2>
              <p className="font-inter leading-relaxed mb-6 max-w-md">
                A MAG nasce para transformar paredes em experiências que fazem sentir. Há 25 anos, a mesma família aplica qualidade apurada e calor humano para que qualquer superfície — em casa ou no trabalho — acolha, inspire e reflita quem a pessoa é.
              </p>
              <p className="font-inter leading-relaxed mb-6 max-w-md">
                O serviço vai muito além de vender quadros: consiste em curadoria guiada por sensações, estudo de layout, moldura sob medida e instalação assistida, presencial ou por vídeo. Chamamos isso de processo “do briefing ao prego”, um método autoral que garante resultado estético e emocional sem dores de cabeça.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-frame-gold/20 p-6 rounded-lg">
                <img
                  src={artwork2}
                  alt="Processo artesanal MAG"
                  className="w-full aspect-[4/3] object-cover rounded-sm shadow-frame"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Obras Section */}
      <section className="py-20 bg-gallery-warm">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-playfair text-4xl font-bold">Obras</h2>
          </div>

          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {obrasCarousel.map((obra) => (
                <CarouselItem key={obra.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <ArtworkCard
                    id={obra.id}
                    image={obra.image}
                    title={obra.title}
                    artist={obra.artist}
                    size="compact"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center gap-3 mt-6">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Figuras Section
      <section className="py-20 bg-terracota text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-playfair text-4xl font-bold">
              Figuras
            </h2>
            <Link to="/figuras" className="font-inter text-sm hover:underline">
              Ver mais →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[artwork1, artwork3, artwork2, artwork4].map((image, index) => (
              <div key={index} className="bg-frame-gold/20 p-4 rounded-lg">
                <img
                  src={image}
                  alt={`Figura ${index + 1}`}
                  className="w-full aspect-square object-cover rounded-sm shadow-frame"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Quadros em Ambiente
      <section className="py-20 bg-gallery-warm">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-4xl font-bold text-primary mb-12">
            Quadros em ambiente
          </h2>
          
          <Carousel className="w-full" opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 2500, stopOnMouseEnter: true, stopOnInteraction: false })]}>
            <CarouselContent>
              {[room1, room2, room3, room4, room5, room6].map((image, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                  <div className="bg-frame-gold/30 p-4 rounded-lg">
                    <img
                      src={image}
                      alt={`Quadro em ambiente ${index + 1}`}
                      onClick={() => handleZoom(index)}
                      className={`w-full aspect-square object-cover rounded-sm shadow-frame transition-transform duration-300 ${zoomed === index ? 'scale-110' : ''}`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section> */}

    </div>
  );
};

export default Home;