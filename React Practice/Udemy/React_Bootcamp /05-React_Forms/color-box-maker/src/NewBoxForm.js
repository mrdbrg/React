import React, { Component } from 'react'
import uuid from 'uuid/v4'

class NewBoxForm extends Component {
  constructor(props) {
    super(props)
    this.state = { height: "", width: "", color: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const newBox = { ...this.state, id: uuid()}
    this.props.addBox(newBox)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="height">Height</label>
        <input 
          id="height"
          name="height"        
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor="width">Width</label>
        <input 
          id="width"
          name="width"        
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor="color">Background Color</label>
        <input 
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

export default NewBoxForm