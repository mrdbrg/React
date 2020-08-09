import React from 'react'

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

export default CommentForm