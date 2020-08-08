import React from 'react'

const CommentForm = ({ comment, addComment, updateComment }) => {
  return (
    <>
      <h3>Leave a comment</h3>
      <form onSubmit={addComment}>
        <input type="text" value={comment} onChange={updateComment} />
        <button>submit</button>
      </form>
    </>
  )
}

export default CommentForm