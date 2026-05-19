import { useState, useEffect } from "react";

interface Props {
    buttonDescription: string;
    onClickButtonSearch: (text: string) => void;
}

export const SearchBar = ({ buttonDescription, onClickButtonSearch }: Props) => {

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const tiempo = setTimeout(() => {
            handleSearch();
        }, 2000)

        return (() => {
            clearTimeout(tiempo)
        })

    }, [inputValue, onClickButtonSearch]);

    const handleSearch = () => {
        onClickButtonSearch(inputValue);

        setInputValue('');
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (event.key === 'Enter') {
            handleSearch();
        };
    }

    return (
        <div className="search-container">
            <input type="text"
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={(event) => {
                    setInputValue(event.target.value);
                }}
                onKeyDown={handleKeyDown}

            />
            < button onClick={handleSearch}> {buttonDescription}</button>
        </div >
    )
}