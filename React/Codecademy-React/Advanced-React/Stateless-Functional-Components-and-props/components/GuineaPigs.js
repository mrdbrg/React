import React from 'react';

export const GuineaPigs = (props) => {
  const src = props.src
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={src} />
    </div>
  )
}
