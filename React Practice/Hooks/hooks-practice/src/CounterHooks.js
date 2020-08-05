import React, { useState } from 'react';

const CounterHooks = () => {

  // array destructuring
  // the first element of the array is the piece of state we set to 0
  // the second element is the function that will update that piece of state
  const [ count, setCount ] = useState(0)

  const handleClick = () => {
    // count is a reference to whatever the current value of that state is
    // incremenet count by 1
    setCount(count + 1)
  }

  return (
    <div>
      <h2>Function Component - Hooks</h2>
      <h2>Counter: {count}</h2>
      <button onClick={handleClick}>Add 1</button>
  </div>
  )
}

export default CounterHooks;