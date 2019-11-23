import React, { Component } from 'react'
import './App.css';
import Form from './Form';
import MultipleInputsLongWay from './MultipleInputsLongWay';
import MultipleInputsMadeEasy from './MultipleInputsMadeEasy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <MultipleInputsLongWay />
        <MultipleInputsMadeEasy />
      </div>
    )
  }
}

export default App;
