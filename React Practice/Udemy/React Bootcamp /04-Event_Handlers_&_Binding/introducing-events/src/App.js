import React, { Component } from 'react'
import Hover from "./Hover"
import Keyboard from "./Keyboard"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hover />
        <Keyboard />
      </div>
    )
  }
}

export default App