import React, { Component } from 'react'

class Box extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleDelete() {
    this.props.removeBox(this.props.id)
  }

  render() {
    return (
      <div>
        <div 
          style={{
            backgroundColor: this.props.color, 
            height: `${this.props.height}px`, 
            width: `${this.props.width}px`}} 
        />
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default Box