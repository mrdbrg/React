import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const veryHungry = Math.random() < 0.5;

const howHungry = (
   <div>
  	 <h1>Are you hungry?</h1>
  	 { !veryHungry && <p>I'm gonna eat a whole pizza!!</p> }
    { veryHungry && <p>I'm not too hungry. Thanks.</p> }
  </div>
);

ReactDOM.render(
	howHungry,
	document.getElementById('app')
);
