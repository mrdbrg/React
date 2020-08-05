import React, { useState, useEffect } from 'react';

const Clicker = () => {

  const [ count, setCount ] = useState(0)

  useEffect(() => {
    document.querySelector("#after-click").innerText = count
    document.title = `Your count is ${count}`
  })

  const handleClick = () => {
    setCount(count + 1)
  }

  return(
    <div>
      <h3>Change on click: {count}</h3>
      <h3>Change after click (useEffect): <span id="after-click">0</span></h3>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Clicker;