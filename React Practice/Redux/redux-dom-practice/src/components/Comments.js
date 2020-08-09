import React from 'react'
import { useSelector } from 'react-redux';
// import { connect } from 'react-redux';

// const Comments = ({ comments }) => {
const Comments = () => {

  const comments = useSelector(state => state.comments)

  return (
    <>
      <h2>Comments:</h2>
      {comments.map(comment => <p key={comment}>{comment}</p>)}
      <hr />
    </>
  )
}

// const mapStateToProps = state => {
//   return {
//     comments: state.comments
//   }
// }

// export default connect(mapStateToProps)(Comments)
export default Comments;