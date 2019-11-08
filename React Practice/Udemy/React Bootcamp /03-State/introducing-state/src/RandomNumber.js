import React, { Component } from "react";

class RandomNumber extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1,
      isWinner: false
    }
    this.genRandomNum = this.genRandomNum.bind(this)
  }

  genRandomNum(e) {
    let randNum = Math.floor(Math.random() * 10) + 1
    if (randNum === 7) {
      this.setState({ isWinner: true })
    }
    this.setState({ 
      number: randNum
    })
  }

  render() {

    // let luckyNumber = this.props.luckyNum;

    return (
      <div>
        <h1>The number is: {this.state.number}</h1>
        { this.state.isWinner ? <h2>YOU WIN!!!</h2> : <button onClick={this.genRandomNum}>Generate a random number</button>}
      </div>
    )
  }
}

export default RandomNumber;