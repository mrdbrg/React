import React, { Component } from 'react'
import "./HoverBinding.css"
import { randomStuff } from "./helpers"

class HoverBinding extends Component {
  constructor(props) {
    super(props)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
  }
  static defaultProps = {
    messages: ["Oi", "Hi", "Hello", "Ciao", "Salve!", "Buenas!"]
  }
  handleMouseEnter() {
    let { messages } = this.props;
    console.log(randomStuff(messages))
  }

  render() {
    return (
      <div 
        className="HoverBinding" 
        style={{backgroundColor: "red"}}
        onMouseEnter={this.handleMouseEnter}>
        {/* inline binding
        onMouseEnter={this.handleMouseEnter.bind(this)}>
        onMouseEnter={() => this.handleMouseEnter()}> */}
        <p>Hover me and check the console.</p>
        </div>
    )
  }
}

export default HoverBinding