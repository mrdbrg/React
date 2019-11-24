import React, { Component } from 'react'
import './ShoppingList.css'
import ShoppingListForm from './ShoppingListForm'

class ShoppingList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {name: "Tomato", qty: 12},
        {name: "Potatoes", qty: 6},
        {name: "Soy Milk", qty: 1}
      ]
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState(oldState => ({
      items: [...oldState.items, item]
    }));
  }

  renderList() {
   return (
      <ul>
      {
        this.state.items.map(item => (
          <li>{item.name}:{item.qty}</li>
        ))
      }
    </ul>
   )
  }

  render() {
    return (
      <div className="ShoppingList">
        <h1>Shopping List</h1>
        {this.renderList()}
        <ShoppingListForm addItem={this.addItem}/>
      </div>
    )
  }
}

export default ShoppingList