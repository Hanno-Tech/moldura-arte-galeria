import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { artworks } from "@/data/artworks";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import room4 from "@/assets/room-4.jpg";
import room5 from "@/assets/room-5.jpg";
import room6 from "@/assets/room-6.jpg";

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
      <header className="mb-10">
        <h1 className="font-playfair text-4xl text-primary mb-3">{artistData.name}</h1>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
        <article>
          <h2 className="sr-only">Sobre o artista</h2>
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
        <h2 className="font-playfair text-3xl text-primary mb-6">Obras em ambientes</h2>
        <Carousel className="w-full" opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 2500, stopOnMouseEnter: true, stopOnInteraction: false })]}>
          <CarouselContent>
            {[room1, room2, room3, room4, room5, room6].map((image, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                <div className="bg-frame-gold/30 p-4 rounded-lg">
                  <img
                    src={image}
                    alt={`Quadro em ambiente ${index + 1}`}
                    loading="lazy"
                    className="w-full aspect-square object-cover rounded-sm shadow-frame"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
};

export default ArtistDetail;
