import React from 'react'
import { useSelector } from 'react-redux';
// import { connect } from 'react-redux';

// const Likes = ({ likedNumbers }) => {
const Likes = () => {

  const likedNumbers = useSelector(state => state.likedNumbers)

  return (
    <>
      <h2>Likes:</h2>
      {Object.keys(likedNumbers).map(key => <p key={key}>{key}: {likedNumbers[key]} likes</p>)}
      <hr />
    </>
  )
}

// const mapStateToProps = state => {
//   return {
//     likedNumbers: state.likedNumbers
//   }
// }

// export default connect(mapStateToProps)(Likes);
export default Likes;