import { Button } from "@/components/ui/button";
import { ArtworkCard } from "@/components/ui/artwork-card";
import { QuoteButton } from "@/components/ui/quote-button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import heroArtwork from "@/assets/hero-artwork.jpg";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";

const featuredArtworks = [
  { id: '1', image: artwork1, title: 'Composição VII', artist: 'Ana Silva' },
  { id: '2', image: artwork2, title: 'Serra Dourada', artist: 'Pedro Rocha' },
  { id: '3', image: artwork3, title: 'Figura com Pássaro', artist: 'Mana Souza' },
  { id: '4', image: artwork4, title: 'Flores no Jardim', artist: 'Beatriz Rocha' },
];

const Home = () => {
  const obrasCarousel = [
    { id: 'o1', image: artwork1, title: 'Composição VII', artist: 'Ana Silva' },
    { id: 'o2', image: artwork2, title: 'Serra Dourada', artist: 'Pedro Rocha' },
    { id: 'o3', image: artwork3, title: 'Figura com Pássaro', artist: 'Mana Souza' },
    { id: 'o4', image: artwork4, title: 'Flores no Jardim', artist: 'Beatriz Rocha' },
    { id: 'o5', image: artwork2, title: 'Ritmo Terracota', artist: 'Clara Nunes' },
    { id: 'o6', image: artwork3, title: 'Geometrias Suaves', artist: 'Rafael Dias' },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gallery-warm min-h-[80vh] flex items-center">
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
            
            <div className="grid grid-cols-2 gap-4">
              {featuredArtworks.map((artwork) => (
                <div key={artwork.id} className="bg-frame-gold/30 p-4 rounded-lg">
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
      <section className="py-20 bg-gallery-warm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-primary mb-6">
                Sobre
              </h2>
              <p className="text-foreground font-inter leading-relaxed mb-6 max-w-md">
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-playfair text-4xl font-bold">Obras</h2>
          </div>

          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {obrasCarousel.map((obra) => (
                <CarouselItem key={obra.id} className="basis-1/2">
                  <ArtworkCard
                    id={obra.id}
                    image={obra.image}
                    title={obra.title}
                    artist={obra.artist}
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
      <section className="py-20 bg-primary text-primary-foreground">
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[artwork1, artwork2, artwork3, artwork4, artwork2, artwork3].map((image, index) => (
              <div key={index} className="bg-frame-gold/30 p-4 rounded-lg">
                <img
                  src={image}
                  alt={`Quadro em ambiente ${index + 1}`}
                  className="w-full aspect-square object-cover rounded-sm shadow-frame"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;