"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string | { 
    full?: string; 
    large?: string; 
    medium?: string; 
    small?: string; 
    thumbnail?: string; 
    url?: string 
  };
  alt: string;
  className?: string;
  priority?: boolean; // Para imagens críticas (hero, primeira imagem)
}

export const OptimizedImage = ({ src, alt, className, priority = false, ...props }: OptimizedImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: priority ? 0 : 0.1, // Carrega imediatamente se for priority
    skip: priority, // Pula o lazy loading se for priority
  });

  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Normaliza a URL: pode ser string ou objeto com múltiplas versões
  // Seguindo as melhores práticas do Cloudinary para srcset responsivo
  const getImageData = () => {
    if (typeof src === 'string') {
      return {
        thumbnail: src,
        small: src,
        medium: src,
        large: src,
        full: src,
        url: src
      };
    }
    return {
      thumbnail: src.thumbnail || src.small || src.medium || src.large || src.full || src.url || '',
      small: src.small || src.medium || src.large || src.full || src.url || '',
      medium: src.medium || src.large || src.full || src.url || '',
      large: src.large || src.full || src.url || '',
      full: src.full || src.url || src.large || src.medium || '',
      url: src.url || src.full || src.large || src.medium || ''
    };
  };

  const imageData = getImageData();
  const shouldLoad = priority || inView;

  // Preload da imagem thumbnail para carregamento rápido (apenas para imagens priority)
  useEffect(() => {
    if (priority && imageData.thumbnail && !imageError) {
      const existingLink = document.querySelector(`link[href="${imageData.thumbnail}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageData.thumbnail;
        document.head.appendChild(link);
      }
    }
  }, [priority, imageData.thumbnail, imageError]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {isLoading && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded-sm">
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {shouldLoad && !imageError && (
        <img
          src={imageData.thumbnail} // Começa com thumbnail (menor) para carregamento rápido
          srcSet={`${imageData.thumbnail} 300w, ${imageData.small} 400w, ${imageData.medium} 800w, ${imageData.large} 1200w, ${imageData.full} 1920w`}
          sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1440px) 1200px, 1920px"
          alt={alt}
          className={cn(
            "transition-opacity duration-500 w-full h-full object-cover",
            isLoading ? "opacity-0" : "opacity-100",
            className
          )}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => {
            setIsLoading(false);
            // Carrega a versão full em background após thumbnail carregar
            if (imageData.full && imageData.full !== imageData.thumbnail) {
              const img = new Image();
              img.src = imageData.full;
            }
          }}
          onError={() => {
            setImageError(true);
            setIsLoading(false);
          }}
          {...props}
        />
      )}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-sm">
          Erro ao carregar imagem
        </div>
      )}
    </div>
  );
};
