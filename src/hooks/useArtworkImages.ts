import { useState, useEffect } from 'react';
import allGalleries from '@/data/image-galleries.json';

/**
 * @typedef {'loading' | 'error' | 'success'} Status
 */

/**
 * Hook customizado para carregar as imagens de uma galeria a partir do arquivo JSON local.
 *
 * Este hook lê o arquivo `image-galleries.json` (gerado pelo script de sincronização)
 * e retorna as imagens correspondentes à tag fornecida.
 *
 * @param {string} tag - A tag da obra de arte a ser buscada (ex: "obra_1").
 * @returns {{
 *   data: string[] | undefined;
 *   isLoading: boolean;
 *   isError: boolean;
 *   status: Status;
 * }} - O estado da busca, incluindo os dados, status de carregamento e erro.
 */
export const useArtworkImages = (tag) => {
  const [status, setStatus] = useState('loading');
  const [data, setData] = useState(undefined);

  useEffect(() => {
    if (!tag) {
      setStatus('success');
      setData([]);
      return;
    }

    try {
      // Verifica se a tag existe como uma chave no JSON importado
      if (tag in allGalleries) {
        // @ts-ignore
        setData(allGalleries[tag]);
        setStatus('success');
      } else {
        // A tag é válida, mas não foi encontrada no JSON (pode ser um erro de sincronização)
        console.warn(`Nenhuma galeria encontrada para a tag "${tag}" no arquivo JSON local.`);
        setData([]);
        setStatus('success'); // Trata como sucesso, mas com uma galeria vazia
      }
    } catch (error) {
      console.error('Erro ao carregar as galerias de imagens do JSON:', error);
      setStatus('error');
      setData(undefined);
    }
  }, [tag]); // Executa o efeito sempre que a tag mudar

  return {
    data,
    status,
    isLoading: status === 'loading',
    isError: status === 'error',
  };
};
