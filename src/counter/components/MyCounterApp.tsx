import { useCounter } from "../hooks/useCounter"

export const MyCounterApp = () => {

    const { count, handleOnClickSuma, handleOnClickResta, handleOnClickReset } = useCounter(5);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginTop: 40 }}>
            <h1>{count}</h1>
            <button onClick={handleOnClickSuma} style={{ width: 100 }}>Suma 1</button>
            <button onClick={handleOnClickResta} style={{ width: 100 }}>Resta 1</button>
            <button onClick={handleOnClickReset} style={{ width: 100 }} >Reset</button>
        </div>
    )
}