import FreeCells from './FreeCells.jsx';
import Foundations from './Foundations.jsx';

const Content = () => {
    const cardsInFreeCells = [];
    cardsInFreeCells[0] = 'spade_10';
    cardsInFreeCells[1] = 'heart_jack';
    cardsInFreeCells[2] = 'diamond_queen';
    cardsInFreeCells[3] = 'club_king';
    const cardsInFoundations = [];

    return (
        <svg 
        width="1100"
        height="900"
        >
            <FreeCells
                cardsInFreeCells={cardsInFreeCells} 
            />
            <Foundations
                cardsInFoundations={cardsInFoundations} 
            />
        </svg>
    )
}

export default Content
