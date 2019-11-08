import React from 'react';

/*
  A component class written as a function is called a stateless functional component.
  Stateless functional components have some advantages over typical component classes.

  source: https://bit.ly/2DXkMej
*/

export const GuineaPigs = (props) => {
  const src = props.src
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={src} />
    </div>
  )
}
