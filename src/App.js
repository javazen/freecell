import {useState, useEffect} from "react";
// import Navbar from "./Components/navbar"
import ArrayFreeCells from "./Components/arrayFreeCells.js"
import ArrayAcePiles from "./Components/arrayAcePiles.js"
import ArrayCardColumns from "./Components/arrayCardColumns.js"
import * as Freecell from "./freecell.js"

import "./App.css"

let deal;

function App() {
  console.log();

  if (!deal) deal = Freecell.newDeal();

  const [myState, setMyState] = useState(deal);

  function increment() {
    setMyState( (deal) => {
      deal.count++;
      console.log('increment, change count to ' + deal.count);
      return deal;
    });
  }

  deal.increment = increment;

  return (
    <div className="App">
      <h1>Welcome to freecell</h1>
      <div className="flexbox-container">
        <ArrayFreeCells deal={deal} />
        <ArrayAcePiles deal={deal} />
      </div>
      <ArrayCardColumns deal={deal} />
      <button onClick={increment}>Increment</button>
    </div>
  );
}

/* <div className="flexbox-container">
<ArrayFreeCells cardsInFreeCells={deal.cardsInFreeCells} />
<ArrayAcePiles cardsInAcePiles={deal.cardsInAcePiles} />
</div>
<ArrayCardColumns columns={deal.columns} /> */


//       <Navbar name='nav' />


export default App;

// useEffect( () => {
//   // Anything in here is fired on component mount.
// }, []);

