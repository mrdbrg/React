import React, { Component } from 'react'
import NumberItem from './NumberItem'
import "./NumberList.css"

class NumberList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allItems: ["Lemon","Orange","Coconut","Avocado","Chocolate"]
    }
    this.remove = this.remove.bind(this);
  }

  remove(item) {
    this.setState(state => ({
      allItems: state.allItems.filter(i => i !== item)
    }))
  }

  render() {
    let items = this.state.allItems.map((item) => ( <NumberItem value={item} remove={this.remove}/> ))
    return (
      <div className="NumberList">
        <h1>List</h1>
        <ul>{items}</ul>
      </div>
    )
  }
}

export default NumberList

// ["Lemon","Orange","Coconut","Avocado","Chocolate"]