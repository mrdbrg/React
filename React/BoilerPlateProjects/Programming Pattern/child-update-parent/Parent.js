/*
  Programming Pattern
  Child Components Update Their Parents' state

  A stateful, parent component passes down an event handler
  to a stateless, child component. The child component then
  uses that event handler to update its parent’s state.

  Source: https://bit.ly/2IWJIXs
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Frarthur'
    };
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return <Child
             name={this.state.name}
             onChange={this.changeName} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);
