import React, { Component } from 'react'
import './App.css';
import Form from './Form';
import MultipleInputsLongWay from './MultipleInputsLongWay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <MultipleInputsLongWay />
      </div>
    )
  }
}

export default App;
