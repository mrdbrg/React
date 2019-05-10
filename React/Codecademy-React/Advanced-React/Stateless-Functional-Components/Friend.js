import React from 'react';
import ReactDOM from 'react-dom';

/*
  A component class written as a function is called a stateless functional component.
  Stateless functional components have some advantages over typical component classes.

  source: https://bit.ly/2DXkMej
*/

export class Friend extends React.Component {
	render() {
		return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
	}
}

ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);
