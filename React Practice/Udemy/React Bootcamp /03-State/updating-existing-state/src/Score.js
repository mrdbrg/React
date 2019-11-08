import React, { Component } from 'react'
import "./Score.css";

class Score extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0
    }

    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }

  // ********************************************
  // ******    ABSTRATING STATE UPDATES    ******
  // ********************************************

  // singleKill() {
  //   // Not a good idea to update state like this
  //   // if it relies on existing state values
  //   this.setState({ score: this.state.score + 1 })
  // }

  // CALLBACK Function
  incrementScore(currentState) {
    return { score: currentState.score + 1 };
  }

  // tripleKill() {
  //   this.setState(currentState => {
  //     return { score: currentState.score + 1 }
  //   });
  //   this.setState(currentState => {
  //     return { score: currentState.score + 1 }
  //   });
  //   this.setState(currentState => {
  //     return { score: currentState.score + 1 }
  //   });
  // }


  // Functional State
  singleKill() {
    this.setState(this.incrementScore)
  }

  tripleKill() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }

  render() {
    return (
      <div className="Score">
        <h1>The score is: { this.state.score }</h1>
        <div className="Score-buttons">
          <button onClick={this.singleKill}>Single Kill</button>
          <button onClick={this.tripleKill}>Triple Kill</button>
        </div>
      </div>
    )
  }
}

export default Score;