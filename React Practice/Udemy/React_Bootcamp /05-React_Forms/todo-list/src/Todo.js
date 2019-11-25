import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.removeTask(this.props.id)
  }

  render() {
    return (
      <div className="Todo">
        <div>{this.props.task}</div>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default Todo;