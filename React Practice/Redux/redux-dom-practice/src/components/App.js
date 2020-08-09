import React from "react";
import Buttons from "./Buttons";
import Header from "./Header";
import Likes from "./Likes";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

  // calculating next state.
  // reducer function => take in the previous state and an action, and return the next state.
  // reducer needs to be a PURE function - given the same arguments it produces the same results 
  // without any side effects.
 const reducer = (state, action) => {
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

class App extends React.Component {

  state = {
    counter: 0,
    paused: false, 
    likedNumbers: {},
    comment: "",
    comments: []
  }

  // the dispatch function adds consistency to the interface for updating state.
  // when calling the dispatch function we need to pass the type that is defined
  // in reducer.
  dispatch = action => {
    // use reducers to calculate the next state
    const nextState = reducer(this.state, action)
    // setState
    this.setState(nextState)
  }

  componentDidMount() {
    setInterval(() => {
      if (!this.state.paused) {
        this.dispatch({ type: "INCREMENT" })
      }
    }, 1000)
  }

  render() {
    
    const { counter, paused, likedNumbers, comment, comments } = this.state

    return (
      <div className="App">
        <Header counter={counter}/>
        <Buttons 
          paused={paused}
          dispatch={this.dispatch}
        />
        <Likes likedNumbers={likedNumbers}/>
        <Comments comments={comments}/>
        <CommentForm 
          masterFunc={this.dispatch}
          comment={comment}
        />
      </div>
    );
  }
}

export default App;