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
        <h2>Class Component</h2>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleClick}>Add 1</button>
      </div>
    )
  }
}

export default CounterClass;