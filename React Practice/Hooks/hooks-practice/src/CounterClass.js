import React, { Component } from "react";

class CounterClass extends Component {

  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return( 
      <div>
        <h1>Class Component</h1>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleClick}>Add 1</button>
      </div>
    )
  }
}

export default CounterClass;