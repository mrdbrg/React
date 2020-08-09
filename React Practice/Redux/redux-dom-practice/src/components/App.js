import React from "react";
import { connect } from "react-redux";
import Buttons from "./Buttons";
import Header from "./Header";
import Likes from "./Likes";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

class App extends React.Component {

  componentDidMount() {
    setInterval(() => {
      if (!this.props.paused) {
        this.props.increment({ type: "INCREMENT" })
      }
    }, 1000)
  }

  render() {
    // console.log(this.props)
    const { counter, paused, likedNumbers, comment, comments } = this.props

    return (
      <div className="App">
        <Header counter={counter}/>
        <Buttons 
          paused={paused}
          increment={this.props.increment}
          decrement={this.props.decrement}
          togglePause={this.props.togglePause}
          likeNumber={this.props.likeNumber}
        />
        <Likes likedNumbers={likedNumbers}/>
        <Comments comments={comments}/>
        <CommentForm 
          comment={comment}
          updateComment={this.props.updateComment}
          addComment={this.props.addComment}
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

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    togglePause: () => dispatch({ type: "TOGGLE_PAUSE" }),
    likeNumber: () => dispatch({ type: "LIKE_NUMBER" }),
    addComment: () => dispatch({ type: "ADD_COMMENT" }),
    updateComment: text => dispatch({ type: "UPDATE_COMMENT", payload: text })
  }
}

// connect is a Higher Order Funciton that returns onother function 
// and the function it returns is a Higher Order Component. 
// This syntax allows us to connect this component to the redux store.
export default connect(mapStateToProps, mapDispatchToProps)(App);