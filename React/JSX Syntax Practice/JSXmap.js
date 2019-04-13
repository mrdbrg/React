import React from 'react';
import ReactDOM from 'react-dom';

let needGroceries = Math.random() < 0.5;


const groceries = ['Mango', 'Orange', 'Grapes', 'Potatoes', 'Organic Chicken', 'Eggs', 'Milk', 'Bread'];

	if(needGroceries) {
   const grocerieList = groceries.map((item, index) =>
      <li key={"item_" + index}>{item}</li>
  );

  const myList = (
		<div>
    <h3>Time to grocery shop!</h3>
		<strong>Here's what I need:</strong>
		<ul>{grocerieList}</ul>
		</div>
  );

	ReactDOM.render(myList, document.getElementById('app'))

} else {
  const cabinetFull = (
  	<h3>I still have food.</h3>
  );

  ReactDOM.render(cabinetFull, document.getElementById('app'))
}


// ReactDOM.render goes here:
ReactDOM.render(myList, document.getElementById('app'))
