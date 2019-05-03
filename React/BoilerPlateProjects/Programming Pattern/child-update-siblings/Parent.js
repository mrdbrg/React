/*
Programming Pattern
Child Components Update Sibling Components

A child component updates its parent’s state, and the
parent passes that state to a sibling component.

Source: https://bit.ly/2IWJIXs
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child
          onChange={this.changeName} />
        <Sibling
          name={this.state.name} />
      </div>
    );
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
