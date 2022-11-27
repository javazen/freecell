

const FreeCells = ({cardsInFreeCells}) => {
    function adj(card) {
        return (card) ? card : nullCard;
    }
    function href(card) {
        return '/svg-cards.svg#' + adj(card);
    }
    function cardClick(e) {
        const card = (e && e.currentTarget && e.currentTarget.attributes['card']) ? e.currentTarget.attributes['card'].value : '';
        const id = (e && e.currentTarget && e.currentTarget.attributes['id']) ? e.currentTarget.attributes['id'].value : '';
        console.log('click on card ' + card + ' id= ' + id);
        // deal.increment
    }
    const nullCard = 'back';
    const transform = "scale(0.6)";
    const cardObjectsFreeCells = cardsInFreeCells.map( function(o, i) {return {x:100+200*i, y:30, card:adj(o), href:href(o)}}  );
    return (
        <g transform={transform} >
        { cardsInFreeCells.map( 
            function(o, i) {
                return <use key={i} href={cardObjectsFreeCells[i].href} x={cardObjectsFreeCells[i].x} y={cardObjectsFreeCells[i].y} id={"free-cell-"+i} card={cardObjectsFreeCells[i].card} onClick={cardClick} />
            })
        }
      </g>
    )
}

export default FreeCells
