import React from 'react'

const Likes = ({ likedNumbers }) => {
  return (
    <>
      <h2>Likes:</h2>
      {Object.keys(likedNumbers).map(key => <p key={key}>{key}: {likedNumbers[key]} likes</p>)}
      <hr />
    </>
  )
}

export default Likes;