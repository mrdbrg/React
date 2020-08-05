import React from 'react';
import useToggle from './hooks/useToggle'

const Toggle = () => {

  const [ isHappy, toggleIsHappy ] = useToggle(true)
  const [ isInLove, toggleIsInLove ] = useToggle(true)

  return(
    <div>
      <img 
        onClick={toggleIsHappy} 
        style={{height: "100px", width: "100px", margin: "20px 40px"}} 
        src={isHappy ? require('./emojis/happy.png') : require('./emojis/sad.png')} 
        alt={isHappy ? "happy emoji" : "sad emoji" }
        />

      <img 
        onClick={toggleIsInLove}
        style={{height: "100px", width: "100px", margin: "20px auto"}} 
        src={isInLove ? require('./emojis/smile.png') : require('./emojis/inlove.png')}
        alt={isInLove ? "smile emoji" : "inlove emoji" } />
    </div>
  )
}

export default Toggle;