import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';

const initialState = {
  counter: 0,
  paused: false, 
  likedNumbers: {},
  comment: "",
  comments: []
}

// takes in a state and action and returns the next state.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      }
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      }
    case "TOGGLE_PAUSE":
      return {
        ...state,
        paused: !state.paused
      }
    case "LIKE_NUMBER":
        const count = (state.likedNumbers[state.counter] || 0 ) + 1
  
        return {
          ...state,
          likedNumbers: {
            ...state.likedNumbers,
            [state.counter]: count
          }
        }
    case "UPDATE_COMMENT":
      return { 
        ...state,
        comment: action.payload 
      }
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, state.comment],
        comment: ""
      }
    default:
      return state
  }
}

// The key concepts of working with redux is the single source of truth - to manage state -.
// In redux that state is going to live in 'store'.
// In order to create store for redux we need to pass a callback function, or the reducer function we will use.
const store = createStore(reducer)
console.log(store)
console.log(store.getState())
store.dispatch({ type: "INCREMENT" })
console.log(store.getState())


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

