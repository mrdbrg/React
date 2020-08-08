import React from 'react'

const Comments = ({ comments }) => {

  return (
    <>
      <h2>Comments:</h2>
      {comments.map(comment => <p key={comment}>{comment}</p>)}
      <hr />
    </>
  )
}

export default Comments