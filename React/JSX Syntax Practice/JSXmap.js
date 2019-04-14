import React from 'react';
import ReactDOM from 'react-dom';

let isPentryEmpty = Math.random() < 0.5;

const groceries = ['Mango', 'Orange', 'Grapes', 'Potatoes', 'Organic Chicken', 'Eggs', 'Milk', 'Bread'];

	if(isPentryEmpty) {
   const grocerieList = groceries.map((item, index) =>
      <li key={"item_" + index}>{item}</li>
  );
                                    
  const myGrocerieList = (
		<div>                                      
    <h3>Time to go shopping!</h3>                 
		<ul>{grocerieList}</ul>
		</div>
  );
 
	ReactDOM.render(myGrocerieList, document.getElementById('app'))

} else {
  const fullPentry = (
  	<h3>I still have food in the pentry.</h3>
  );
  
  ReactDOM.render(fullPentry, document.getElementById('app'))
}                          
