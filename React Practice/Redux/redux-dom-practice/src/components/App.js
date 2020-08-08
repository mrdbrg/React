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
        this.setState(state => ({ counter: state.counter + 1 }))
        break;
      case "DECREMENT":
        this.setState(state => ({ counter: state.counter - 1 }))
        break;
      case "TOGGLE_PAUSE":
        this.setState(state => ({ paused: !state.paused }))
        break;
      case "LIKE_NUMBER":
        this.setState(state => {
          const count = (state.likedNumbers[state.counter] || 0 ) + 1
    
          return {
            likedNumbers: {
              ...state.likedNumbers,
              [state.counter]: count
            }
          }
        })
        break;
      case "UPDATE_COMMENT":
        this.setState({ comment: action.payload })
        break;
      case "ADD_COMMENT":
        this.setState(state => ({
          comments: [...state.comments, state.comment],
          comment: ""
        }))
        break;

      default:
        break;
    }
  }  

  componentDidMount() {
    setInterval(() => {
      if (!this.state.paused) {
        this.masterFunc({ type: "INCREMENT" })
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