import React from 'react'
import { connect } from 'react-redux';

const CommentForm = ({ comment, updateComment, addComment }) => {

  const handleSubmit = e => {
    e.preventDefault()
    addComment()
  }

  return (
    <>
      <h3>Leave a comment</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={comment} onChange={(e) => updateComment(e.target.value)} />
        <button>submit</button>
      </form>
    </>
  )
}

const mapStateToProps = state => {
  return {
    comment: state.comment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: () => dispatch({ type: "ADD_COMMENT" }),
    updateComment: text => dispatch({ type: "UPDATE_COMMENT", payload: text })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
