import { Button } from "@/components/ui/button";
import { QuoteButton } from "@/components/ui/quote-button";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork4 from "@/assets/artwork-4.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-gallery">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl font-bold text-primary mb-6">
              Sobre a MAG
            </h1>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed">
              25 anos de tradição familiar, transformando espaços em experiências sensoriais únicas 
              através da arte, molduras artesanais e curadoria personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-primary mb-6">
                Nossa História
              </h2>
              <div className="space-y-6 text-foreground font-inter leading-relaxed">
                <p>
                  Fundada em 1999, a MAG nasceu do sonho de uma família apaixonada pela arte 
                  de transformar ambientes através da curadoria personalizada e molduras artesanais.
                </p>
                <p>
                  Ao longo de 25 anos, desenvolvemos uma metodologia única que combina sensibilidade 
                  artística, técnica refinada e atenção aos detalhes, sempre respeitando a 
                  individualidade de cada cliente e espaço.
                </p>
                <p>
                  Hoje, somos reconhecidos não apenas pela qualidade de nossos produtos, mas pela 
                  capacidade de criar narrativas visuais que despertam emoções e transformam 
                  a forma como as pessoas se relacionam com seus ambientes.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-frame-gold/20 p-8 rounded-lg">
                <img
                  src={artwork2}
                  alt="História da MAG"
                  className="w-full rounded-sm shadow-frame"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo Autoral */}
      <section className="py-20 bg-gallery-warm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-frame-gold/20 p-8 rounded-lg">
                <img
                  src={artwork4}
                  alt="Processo autoral MAG"
                  className="w-full rounded-sm shadow-frame"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-6">
                Do Briefing ao Prego
              </h2>
              <div className="space-y-6 text-foreground font-inter leading-relaxed">
                <p>
                  Nosso processo autoral é o que nos diferencia no mercado. Iniciamos cada projeto 
                  com um briefing detalhado, onde compreendemos não apenas as necessidades estéticas, 
                  mas também o estilo de vida e as emoções que nosso cliente deseja despertar.
                </p>
                <p>
                  A partir dessa compreensão profunda, desenvolvemos uma curadoria personalizada, 
                  selecionando obras que dialogam harmoniosamente com o espaço. Cada moldura é 
                  pensada e crafted especificamente para a obra escolhida.
                </p>
                <p>
                  O processo culmina com a instalação cuidadosa, onde cada "prego" é posicionado 
                  com precisão milimétrica, garantindo que o resultado final seja uma experiência 
                  sensorial completa e transformadora.
                </p>
              </div>
              
              <div className="mt-8">
                <QuoteButton className="font-inter" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Nossos Valores
            </h2>
            <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e nos conectam com cada cliente
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Sensibilidade</h3>
              <p className="text-muted-foreground font-inter">
                Compreendemos as emoções por trás de cada projeto, criando experiências que tocam o coração.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Confiabilidade</h3>
              <p className="text-muted-foreground font-inter">
                25 anos de experiência nos tornaram referência em qualidade e pontualidade.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-primary mb-2">Inovação</h3>
              <p className="text-muted-foreground font-inter">
                Combinamos tradição artesanal com técnicas contemporâneas para resultados únicos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;