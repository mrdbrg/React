import React from "react";
import { connect } from "react-redux";
import Buttons from "./Buttons";
import Header from "./Header";
import Likes from "./Likes";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

class App extends React.Component {

  dispatch = action => {
    // use reducers to calculate the next state
    // const nextState = reducer(this.state, action)
    // // setState
    // this.setState(nextState)
  }

  componentDidMount() {
    setInterval(() => {
      if (!this.props.paused) {
        this.dispatch({ type: "INCREMENT" })
      }
    }, 1000)
  }

  render() {
    console.log(this.props)
    const { counter, paused, likedNumbers, comment, comments } = this.props

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

// this function takes in redux state as argument 
// return an object that has the value we want for props.
const mapStateToProps = state => {
  return {
    counter: state.counter,
    paused: state.paused, 
    likedNumbers: state.likedNumbers,
    comment: state.comment,
    comments: state.comments
  }
}

// connect is a Higher Order Funciton that returns onother function 
// and the function it returns is a Higher Order Component. 
// This syntax allows us to connect this component to the redux store.
export default connect(mapStateToProps)(App);