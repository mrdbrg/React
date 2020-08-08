import React from 'react'

const CommentForm = ({ comment, masterFunc }) => {

  const handleSubmit = e => {
    e.preventDefault()
    masterFunc({ type: "ADD_COMMENT" })
  }

  return (
    <>
      <h3>Leave a comment</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={comment} onChange={(e) => masterFunc({ type: "UPDATE_COMMENT", payload: e.target.value })} />
        <button>submit</button>
      </form>
    </>
  )
}

export default CommentForm