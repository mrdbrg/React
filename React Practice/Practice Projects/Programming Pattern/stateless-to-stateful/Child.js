/*
  Programming Patter
  Stateless Components Inherit From Stateful Components

  A stateful, parent component passes down a prop to a stateless, child component.
*/

import React from 'react';

export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
 }
