interface Props {
    searches: string[];
    onClickItem: (item: string) => void;
}

export const PreviousSearches = ({ searches, onClickItem }: Props) => {
    return (
        <div className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    searches.map(item => (
                        <li key={item} onClick={() => onClickItem(item)}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}