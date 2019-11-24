import React, { Component } from 'react'
import './ShoppingList.css'
import ShoppingListForm from './ShoppingListForm'
import uuid from 'uuid/v4'

class ShoppingList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {name: "Tomatoes", qty: 12, id: uuid()},
        {name: "Potatoes", qty: 6,  id: uuid()}
      ]
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    let newItem = {...item, id: uuid()}
    this.setState(oldSt => ({
      items: [...oldSt.items, newItem]
    }))
  }

  renderItems() {
    return (
      <ul>
        {
          this.state.items.map(item => (
            <li key={item.id}>{item.name}:${item.qty}</li>
          ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="ShoppingList">
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem}/>
      </div>
    )
  }
}

export default ShoppingList