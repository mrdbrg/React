import React from 'react'

const Buttons = ({ paused, increment, decrement, togglePause, likeNumber }) => {
  return (
    <>
      <button onClick={decrement}>
        <span role="img" aria-label="minus">➖</span>
      </button>
      <button onClick={increment}>
        <span role="img" aria-label="plus">➕</span>
      </button>
      <button onClick={likeNumber}>
        <span role="img" aria-label="heart">❤️</span>
      </button>
      <button onClick={togglePause}>
        <span role="img" aria-label={paused ? "play" : "pause"}>
          {paused ? "▶️" : "⏸"}
        </span>
      </button>
    </>
  )
}

export default Buttons;