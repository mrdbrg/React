import React from 'react'
import { connect } from 'react-redux';

const Likes = ({ likedNumbers }) => {
  return (
    <>
      <h2>Likes:</h2>
      {Object.keys(likedNumbers).map(key => <p key={key}>{key}: {likedNumbers[key]} likes</p>)}
      <hr />
    </>
  )
}

const mapStateToProps = state => {
  return {
    likedNumbers: state.likedNumbers
  }
}

export default connect(mapStateToProps)(Likes);