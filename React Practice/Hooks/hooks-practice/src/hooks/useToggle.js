import { useState } from 'react';

const useToggle = (initialVal = false) => {
  // call useState and create the reference of the piece of state and the function to set the piece of state
  const [ myState, setMyState ] = useState(initialVal)

  const toggle = () => {
    setMyState(!myState)
  }
  // return piece of state and a function to toggle it
  return [ myState, toggle ]
}

export default useToggle;