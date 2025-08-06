import { Button } from "@/components/ui/button";
import { ArtworkCard } from "@/components/ui/artwork-card";
import { QuoteButton } from "@/components/ui/quote-button";
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
  return (
    <div className="min-h-screen">
      {/* Hero Section - Quatro Quadros */}
      <section className="py-20 bg-gradient-gallery">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Parede que faz sentir
            </h1>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Curadoria de arte personalizada, molduras sob medida e instalação. 
              Do briefing ao prego, criamos experiências sensoriais únicas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredArtworks.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                id={artwork.id}
                image={artwork.image}
                title={artwork.title}
                artist={artwork.artist}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Nova Seção Verde Escura */}
      <section className="py-20 bg-dark-green text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-4xl font-bold mb-6">
                  Arte que Transforma Ambientes
                </h2>
                <p className="text-lg leading-relaxed opacity-90 font-inter">
                  Há 25 anos, a MAG combina tradição familiar com inovação artística. 
                  Desenvolvemos um processo autoral único que vai do briefing inicial 
                  até a instalação final, garantindo que cada parede conte uma história única.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 p-6 rounded-lg">
                  <img
                    src={artwork3}
                    alt="Obra em destaque"
                    className="w-full rounded-sm shadow-frame"
                  />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 p-8 rounded-lg">
                <img
                  src={artwork2}
                  alt="Ambientação de obra"
                  className="w-full rounded-sm shadow-frame"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Obras em Destaque
            </h2>
            <p className="text-muted-foreground font-inter">
              Descubra nossa seleção curada de arte contemporânea
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredArtworks.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                id={artwork.id}
                image={artwork.image}
                title={artwork.title}
                artist={artwork.artist}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" className="font-inter">
              <Link to="/obras">Ver todas as obras</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gallery-warm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-primary mb-6">
                Sobre
              </h2>
              <p className="text-foreground font-inter leading-relaxed mb-6">
                Há 25 anos, a MAG combina tradição familiar com inovação artística. 
                Desenvolvemos um processo autoral único que vai do briefing inicial 
                até a instalação final, garantindo que cada parede conte uma história única.
              </p>
              <p className="text-muted-foreground font-inter leading-relaxed mb-8">
                Nossa curadoria personalizada transforma espaços em experiências 
                sensoriais memoráveis, sempre com o cuidado artesanal que nos define.
              </p>
              <Button asChild variant="secondary" className="font-inter">
                <Link to="/sobre">Conheça nossa história</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-frame-gold/20 p-6 rounded-lg">
                <img
                  src={artwork2}
                  alt="Processo artesanal MAG"
                  className="w-full rounded-sm shadow-frame"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-4">
            Pronto para transformar seu espaço?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agende uma consultoria personalizada e descubra como podemos criar algo único para você.
          </p>
          <QuoteButton variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" />
        </div>
      </section>
    </div>
  );
};

export default Home;