import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArtworkCard } from "@/components/ui/artwork-card";
import { artworks as allArtworks } from "@/data/artworks";
import allGalleries from "@/data/image-galleries.json";
import { normalizeImage } from "@/lib/image-utils";

/**
 * Prepara a lista de obras para exibição, garantindo que cada uma tenha uma imagem de capa
 * a partir do JSON de galerias.
 */
const artworksForDisplay = allArtworks.map(artwork => {
  // @ts-ignore
  const gallery = allGalleries[artwork.tag] || [];
  const firstImage = gallery.length > 0 ? gallery[0] : null;
  return {
    ...artwork,
    image: (firstImage ? normalizeImage(firstImage) : `https://placehold.co/800x600/eee/ccc?text=Imagem+Indisponível`) as string | { full?: string; medium?: string; thumbnail?: string; url?: string },
  };
});

const Works = () => {
  const [q, setQ] = useState("");
  const [type, setType] = useState<string>("");
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    document.title = "Obras | MAG";
    window.scrollTo(0, 0);
  }, []);

  const types = useMemo(() => Array.from(new Set(allArtworks.map(a => a.type))), []);

  const artworks = useMemo(() => {
    return artworksForDisplay.filter(a => {
      const matchesQuery = q
        ? a.title.toLowerCase().includes(q.toLowerCase()) || a.artist.toLowerCase().includes(q.toLowerCase())
        : true;
      const matchesCode = code
        ? a.tag.toLowerCase().includes(code.toLowerCase())
        : true;
      const matchesType = type && type !== 'all' ? a.type === type : true;
      return matchesQuery && matchesCode && matchesType;
    });
  }, [q, code, type]);

  return (
    <div className="container mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="font-playfair text-4xl text-primary mb-3">Obras</h1>
        <p className="text-muted-foreground font-inter">Explore nosso acervo e encontre a obra perfeita para o seu espaço.</p>
      </header>

      {/* Filtros */}
      <section className="bg-card border border-border rounded-lg p-6 shadow-elegant mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="q" className="font-inter">Pesquisar</Label>
            <Input id="q" placeholder="Artista ou título" value={q} onChange={e => setQ(e.target.value)} />
          </div>

          <div>
            <Label className="font-inter">Tipo</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="Todos os tipos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                {types.map(t => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="code" className="font-inter">Código</Label>
            <Input id="code" placeholder="Ex: 1001, 1002..." value={code} onChange={e => setCode(e.target.value)} />
          </div>
        </div>
      </section>

      {/* Lista */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map(a => (
            <ArtworkCard
              key={a.id}
              id={a.id}
              image={a.image}
              title={a.title}
              artist={a.artist}
            />
          ))}
        </div>
        {artworks.length === 0 && (
          <p className="text-muted-foreground mt-6 font-inter">Nenhuma obra encontrada com os filtros selecionados.</p>
        )}
      </section>
    </div>
  );
};

export default Works;
