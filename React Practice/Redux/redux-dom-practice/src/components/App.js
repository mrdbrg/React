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
  updateComment = e => this.setState({ comment: e.target.value })

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
    e.preventDefault()
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
          decrementCounter={this.decrementCounter}
          incrementCounter={this.incrementCounter}
          likeNumber={this.likeNumber}
          togglePaused={this.togglePaused}
        />
        <Likes likedNumbers={likedNumbers}/>
        <Comments comments={comments}/>
        <CommentForm 
          comment={comment}
          addComment={this.addComment}
          updateComment={this.updateComment}
        />
      </div>
    );
  }
}

export default App;