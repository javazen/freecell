//import React from 'react'

export default function CardColumn({cards, iCol}) {
    const nullCard = 'back';
    const transform = "scale(0.6)";
    if (cards.length < 0 || cards.length > 52) console.log('CardColumn: a column should have 0-52 elements');

    const cardObjects = cards.map( function(o, i) {return {x:iCol*50, y:30+60*i, card:adj(o), href:href(o)}}  );

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
        <div className="card-column">
            <svg 
            width="1000"
            height="400"
            xmlnsXlink="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
            >
                 <g transform={transform} >
                 { cards.map( 
                    function(o, i) {
                        return <use key={i} href={cardObjects[i].href} x={cardObjects[i].x} y={cardObjects[i].y} id={"free-cell-"+i} card={cardObjects[i].card} onClick={cardClick} />
                    })
                }
                 </g>
            </svg>

        </div>
    )
}
