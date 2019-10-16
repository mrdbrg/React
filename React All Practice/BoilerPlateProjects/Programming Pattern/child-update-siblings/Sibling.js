/*
Programming Pattern
Child Components Update Sibling Components

A child component updates its parent’s state, and the
parent passes that state to a sibling component.
*/

import React from 'react';

export class Sibling extends React.Component {
  render() {
	const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}
