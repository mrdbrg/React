import React, { Component } from 'react'
import './NewTodoForm.css'
import uuid from 'uuid/v4'

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { todo: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      [event.target.name]:[event.target.value]
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const newTodo = { ...this.state, id: uuid() }
    this.props.addTodo(newTodo)
    this.setState({
      todo: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="NewTodoForm">
        <label htmlFor="todo">To Do</label>
        <input 
          name="todo"
          id="todo"
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

export default NewTodoForm;