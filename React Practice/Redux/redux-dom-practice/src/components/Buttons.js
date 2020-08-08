import React from 'react'

const Buttons = ({ paused, masterFunc }) => {
  return (
    <>
      <button onClick={() => masterFunc({ type: "DECREMENT" })}>
        <span role="img" aria-label="minus">➖</span>
      </button>
      <button onClick={() => masterFunc({ type: "INCREMENT" })}>
        <span role="img" aria-label="plus">➕</span>
      </button>
      <button onClick={() => masterFunc({ type: "LIKE_NUMBER" })}>
        <span role="img" aria-label="heart">❤️</span>
      </button>
      <button onClick={() => masterFunc({ type: "TOGGLE_PAUSE" })}>
        <span role="img" aria-label={paused ? "play" : "pause"}>
          {paused ? "▶️" : "⏸"}
        </span>
      </button>
    </>
  )
}

export default Buttons;