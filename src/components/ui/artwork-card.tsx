import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ArtworkCardProps {
  id: string;
  image: string;
  title: string;
  artist: string;
  className?: string;
  size?: "default" | "large";
}

export const ArtworkCard = ({ id, image, title, artist, className, size = "default" }: ArtworkCardProps) => {
  return (
    <Link 
      to={`/obras/${id}`}
      className={cn(
        "group block transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="bg-card rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300 overflow-hidden">
        <div className={cn(
          "aspect-square relative overflow-hidden",
          size === "large" ? "p-8" : "p-6"
        )}>
          <div className="bg-frame-gold/20 p-4 rounded-lg h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-sm shadow-frame"
            />
          </div>
        </div>
        
        <div className={cn(
          "p-6 text-center",
          size === "large" ? "p-8" : ""
        )}>
          <h3 className="font-playfair text-lg font-medium text-primary mb-1">
            {title}
          </h3>
          <p className="text-muted-foreground font-inter text-sm">
            {artist}
          </p>
        </div>
      </div>
    </Link>
  );
};