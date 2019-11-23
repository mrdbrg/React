import React, { Component } from 'react'

class MultipleInputsMadeEasy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  }
  // Making use of Computed Property Names from ES2015
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    // Display states
    alert(
    `
      Your name is ${this.state.username}. 
      Your email is ${this.state.email}.
      Your password is ${this.state.password}
    ` )

    this.setState({
      username: "",
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div>
        <h1>Multiple Inputs Made Easy</h1>
        <form onSubmit={this.handleSubmit}>
          <p>What is your name?</p>
          <input 
            type="text"
            name="username" 
            value={this.state.username} 
            onChange={this.handleChange} />
          <p>Email</p>
          <input 
            type="text"
            name="email" 
            value={this.state.email} 
            placeholder="example@email.com"
            onChange={this.handleChange} />
          <p>Password</p>
          <input 
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}/>
          <button> Add</button>
        </form>
      </div>
    )
  }
}

export default MultipleInputsMadeEasy