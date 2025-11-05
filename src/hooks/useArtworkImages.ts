import { useQuery } from "@tanstack/react-query";

// Substitua 'dlnkin4nf' pelo nome da sua nuvem Cloudinary
const CLOUD_NAME = "dlnkin4nf";

/**
 * Interface para a resposta da lista de recursos do Cloudinary.
 * Apenas os campos que usamos são definidos aqui.
 */
interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}

/**
 * Busca a lista de imagens de uma obra de arte no Cloudinary com base em uma tag.
 * @param tag - A tag da obra de arte (ex: "obra_1").
 * @returns Uma promessa que resolve para um array de URLs de imagem.
 */
const fetchArtworkImages = async (tag: string): Promise<string[]> => {
  if (!tag) {
    return [];
  }

  // URL para a lista de recursos do Cloudinary baseada na tag
  const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${tag}.json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`A lista de imagens para a tag "${tag}" não foi encontrada ou não pôde ser carregada.`);
  }

  const data = await response.json();

  // Extrai as URLs seguras dos recursos
  const imageUrls = data.resources.map((resource: CloudinaryResource) => resource.secure_url);

  return imageUrls;
};

/**
 * Hook customizado para buscar as imagens de uma obra de arte do Cloudinary.
 *
 * Este hook utiliza o `react-query` para buscar, armazenar em cache e gerenciar
 * o estado dos dados das imagens.
 *
 * @param tag - A tag da obra de arte a ser buscada.
 * @returns O estado da query, incluindo os dados das imagens, status de carregamento e erro.
 */
export const useArtworkImages = (tag: string) => {
  return useQuery({
    queryKey: ["artworkImages", tag], // Chave única para a query, baseada na tag
    queryFn: () => fetchArtworkImages(tag), // Função que busca os dados
    enabled: !!tag, // A query só será executada se a tag existir
    staleTime: 1000 * 60 * 5, // Os dados são considerados "frescos" por 5 minutos
    cacheTime: 1000 * 60 * 30, // Os dados são mantidos em cache por 30 minutos
  });
};
