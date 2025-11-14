/**
 * Função helper para normalizar imagens do JSON.
 * Suporta tanto strings (formato antigo) quanto objetos com múltiplas versões (formato novo).
 */
export const normalizeImage = (
  image: string | { full?: string; medium?: string; thumbnail?: string; url?: string } | undefined
): string | { full?: string; medium?: string; thumbnail?: string; url?: string } => {
  if (!image) {
    return '';
  }
  
  // Se já é string, retorna como está (compatibilidade com formato antigo)
  if (typeof image === 'string') {
    return image;
  }
  
  // Se é objeto, retorna como está (formato novo com múltiplas versões)
  return image;
};

/**
 * Extrai a URL principal de uma imagem (para compatibilidade com código que espera string)
 */
export const getImageUrl = (
  image: string | { full?: string; medium?: string; thumbnail?: string; url?: string } | undefined
): string => {
  if (!image) {
    return '';
  }
  
  if (typeof image === 'string') {
    return image;
  }
  
  return image.url || image.full || image.medium || image.thumbnail || '';
};

