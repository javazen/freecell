//import React from 'react'

export default function ArrayAcePiles({deal}) {
    const nullCard = 'back';
    const transform = "scale(0.6)";
    const cardsInAcePiles = deal.cardsInAcePiles;
    if (cardsInAcePiles.length != 4) console.log('ArrayAcePiles: cardsInAcePiles should have 4 elements');

    const cardObjects = cardsInAcePiles.map( function(o, i) {return {x:200*i, y:30, card:adj(o), href:href(o)}}  );

    function adj(card) {
        return (card) ? card : nullCard;
    }
    function href(card) {
        return '/svg-cards.svg#' + adj(card);
    }
    function cardClick(e) {
        const card = (e && e.currentTarget && e.currentTarget.attributes['card']) ? e.currentTarget.attributes['card'].value : '';
        console.log('click on card ' + card);
        // deal.increment
    }
    return ( 
        <div className="ace-pile-rect-array">
            <svg 
            width="500"
            height="250"
            xmlnsXlink="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            >
                <g transform={transform} >
                { cardsInAcePiles.map( 
                    function(o, i) {
                        return <use key={i} href={cardObjects[i].href} x={cardObjects[i].x} y={cardObjects[i].y} id={"free-cell-"+i} card={cardObjects[i].card} onClick={cardClick} />
                    })
                }
                </g>
            </svg>
        </div>
    )
}