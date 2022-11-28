

const Foundations = ({cardsInFoundations}) => {
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
    const cardObjectsFoundations = cardsInFoundations.map( function(o, i) {return {x:100+200*i, y:30, card:adj(o), href:href(o)}}  );
    return (
        <g transform={transform} >
        { cardsInFoundations.map( 
            function(o, i) {
                return <use key={i} href={cardObjectsFoundations[i].href} x={cardObjectsFoundations[i].x} y={cardObjectsFoundations[i].y} id={"free-cell-"+i} card={cardObjectsFoundations[i].card} onClick={cardClick} />
            })
        }
      </g>
    )
}

export default Foundations
