import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import './TodoList.css'
import uuid from 'uuid/v4'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos:  [
        {todo: "Finish react course", id: uuid()},
        {todo: "Make money", id: uuid()}
      ]
    }
    this.addTodo = this.addTodo.bind(this);
    this.remove = this.remove.bind(this);
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })  
  }

  addTodo(newTodo) {
    this.setState({
      todos: [ ...this.state.todos, newTodo ]
    })
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <li>
        <Todo 
          task={todo.todo} 
          removeTask={this.remove}
          id={todo.id}
          />
      </li>
    ))
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <ul>
          {todos}
        </ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    )
  }
}

export default TodoList;