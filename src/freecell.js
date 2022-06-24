// const legalSuits = 'SHDC';
// const legalValues = 'AKQJT98765432';

const possibleCards = [
    'spade_1', 'spade_2', 'spade_3', 'spade_4', 'spade_5', 'spade_6', 'spade_7', 'spade_8', 'spade_9', 'spade_10', 'spade_jack', 'spade_queen', 'spade_king', 
    'heart_1', 'heart_2', 'heart_3', 'heart_4', 'heart_5', 'heart_6', 'heart_7', 'heart_8', 'heart_9', 'heart_10', 'heart_jack', 'heart_queen', 'heart_king', 
    'diamond_1', 'diamond_2', 'diamond_3', 'diamond_4', 'diamond_5', 'diamond_6', 'diamond_7', 'diamond_8', 'diamond_9', 'diamond_10', 'diamond_jack', 'diamond_queen', 'diamond_king', 
    'club_1', 'club_2', 'club_3', 'club_4', 'club_5', 'club_6', 'club_7', 'club_8', 'club_9', 'club_10', 'club_jack', 'club_queen', 'club_king'
]

export function newDeal() {
    let deal = {count:0, lastCard:'', cardsInFreeCells:[], cardsInAcePiles:['', '', '', '']};
    let cards = possibleCards.slice(0);
    let idx, dealtCards = [];
    let columns = [ [], [], [], [], [], [], [], [] ];
    let aColumn;
    for (let i=0; i<possibleCards.length; i++) {
        idx = Math.floor(cards.length * Math.random());
        let aCard = cards[idx];
        dealtCards.push(aCard);
        cards.splice(idx, 1);   // take it out so we don't repeat cards
        if (i<3) {
            console.log('i=' + i + ' card= ' + aCard);
        }
        // put into columns
        let iCol = i % 8;
        aColumn = columns[iCol];
        aColumn.push(aCard);
    }
    deal.dealtCards = dealtCards;
    deal.columns = columns;

    // deal.cardsInFreeCells[0] = 'spade_10';
    // deal.cardsInFreeCells[1] = 'heart_jack';
    // deal.cardsInFreeCells[2] = 'diamond_queen';
    // deal.cardsInFreeCells[3] = 'club_king';
    deal.cardsInFreeCells[0] = deal.dealtCards[0];  //  temp for testing
    deal.cardsInFreeCells[1] = deal.dealtCards[1];
    deal.cardsInFreeCells[2] = deal.dealtCards[2];
    deal.cardsInFreeCells[3] = deal.dealtCards[3];

    return deal;
}
