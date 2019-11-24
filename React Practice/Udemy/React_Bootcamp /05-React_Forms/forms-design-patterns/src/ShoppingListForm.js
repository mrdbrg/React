import React, { Component } from 'react'

class ShoppingListForm extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", qty: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addItem(this.state)
    this.setState({ items: [{name: "", qty: ""}] })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'>Item Name:</label>
        <input 
          type='text'
          id="name"   // id
          name='name' 
          value={this.state.name}   // value
          onChange={this.handleChange}
          />
        <label htmlFor='qty'>Item Quantity:</label>
        <input 
          type='text'
          id="qty"
          name='qty' 
          value={this.state.qty}
          onChange={this.handleChange}
          />
          <button>Add Item</button>
      </form>
    )
  }
}

export default ShoppingListForm