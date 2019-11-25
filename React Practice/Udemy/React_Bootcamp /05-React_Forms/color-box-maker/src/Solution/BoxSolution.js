import React, { Component } from 'react'

class BoxSolution extends Component {
  render() {
    return (
      <div>
      <div style={{
        height: `${this.props.height}px`,
        width: `${this.props.width}px`,
        backgroundColor: this.props.color
      }} />
      {/* This syntax is only to show that there are other ways to pass the method to another component
      without binding in the constructor. Although many prefer binding it in the constructor since it makes 
      more explicit what is being done in the component. */}
      <button onClick={this.props.removeBox}>Delete Box</button>
      </div>
    )
  }
}

export default BoxSolution