import React, { Component } from 'react'
import "./Hover.css"
import { randomStuff } from "./helpers"

class Hover extends Component {
  handleMouseEnter() {
    let greetings = ["Oi", "Hi", "Hello", "Ciao", "Salve!", "Buenas!"]

    console.log(randomStuff(greetings))
  }

  render() {
    return (
      <div 
        className="Hover" 
        style={{backgroundColor: "yellow"}}
        onMouseEnter={this.handleMouseEnter}>
        <p>Hover me and check the console!</p>
        </div>
    )
  }
}

export default Hover