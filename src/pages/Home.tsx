import { Button } from "@/components/ui/button";
import { ArtworkCard } from "@/components/ui/artwork-card";
import { QuoteButton } from "@/components/ui/quote-button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import heroArtwork from "@/assets/hero-artwork.jpg";
import artwork1 from "@/assets/teta.jpg";
import artwork2 from "@/assets/flor.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import Autoplay from "embla-carousel-autoplay";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import room4 from "@/assets/room-4.jpg";
import room5 from "@/assets/room-5.jpg";
import room6 from "@/assets/room-6.jpg";
import { artworks } from "@/data/artworks";
import { useEffect, useState } from "react";

const initialFeaturedArtworks = [
  { id: '1', image: artwork1, title: 'Composição VII', artist: 'Ana Silva' },
  { id: '2', image: artwork2, title: 'Serra Dourada', artist: 'Pedro Rocha' },
  { id: '3', image: artwork3, title: 'Figura com Pássaro', artist: 'Mana Souza' },
  { id: '4', image: artwork4, title: 'Flores no Jardim', artist: 'Beatriz Rocha' },
];

const Home = () => {
  const obrasCarousel = artworks.map((a) => ({
    id: a.id,
    image: a.images[0],
    title: a.title,
    artist: a.artist,
  }));
  const [featured, setFeatured] = useState(initialFeaturedArtworks);
  const [isFading, setIsFading] = useState(false);
  const [zoomed, setZoomed] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Primeiro troca as posições, depois aplica um fade-in suave
      setFeatured((prev) => {
        if (prev.length < 2) return prev;
        const i = Math.floor(Math.random() * prev.length);
        let j = Math.floor(Math.random() * prev.length);
        if (j === i) j = (j + 1) % prev.length;
        const next = [...prev];
        [next[i], next[j]] = [next[j], next[i]];
        return next;
      });
      setIsFading(true);
      const timeout = setTimeout(() => setIsFading(false), 300);
      return () => clearTimeout(timeout);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
              <QuoteButton variant="default" className="font-inter font-medium text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-3">
                Consulta nossa curadoria
              </QuoteButton>
            </div>
            
            <div className={`grid grid-cols-2 gap-4 ${isFading ? 'animate-fade-in' : ''}`}>
              {featured.map((artwork) => (
                <div key={artwork.id} className="bg-frame-gold/30 p-4 rounded-lg transition-transform duration-300">
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
                Companhiam ducta édnce com arro angura de tempo lim e cumple utulas 
                cobre cilscioarem et ademersore
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

      {/* Figuras Section */}
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
      </section>

      {/* Quadros em Ambiente */}
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
      </section>

    </div>
  );
};

export default Home;