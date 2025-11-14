import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { artworks } from "@/data/artworks";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArtworkCard } from "@/components/ui/artwork-card";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Autoplay from "embla-carousel-autoplay";
import allGalleries from "@/data/image-galleries.json";
import { normalizeImage } from "@/lib/image-utils";

const slugify = (s: string) => s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const generateBio = (name: string, worksCount: number, types: string[]) => {
  const tipos = Array.from(new Set(types)).join(", ");
  return `${name} é um(a) artista com ${worksCount} ${worksCount === 1 ? 'obra' : 'obras'} nesta coleção. Sua produção transita por ${tipos.toLowerCase()} e explora relações entre forma, cor e composição.`;
};

const ArtistDetail = () => {
  const { id } = useParams<{ id: string }>();

  const artistData = useMemo(() => {
    const byArtist = artworks.filter((a) => slugify(a.artist) === id);
    if (byArtist.length === 0) return null;
    const name = byArtist[0].artist;
    const worksCount = byArtist.length;
    const types = byArtist.map((a) => a.type);
    const bio = generateBio(name, worksCount, types);
    
    // Pega a primeira imagem da primeira obra do artista
    const firstWork = byArtist[0];
    // @ts-ignore
    const gallery = allGalleries[firstWork.tag] || [];
    const firstImage = gallery.length > 0 ? gallery[0] : null;
    const image = firstImage ? normalizeImage(firstImage) : `https://placehold.co/800x600/eee/ccc?text=Imagem+Indisponível`;
    
    return { id: id!, name, works: byArtist, worksCount, bio, image };
  }, [id]);

  useEffect(() => {
    if (artistData) {
      document.title = `${artistData.name} | Artista | MAG`;
    }
  }, [artistData]);

  useEffect(() => {
    // Abre a página no topo quando navegar para um novo artista
    window.scrollTo(0, 0);
  }, [id]);
  const carouselWorks = useMemo(() => {
    if (!artistData) return [] as typeof artworks;
    // Se houver apenas uma obra, retorna apenas ela (sem repetir)
    if (artistData.works.length === 1) {
      return artistData.works;
    }
    // Se houver mais de uma obra, retorna todas sem repetir
    return artistData.works;
  }, [artistData]);

  if (!artistData) {
    return (
      <div className="container mx-auto px-6 py-16">
        <h1 className="font-playfair text-3xl text-primary mb-4">Artista não encontrado</h1>
        <Link to="/artistas" className="font-inter underline">Voltar para artistas</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
        <article>
          <h1 className="font-playfair text-4xl text-primary mb-4">{artistData.name}</h1>
          <p className="text-foreground font-inter leading-relaxed mb-4">{artistData.bio}</p>
          <p className="text-muted-foreground font-inter">Nesta coleção, destacam-se obras como {artistData.works.map(w => w.title).slice(0,3).join(', ')}.</p>
        </article>
        <aside>
          <div className="bg-frame-gold/20 p-6 rounded-lg">
            <OptimizedImage
              src={artistData.image}
              alt={`Obra do artista ${artistData.name}`}
              className="w-full aspect-square object-cover rounded-sm shadow-frame"
              priority={true}
            />
          </div>
        </aside>
      </section>

      <section>
        <h2 className="font-playfair text-3xl text-primary mb-6">Obras do artista</h2>
        {carouselWorks.length === 1 ? (
          // Se houver apenas uma obra, mostra sem carrossel
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {carouselWorks.map((w) => {
              // @ts-ignore
              const gallery = allGalleries[w.tag] || [];
              const firstImage = gallery.length > 0 ? gallery[0] : null;
              const workImage = firstImage ? normalizeImage(firstImage) : `https://placehold.co/800x600/eee/ccc?text=Imagem+Indisponível`;
              
              return (
                <ArtworkCard key={w.id} id={w.id} image={workImage} title={w.title} artist={w.artist} size="compact" />
              );
            })}
          </div>
        ) : (
          // Se houver mais de uma obra, usa carrossel
          <Carousel className="w-full" opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 2500, stopOnMouseEnter: true, stopOnInteraction: false })]}>
            <CarouselContent>
              {carouselWorks.map((w, idx) => {
                // @ts-ignore
                const gallery = allGalleries[w.tag] || [];
                const firstImage = gallery.length > 0 ? gallery[0] : null;
                const workImage = firstImage ? normalizeImage(firstImage) : `https://placehold.co/800x600/eee/ccc?text=Imagem+Indisponível`;
                
                return (
                  <CarouselItem key={`${w.id}-${idx}`} className="basis-full sm:basis-1/2 lg:basis-1/3">
                    <ArtworkCard id={w.id} image={workImage} title={w.title} artist={w.artist} size="compact" />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        )}
      </section>
    </div>
  );
};

export default ArtistDetail;
