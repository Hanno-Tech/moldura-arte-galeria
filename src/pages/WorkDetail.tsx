
import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { artworks } from "@/data/artworks";
import { QuoteButton } from "@/components/ui/quote-button";

const WorkDetail = () => {
  const { id } = useParams();
  const obra = useMemo(() => artworks.find(a => a.id === id), [id]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (obra) document.title = `${obra.title} - ${obra.artist} | MAG`;
  }, [obra]);

  if (!obra) {
    return (
      <div className="container mx-auto px-6 py-16">
        <p className="text-foreground font-inter">Obra não encontrada.</p>
        <Link to="/obras" className="text-accent hover:underline font-inter">Voltar para obras</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <header className="mb-8">
        <h1 className="font-playfair text-3xl text-primary">{obra.title}</h1>
        <p className="text-muted-foreground font-inter">{obra.artist}</p>
      </header>

      {/* Layout com 3 colunas */}
      <section className="grid grid-cols-3 gap-8 items-start mb-10">
        {/* Coluna 1 - Imagem principal */}
        <div className="bg-frame-gold/20 p-4 rounded-lg">
          <img
            src={obra.images[current]}
            alt={`${obra.title} - imagem ${current + 1}`}
            className="w-full aspect-[4/3] object-cover rounded-sm shadow-frame"
          />
        </div>

        {/* Coluna 2 - Primeiras 2 miniaturas */}
        <div className="grid grid-cols-1 gap-4">
          {obra.images.slice(0, 2).map((src, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`bg-frame-gold/20 p-2 rounded-md transition-transform duration-200 hover:scale-105 ${current === idx ? 'ring-2 ring-accent' : ''}`}
              aria-label={`Mostrar variação ${idx + 1}`}
            >
              <img src={src} alt={`Variação ${idx + 1} de ${obra.title}`} className="w-full aspect-square object-cover rounded-sm" />
            </button>
          ))}
        </div>

        {/* Coluna 3 - Últimas 2 miniaturas */}
        <div className="grid grid-cols-1 gap-4">
          {obra.images.slice(2, 4).map((src, idx) => (
            <button
              key={idx + 2}
              onClick={() => setCurrent(idx + 2)}
              className={`bg-frame-gold/20 p-2 rounded-md transition-transform duration-200 hover:scale-105 ${current === idx + 2 ? 'ring-2 ring-accent' : ''}`}
              aria-label={`Mostrar variação ${idx + 3}`}
            >
              <img src={src} alt={`Variação ${idx + 3} de ${obra.title}`} className="w-full aspect-square object-cover rounded-sm" />
            </button>
          ))}
        </div>
      </section>

      {/* Descrição e preço centralizados */}
      <section className="max-w-2xl mx-auto text-center">
        <div className="bg-card border border-border rounded-lg p-8 shadow-elegant">
          <h2 className="font-playfair text-2xl text-primary mb-4">Sobre a obra</h2>
          <p className="text-foreground/80 font-inter leading-relaxed mb-6">{obra.description}</p>
          
          <div className="mb-6">
            <p className="text-muted-foreground font-inter mb-2">Preço</p>
            <p className="text-primary font-playfair text-3xl">R$ {obra.price.toLocaleString('pt-BR')}</p>
          </div>
          
          <QuoteButton variant="default" className="font-inter">Pedir mais informações</QuoteButton>
        </div>
      </section>

      <div className="mt-8 text-center">
        <Link to="/obras" className="text-accent hover:underline font-inter">← Ver todas as obras</Link>
      </div>
    </div>
  );
};

export default WorkDetail;
