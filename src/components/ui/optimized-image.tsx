"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export const OptimizedImage = ({ src, alt, className, ...props }: OptimizedImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // A imagem carrega apenas uma vez
    threshold: 0.1,    // Carrega quando 10% da imagem está visível
  });

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div ref={ref} className={cn("relative", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded-sm">
          {/* Você pode adicionar um ícone ou spinner aqui */}
        </div>
      )}
      {inView && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "transition-opacity duration-500",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
          onLoad={() => setIsLoading(false)}
          {...props}
        />
      )}
    </div>
  );
};
