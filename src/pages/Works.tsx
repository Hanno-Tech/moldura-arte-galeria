import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArtworkCard } from "@/components/ui/artwork-card";
import { artworks as allArtworks } from "@/data/artworks";

const Works = () => {
  const [q, setQ] = useState("");
  const [type, setType] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  useEffect(() => {
    document.title = "Obras | MAG";
  }, []);

  const types = useMemo(() => Array.from(new Set(allArtworks.map(a => a.type))), []);

  const artworks = useMemo(() => {
    return allArtworks.filter(a => {
      const matchesQuery = q
        ? a.title.toLowerCase().includes(q.toLowerCase()) || a.artist.toLowerCase().includes(q.toLowerCase())
        : true;
      const min = minPrice ? parseFloat(minPrice) : -Infinity;
      const max = maxPrice ? parseFloat(maxPrice) : Infinity;
      const matchesPrice = a.price >= min && a.price <= max;
      const matchesType = type && type !== 'all' ? a.type === type : true;
      return matchesQuery && matchesPrice && matchesType;
    });
  }, [q, minPrice, maxPrice, type]);

  return (
    <div className="container mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="font-playfair text-4xl text-primary mb-3">Obras</h1>
        <p className="text-muted-foreground font-inter">Explore nosso acervo e encontre a obra perfeita para o seu espaço.</p>
      </header>

      {/* Filtros */}
      <section className="bg-card border border-border rounded-lg p-6 shadow-elegant mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
            <Label htmlFor="min" className="font-inter">Preço mínimo</Label>
            <Input id="min" type="number" placeholder="0" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
          </div>

          <div>
            <Label htmlFor="max" className="font-inter">Preço máximo</Label>
            <Input id="max" type="number" placeholder="10000" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
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
              image={a.images[0]}
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
