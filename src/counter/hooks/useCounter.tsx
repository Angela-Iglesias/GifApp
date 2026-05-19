import { useState } from "react";

export const useCounter = (inicio: number) => {
    const [count, setCount] = useState(inicio);

    const handleOnClickSuma = () => {
        setCount(prev => prev + 1)
    }

    const handleOnClickResta = () => {
        setCount(prev => prev - 1)
    }

    const handleOnClickReset = () => {
        setCount(0)
    }

    return {
        // Values
        count,

        // Methods or Actions
        handleOnClickSuma,
        handleOnClickResta,
        handleOnClickReset
    }
}
