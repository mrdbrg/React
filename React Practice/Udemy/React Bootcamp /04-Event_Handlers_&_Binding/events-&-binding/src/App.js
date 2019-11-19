import React, { Component } from 'react'
import Hover from "./Hover"
import HoverBinding from "./HoverBinding"
import Keyboard from "./Keyboard"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hover />
        <HoverBinding />
        <Keyboard />
      </div>
    )
  }
}

export default App