/*
  Programming Patter
  Stateless Components Inherit From Stateful Components

  A stateful, parent component passes down a prop to a stateless,
  child component.

  Source: https://bit.ly/2IWJIXs
*/

import React from "react";
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
		super(props);
    this.state = {
      name: 'Frarthur'
    };
  }
  render() {
    return <Child name={this.state.name} />;
  }
}

ReactDOM.render(
	<Parent />,
  document.getElementById('app')
);
