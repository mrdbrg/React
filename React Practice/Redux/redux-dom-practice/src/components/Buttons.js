import React from 'react'

const Buttons = ({ paused, dispatch }) => {
  return (
    <>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
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

export default Buttons;