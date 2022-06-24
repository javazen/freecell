//import React from 'react'
import CardColumn from "./cardColumn.js"

export default function ArrayCardColumns({deal}) {
    const columns = deal.columns;
    console.log('ArrayCardColumns: found ' + columns.length + ' columns');
    if (columns.length != 8) console.log('ArrayCardColumns: there should be 8 Columns');
    return ( 
        <div className="card-columns-array">
        { columns.map( 
            function(o, i) {
                return <CardColumn key={i}  cards={columns[i]} />
            })
        }
        </div>
    )
}

// columns is an array of 8 cardsInOneColumn elements
// each cardsInOneColumn is a stack of oneCard elements which can be pushed or popped
// each oneCard is an object like {suit:'S', value:'A'}
