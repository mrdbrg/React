import React, { Component } from 'react'
// import "./NumberList.css"

class NumberList extends Component {
  constructor(props) {
    super(props)
    this.state = { num: [1,2,3,4,5] }
  }

  
  render() {
    return (
      <h1>Number List</h1>
    )
  }
}

export default NumberList