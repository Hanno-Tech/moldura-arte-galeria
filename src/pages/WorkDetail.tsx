
import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { artworks } from "@/data/artworks";
import { QuoteButton } from "@/components/ui/quote-button";
import { useArtworkImages } from "@/hooks/useArtworkImages";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { normalizeImage } from "@/lib/image-utils";

const WorkDetail = () => {
  const { id } = useParams();
  const obra = useMemo(() => artworks.find(a => a.id === id), [id]);
  const { data: galleryImages, isLoading, isError } = useArtworkImages(obra?.tag || "");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (obra) document.title = `${obra.title} | MAG`;
  }, [obra]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    // Reseta a imagem atual se as imagens da galeria mudarem
    setCurrent(0);
  }, [galleryImages]);

  if (!obra) {
    return (
      <div className="container mx-auto px-6 py-16">
        <p className="text-foreground font-inter">Obra não encontrada.</p>
        <Link to="/obras" className="text-accent hover:underline font-inter">Voltar para obras</Link>
      </div>
    );
  }

  // Garante que galleryImages seja sempre um array
  const imagesToShow = galleryImages || [];

  return (
    <div className="container mx-auto px-6 py-16">
      <header className="mb-8">
        <h1 className="font-playfair text-3xl text-primary">{obra.title}</h1>
        <p className="text-muted-foreground font-inter">{obra.artist}</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-[50%_25%_25%] gap-8 items-stretch mb-10">
        <div className="bg-frame-gold/20 p-4 rounded-lg">
          {isLoading || imagesToShow.length === 0 ? (
            <div className="w-full aspect-[4/3] bg-gray-200 animate-pulse rounded-sm" />
          ) : (
            <OptimizedImage
              src={normalizeImage(imagesToShow[current])}
              alt={`${obra.title} - imagem ${current + 1}`}
              className="w-full aspect-[4/3] object-cover rounded-sm shadow-frame"
              priority={current === 0} // Preload da primeira imagem principal
            />
          )}
        </div>

        <div className="grid grid-rows-2 gap-4 h-full">
          {imagesToShow.slice(0, 2).map((src, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`bg-frame-gold/20 p-2 rounded-md h-full transition-transform duration-200 hover:scale-105 ${current === idx ? 'ring-2 ring-accent' : ''}`}
              aria-label={`Mostrar variação ${idx + 1}`}
            >
              <OptimizedImage src={normalizeImage(src)} alt={`Variação ${idx + 1} de ${obra.title}`} className="w-full h-full object-cover rounded-sm" />
            </button>
          ))}
        </div>

        <div className="grid grid-rows-2 gap-4 h-full">
          {imagesToShow.slice(2, 4).map((src, idx) => (
            <button
              key={idx + 2}
              onClick={() => setCurrent(idx + 2)}
              className={`bg-frame-gold/20 p-2 rounded-md h-full transition-transform duration-200 hover:scale-105 ${current === idx + 2 ? 'ring-2 ring-accent' : ''}`}
              aria-label={`Mostrar variação ${idx + 3}`}
            >
              <OptimizedImage src={normalizeImage(src)} alt={`Variação ${idx + 3} de ${obra.title}`} className="w-full h-full object-cover rounded-sm" />
            </button>
          ))}
        </div>
      </section>

      {isError && (
        <div className="text-center text-red-500 mb-6 font-inter">
          Não foi possível carregar as imagens da galeria. Verifique a conexão ou o arquivo de dados.
        </div>
      )}

      <section className="w-full">
        <div className="bg-card border border-border rounded-lg p-8 shadow-elegant">
          <h2 className="font-playfair text-2xl text-primary mb-4">Sobre a obra</h2>
          {obra.type && (
            <div className="mb-4">
              <p className="text-muted-foreground font-inter text-sm">Técnica</p>
              <p className="text-foreground font-inter">{obra.type}</p>
            </div>
          )}

          {obra.size && (
            <div className="mb-4">
              <p className="text-muted-foreground font-inter text-sm">Dimensões</p>
              <p className="text-foreground font-inter">{obra.size}</p>
            </div>
          )}

          {obra.size_with_frame && (
            <div className="mb-6">
              <p className="text-muted-foreground font-inter text-sm">Dimensões com moldura</p>
              <p className="text-foreground font-inter">{obra.size_with_frame}</p>
            </div>
          )}

          {obra.is_promotion && obra.new_price ? (
            <div className="mb-6">
              <p className="text-muted-foreground font-inter mb-2">Preço</p>
              <div className="flex items-baseline gap-3">
                {obra.price && (
                  <p className="text-muted-foreground/60 font-playfair text-xl line-through">
                    R$ {obra.price.toLocaleString('pt-BR')}
                  </p>
                )}
                <p className="text-primary font-playfair text-3xl font-bold">
                  R$ {obra.new_price.toLocaleString('pt-BR')}
                </p>
              </div>
            </div>
          ) : (
            obra.price && obra.price <= 5000 && (
              <div className="mb-6">
                <p className="text-muted-foreground font-inter mb-2">Preço</p>
                <p className="text-primary font-playfair text-3xl">R$ {obra.price.toLocaleString('pt-BR')}</p>
              </div>
            )
          )}

          <QuoteButton
            variant="default"
            className="font-inter"
            artworkTitle={obra.title}
            useWhatsApp={true}
          >
            Pedir mais informações
          </QuoteButton>
        </div>
      </section>
    </div>
  );
};

export default WorkDetail;
