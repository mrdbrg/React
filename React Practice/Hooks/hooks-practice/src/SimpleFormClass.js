import React, { Component } from 'react';

class SimpleFormClass extends Component {

  state = {
    email: ""
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      email: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>You entered: {this.state.email}</h3>
        <input 
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default SimpleFormClass;