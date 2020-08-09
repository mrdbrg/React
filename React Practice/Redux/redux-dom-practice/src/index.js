import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';

// takes in a state and action and returns the next state.
const reducer = () => {

}

// The key concepts of working with redux is the single source of truth - to manage state -.
// In redux that state is going to live in 'store'.
// In order to create store for redux we need to pass a callback function, or the reducer function we will use.
const store = createStore(reducer)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

