import React from "react";
import Buttons from "./Buttons";
import Header from "./Header";
import Likes from "./Likes";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

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