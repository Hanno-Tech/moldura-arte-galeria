import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ArtistCardProps {
  id: string;
  name: string;
  image: string;
  worksCount?: number;
  className?: string;
}

export const ArtistCard = ({ id, name, image, worksCount, className }: ArtistCardProps) => {
  return (
    <Link
      to={`/artistas/${id}`}
      className={cn("group block transition-all duration-300 hover:-translate-y-1", className)}
    >
      <article className="bg-card rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300 overflow-hidden">
        <div className="relative overflow-hidden aspect-square p-6">
          <div className="bg-frame-gold/20 p-4 rounded-lg h-full">
            <img
              src={image}
              alt={`Retrato do artista ${name}`}
              loading="lazy"
              className="w-full h-full object-cover rounded-sm shadow-frame"
            />
          </div>
        </div>
        <div className="p-6 text-center">
          <h3 className="font-playfair text-lg font-medium text-primary mb-1">{name}</h3>
          {typeof worksCount === 'number' && (
            <p className="text-muted-foreground font-inter text-sm">{worksCount} {worksCount === 1 ? 'obra' : 'obras'}</p>
          )}
        </div>
      </article>
    </Link>
  );
};
