import React, { Component } from 'react'
import "./NumberItem.css"

class NumberItem extends Component {
  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.remove(this.props.value)
  }

  render() {
    return (
      <li className="NumberItem">
        {this.props.value}
        <button onClick={this.handleRemove}>Delete</button>
      </li>
    )
  }
}

export default NumberItem