import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArtistCard } from "@/components/ui/artist-card";
import { artworks as allArtworks } from "@/data/artworks";
import allGalleries from "@/data/image-galleries.json";

const slugify = (s: string) => s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const Artists = () => {
  const [q, setQ] = useState("");

  useEffect(() => {
    document.title = "Artistas | MAG";
    window.scrollTo(0, 0);
  }, []);

  const artists = useMemo(() => {
    const map = new Map<string, { name: string; id: string; works: { id: string; title: string, image: string }[]; }>();

    for (const a of allArtworks) {
      const id = slugify(a.artist);
      if (!map.has(id)) {
        map.set(id, { name: a.artist, id, works: [] });
      }

      // @ts-ignore
      const gallery = allGalleries[a.tag] || [];
      const coverImage = gallery.length > 0 ? gallery[0] : `https://placehold.co/800x600/eee/ccc?text=Imagem+Indisponível`;

      map.get(id)!.works.push({ id: a.id, title: a.title, image: coverImage });
    }

    let list = Array.from(map.values());

    if (q.trim()) {
      const term = q.trim().toLowerCase();
      list = list.filter((ar) =>
        ar.name.toLowerCase().includes(term) ||
        ar.works.some((w) => w.title.toLowerCase().includes(term))
      );
    }

    return list;
  }, [q]);

  return (
    <div className="container mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="font-playfair text-4xl text-primary mb-3">Artistas</h1>
        <p className="text-muted-foreground font-inter">Explore os artistas representados e descubra suas obras.</p>
      </header>

      <section className="bg-card border border-border rounded-lg p-6 shadow-elegant mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <Label htmlFor="q" className="font-inter">Pesquisar</Label>
            <Input id="q" placeholder="Nome do artista ou título da obra" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((ar) => (
            <ArtistCard key={ar.id} id={ar.id} name={ar.name} image={ar.works[0].image} worksCount={ar.works.length} />
          ))}
        </div>
        {artists.length === 0 && (
          <p className="text-muted-foreground mt-6 font-inter">Nenhum artista encontrado com o termo informado.</p>
        )}
      </section>
    </div>
  );
};

export default Artists;
