import React from 'react';
import Rando from "./Rando";
import BrokenClick from "./BrokenClick";
import RandomNumber from "./RandomNumber";
import './App.css';

function App() {
  return (
    <div className="App">
      {
        // <Rando maxNum={7} />
        // <BrokenClick />
        <RandomNumber luckyNum={9} />
      
      }
    </div>
  );
}

export default App;
