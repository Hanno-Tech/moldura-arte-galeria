import { ArtworkCard } from "@/components/ui/artwork-card";
import { QuoteButton } from "@/components/ui/quote-button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { artworks } from "@/data/artworks";
import allGalleries from "@/data/image-galleries.json";
import { useEffect, useState, useMemo } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { normalizeImage } from "@/lib/image-utils";

/**
 * Prepara a lista de obras para exibição, garantindo que cada uma tenha uma imagem de capa.
 * A imagem de capa é a primeira imagem da galeria correspondente no JSON.
 */
const artworksForDisplay = artworks.map(artwork => {
  // @ts-ignore
  const gallery = allGalleries[artwork.tag] || [];
  const firstImage = gallery.length > 0 ? gallery[0] : null;
  return {
    id: artwork.id,
    image: firstImage ? normalizeImage(firstImage) : `https://placehold.co/800x600/eee/ccc?text=Imagem+Indisponível`,
    title: artwork.title,
    artist: artwork.artist,
    is_promotion: artwork.is_promotion,
  };
});

const initialFeaturedArtworks = artworksForDisplay.slice(0, 4);

/**
 * Função para embaralhar um array usando o algoritmo Fisher-Yates
 */
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Home = () => {
  const [featured, setFeatured] = useState(initialFeaturedArtworks);

  // Embaralha as obras uma vez quando o componente monta
  const shuffledArtworks = useMemo(() => {
    return shuffleArray(artworksForDisplay);
  }, []);

  useEffect(() => {
    document.title = "MAG - Moldura Arte e Galeria";
  }, []);

  // ... (o restante do código para a animação de fade permanece o mesmo)
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * featured.length);

      setTimeout(() => {
        setFeatured((prev) => {
          const next = [...prev];
          const availableArtworks = artworksForDisplay.filter(obra =>
            !prev.some(f => f.id === obra.id)
          );

          if (availableArtworks.length > 0) {
            const randomArtwork = availableArtworks[Math.floor(Math.random() * availableArtworks.length)];
            next[randomIndex] = randomArtwork;
          }

          return next;
        });
      }, 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, [featured.length]);


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
                  className="bg-frame-gold/30 p-4 rounded-lg transition-transform duration-300"
                >
                  <OptimizedImage
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full aspect-square object-cover rounded-sm shadow-frame"
                    priority={index < 2} // Preload das 2 primeiras imagens do hero
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
            </div>

            <div className="relative">
              <div className="bg-frame-gold/20 p-6 rounded-lg">
                <OptimizedImage
                  src={artworksForDisplay.length > 0 ? artworksForDisplay[0].image : ''}
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
              {shuffledArtworks.map((obra) => (
                <CarouselItem key={obra.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <ArtworkCard
                    id={obra.id}
                    image={obra.image}
                    title={obra.title}
                    artist={obra.artist}
                    size="compact"
                    isPromotion={obra.is_promotion}
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
    </div>
  );
};

export default Home;
