import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { artworks } from "@/data/artworks";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArtworkCard } from "@/components/ui/artwork-card";
import Autoplay from "embla-carousel-autoplay";

import artist1 from "@/assets/artists/artist-1.jpg";
import artist2 from "@/assets/artists/artist-2.jpg";
import artist3 from "@/assets/artists/artist-3.jpg";
import artist4 from "@/assets/artists/artist-4.jpg";
import artist5 from "@/assets/artists/artist-5.jpg";
import artist6 from "@/assets/artists/artist-6.jpg";

const slugify = (s: string) => s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const photoMap: Record<string, string> = {
  "ana-silva": artist1,
  "pedro-rocha": artist2,
  "mana-souza": artist3,
  "beatriz-rocha": artist4,
  "clara-nunes": artist5,
  "rafael-dias": artist6,
};

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
    const image = photoMap[id!] || artist1;
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
    const base = artistData.works;
    let list = [...base];
    while (list.length < 6) list = [...list, ...base];
    return list.slice(0, Math.max(6, base.length));
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
            <img src={artistData.image} alt={`Retrato do artista ${artistData.name}`} className="w-full aspect-square object-cover rounded-sm shadow-frame" />
          </div>
        </aside>
      </section>

      <section>
        <h2 className="font-playfair text-3xl text-primary mb-6">Obras do artista</h2>
        <Carousel className="w-full" opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 2500, stopOnMouseEnter: true, stopOnInteraction: false })]}>
          <CarouselContent>
            {carouselWorks.map((w, idx) => (
              <CarouselItem key={`${w.id}-${idx}`} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <ArtworkCard id={w.id} image={w.images[0]} title={w.title} artist={w.artist} size="compact" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
};

export default ArtistDetail;
