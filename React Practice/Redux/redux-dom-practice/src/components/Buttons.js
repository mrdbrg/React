import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';

// const Buttons = ({ increment, decrement, likeNumber, togglePause, paused }) => {
const Buttons = () => {

  const paused = useSelector(state => state.paused)
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch({ type : "DECREMENT" })}>
        <span role="img" aria-label="minus">➖</span>
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        <span role="img" aria-label="plus">➕</span>
      </button>
      <button onClick={() => dispatch({ type: "LIKE_NUMBER" })}>
        <span role="img" aria-label="heart">❤️</span>
      </button>
      <button onClick={() => dispatch({ type: "TOGGLE_PAUSE" })}>
        <span role="img" aria-label={paused ? "play" : "pause"}>
          {paused ? "▶️" : "⏸"}
        </span>
      </button>
    </>
  )
}

// const mapStateToProps = state => {
//   return {
//     paused: state.paused
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type : "DECREMENT" }),
//     likeNumber: () => dispatch({ type: "LIKE_NUMBER" }),
//     togglePause: () => dispatch({ type: "TOGGLE_PAUSE" })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
export default Buttons;