import React from 'react'

const Buttons = ({ paused, decrementCounter, incrementCounter, likeNumber, togglePaused }) => {
  console.log()
  return (
    <>
      <button onClick={decrementCounter}>
        <span role="img" aria-label="minus">➖</span>
      </button>
      <button onClick={incrementCounter}>
        <span role="img" aria-label="plus">➕</span>
      </button>
      <button onClick={likeNumber}>
        <span role="img" aria-label="heart">❤️</span>
      </button>
      <button onClick={togglePaused}>
        <span role="img" aria-label={paused ? "play" : "pause"}>
          {paused ? "▶️" : "⏸"}
        </span>
      </button>
    </>
  )
}

export default Buttons;