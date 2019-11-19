import React, { Component } from "react"
import { randomStuff } from "./helpers"
import "./Keyboard.css"

class Keyboard extends Component {
  static defaultProps = {
    colors: ['#5a2852', '#8de503', '#fa2428', '#888a7c', '#42efa6', '#78da0e', '#c88dd2', '#e91111', '#289241']
  }
  constructor(props) {
    super(props)
    this.state = {
      color: null
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(e) {
    let newColor;
    if (e.keyCode === 48) {
      newColor = randomStuff(this.props.colors)
      this.setState({ color: newColor})
    }
  }

  render() {
    return (
      <div className="Keyboard" style={{backgroundColor: this.state.color}}>
        <h2>Press "0" to change this div's background color:</h2>
        <textarea onKeyDown={this.handleKeyUp} />
      </div>
    )
  }
}

export default Keyboard