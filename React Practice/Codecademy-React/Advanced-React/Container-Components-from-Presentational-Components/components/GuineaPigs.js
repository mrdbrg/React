import React from 'react';

/*
  Programming Pattern:
  In this programming pattern, the container component does the work of
  figuring out what to display. The presentational component does the work
  of actually displaying it. If a component does a significant amount of
  work in both areas, then that’s a sign that you should use this pattern!

  source: https://bit.ly/309NbHJ
*/

export class GuineaPigs extends React.Component {
  render() {
    const src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}
