import { useEffect } from "react";
import partners from "@/assets/about/foto-criadores.jpg";
import galery from "@/assets/about/foto-galeria.jpg";

const About = () => {
  useEffect(() => {
    // Abre a página no topo quando carregar
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-gallery">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl font-bold text-primary mb-6">
              Sobre a MAG
            </h1>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed text-justify">
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
                <p className="text-justify">
                  A Moldura e Arte Galeria nasceu de uma paixão verdadeira pela arte e pelo cuidado com os detalhes.
                  Fundada em 14 de dezembro de 1999 por Natália Silva Sombrio, a loja foi criada com o sonho 
                  de oferecer um espaço onde a arte pudesse ser valorizada e onde cada quadro ganhasse a moldura
                  perfeita para contar sua história.
                </p>
                <p className="text-justify">
                  Natália, apaixonada por artes desde a infância, encontrou nesse universo uma nova forma de se 
                  realizar após sua aposentadoria na CASAN. Com coragem, sensibilidade e dedicação, ela transformou 
                  esse amor em um negócio familiar, abrindo a primeira loja no paredão da Avenida Hercílio Luz, 
                  no centro de Florianópolis.
                </p>
                <p className="text-justify">
                  Com o passar dos anos, a Moldura e Arte Galeria acompanhou as mudanças do mercado e evoluiu sem 
                  perder sua essência. Em fevereiro de 2006, a galeria mudou-se para um novo endereço
                   — ainda na mesma avenida — ganhando um espaço mais amplo e acolhedor, onde permanece até hoje.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-frame-gold/20 p-8 rounded-lg">
                <img
                  src={partners}
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
                  src={galery}
                  alt="Processo autoral MAG"
                  className="w-full rounded-sm shadow-frame"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-6 text-foreground font-inter leading-relaxed">
                <p className="text-justify">
                  Mais do que uma loja de quadros e molduras, nos tornamos referência pela qualidade dos materiais, 
                  como molduras selecionadas, obras de pintores renomados, e principalmente pelo nosso atendimento humanizado
                   — sempre com alegria, respeito e atenção aos detalhes que tornam cada cliente único. Muitos dos nossos 
                  clientes estão conosco desde os primeiros dias, gerando um grande orgulho.
                </p>
                <p className="text-justify">
                  Hoje, a tradição iniciada por Natália segue viva através das mãos da família. Atualmente, a galeria é administrada por sua filha, 
                  Silvia Andrade, com o apoio de seus netos Antônio Augusto Andrade e Eduardo Andrade, mantendo o 
                  compromisso com a excelência, a arte e a relação próxima com cada cliente que entra pela porta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores
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
      </section> */}
    </div>
  );
};

export default About;