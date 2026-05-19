import { useState, useRef } from "react";
import { mockGifs } from "../../mock-data/gifs.mock";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

//const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {

    const [previousItems, setPreviousItems] = useState<string[]>(['Goku']);
    const [gifsAMostrar, setGifsAMostrar] = useState<Gif[]>(mockGifs);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleClick = async (item: string) => {

        if (gifsCache.current[item]) {
            setGifsAMostrar(gifsCache.current[item])
            return;
        }
        else {
            const gifs = await getGifsByQuery(item);
            setGifsAMostrar(gifs);
        }

    }

    const handleClickButtonSearch = async (inputValue: string) => {
        const nuevoInput = inputValue.trim().toLowerCase();

        if (nuevoInput.length === 0) return;

        if (previousItems.includes(nuevoInput)) return;

        setPreviousItems([nuevoInput, ...previousItems].slice(0, 8));

        const gifs = await getGifsByQuery(nuevoInput);
        setGifsAMostrar(gifs);

        gifsCache.current[nuevoInput] = gifs;

        console.log(gifsCache.current)
    }

    return {

        // Values or Properties
        gifsAMostrar,
        previousItems,

        // Methods or Actions
        handleClick,
        handleClickButtonSearch

    }
}