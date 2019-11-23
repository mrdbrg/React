import React, { Component } from 'react'

class MultipleInputsLongWay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this);  
    this.handleEmailChange = this.handleEmailChange.bind(this);  
    this.handlePasswordChange = this.handlePasswordChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  }

  handleChange(event) {
    this.setState({ username: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
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
        <h1>Multiple Inputs Long Way</h1>
        <form onSubmit={this.handleSubmit}>
          <p>What is your name?</p>
          <input 
            type="text" 
            value={this.state.username} 
            onChange={this.handleChange} />
          <p>Email</p>
          <input 
            type="text" 
            value={this.state.email} 
            placeholder="example@email.com"
            onChange={this.handleEmailChange} />
          <p>Password</p>
          <input 
            type="text"
            value={this.state.password}
            placeholder="Pa$$word"
            onChange={this.handlePasswordChange}/>
          <button> Add</button>
        </form>
      </div>
    )
  }
}

export default MultipleInputsLongWay