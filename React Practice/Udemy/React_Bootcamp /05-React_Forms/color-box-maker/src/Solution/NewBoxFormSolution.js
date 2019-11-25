import React, { Component } from 'react'
import uuid from 'uuid/v4'

class NewBoxFormSolution extends Component {
  constructor(props) {
    super(props)
    this.state = { height: "", width: "", color: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    const newBox = { ...this.state, id: uuid() }
    this.props.createBox(newBox)
    this.setState({
      height: "", width: "", color: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="height">Height</label>
        <input
          type="text" 
          id="height"
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
         />
        <label htmlFor="width">Width</label>
        <input
          type="text" 
          id="width"
          name="width"
          value={this.state.width}
          onChange={this.handleChange}
         />
        <label htmlFor="color">Color</label>
        <input
          type="text" 
          id="color"
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
         />
         <button>Add New Box</button>
      </form>      
    )
  }
}

export default NewBoxFormSolution