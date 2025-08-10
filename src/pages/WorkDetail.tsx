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

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Imagem principal */}
        <div className="lg:col-span-2 bg-frame-gold/20 p-4 rounded-lg">
          <img
            src={obra.images[current]}
            alt={`${obra.title} - imagem ${current + 1}`}
            className="w-full aspect-[4/3] object-cover rounded-sm shadow-frame"
          />
        </div>

        {/* Miniaturas */}
        <aside className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-4">
          {obra.images.slice(0, 4).map((src, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`bg-frame-gold/20 p-2 rounded-md transition-transform duration-200 hover:scale-105 ${current === idx ? 'ring-2 ring-accent' : ''}`}
              aria-label={`Mostrar variação ${idx + 1}`}
            >
              <img src={src} alt={`Variação ${idx + 1} de ${obra.title}`} className="w-full aspect-square object-cover rounded-sm" />
            </button>
          ))}
        </aside>
      </section>

      {/* Descrição */}
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2">
          <h2 className="font-playfair text-2xl text-primary mb-3">Sobre a obra</h2>
          <p className="text-foreground/80 font-inter leading-relaxed">{obra.description}</p>
        </article>
        <aside className="bg-card border border-border rounded-lg p-6 shadow-elegant">
          <p className="text-muted-foreground font-inter mb-2">Preço</p>
          <p className="text-primary font-playfair text-3xl mb-6">R$ {obra.price.toLocaleString('pt-BR')}</p>
          <QuoteButton variant="default" className="w-full font-inter">Pedir mais informações</QuoteButton>
        </aside>
      </section>

      <div className="mt-8">
        <Link to="/obras" className="text-accent hover:underline font-inter">← Ver todas as obras</Link>
      </div>
    </div>
  );
};

export default WorkDetail;
