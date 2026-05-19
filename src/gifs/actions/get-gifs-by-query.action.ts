import { giphyApi } from "../api/giphy.api";
import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from '../interfaces/gif.interface';

export const getGifsByQuery = async (input: string): Promise<Gif[]> => {

    const response = await giphyApi<GiphyResponse>('/search', {
        params: {
            q: input,
            limit: 10,
        }
    });

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));


    // const peticion = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    // const respuesta: GiphyResponse = await peticion.json();

    // console.log(respuesta.data);

    // return respuesta.data;

}