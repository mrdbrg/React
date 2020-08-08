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

  // Understanding redux patterns of message passing and pure functions 
  // to abstract how state is being set/updated. 
  // masterFunc will be the only function setting/updating state.
  masterFunc = (action) => {

    switch (action.type) {
      case "INCREMENT":
        this.incrementCounter()
        break;
      case "DECREMENT":
        this.decrementCounter()
        break;
      case "TOGGLE_PAUSE":
        this.togglePaused()
        break;
      case "LIKE_NUMBER":
        this.likeNumber()
        break;
      case "UPDATE_COMMENT":
        this.updateComment(action.payload)
        break;
      case "ADD_COMMENT":
        this.addComment(action.payload)
        break;

      default:
        break;
    }
  }  

  componentDidMount() {
    setInterval(() => {
      if (!this.state.paused) {
        this.incrementCounter()
      }
    }, 1000)
  }

  togglePaused = () => this.setState(state => ({ paused: !state.paused }))
  decrementCounter = () => this.setState(state => ({ counter: state.counter - 1 }))
  incrementCounter = () => this.setState(state => ({ counter: state.counter + 1 }))
  updateComment = comment => this.setState({ comment })

  likeNumber = () => {
    this.setState(state => {
      const count = (state.likedNumbers[state.counter] || 0 ) + 1

      return {
        likedNumbers: {
          ...state.likedNumbers,
          [state.counter]: count
        }
      }
    })
  }

  addComment = e => {
    this.setState(state => ({
      comments: [...state.comments, state.comment],
      comment: ""
    }))
  }

  render() {
    
    const { counter, paused, likedNumbers, comment, comments } = this.state

    return (
      <div className="App">
        <Header counter={counter}/>
        <Buttons 
          paused={paused}
          masterFunc={this.masterFunc}
        />
        <Likes likedNumbers={likedNumbers}/>
        <Comments comments={comments}/>
        <CommentForm 
          masterFunc={this.masterFunc}
          comment={comment}
        />
      </div>
    );
  }
}

export default App;