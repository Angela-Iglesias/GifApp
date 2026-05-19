import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"


export const GifsApp = () => {

    const { previousItems, gifsAMostrar, handleClick, handleClickButtonSearch } = useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif perfecto' />

            {/* Search */}
            <SearchBar buttonDescription='Buscar' onClickButtonSearch={handleClickButtonSearch} />

            {/* Búsquedas previas */}
            <PreviousSearches searches={previousItems} onClickItem={handleClick} />

            {/* Gifs*/}
            <GifList gifs={gifsAMostrar} />
        </>
    )
}

