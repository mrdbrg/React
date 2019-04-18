//Use an Event Listener in a Component

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('That feels gooooood!! Thanks!');
  }

  render() {
    return <button onClick={this.scream}>Click me, PLEASE!</button>;
  }
}

ReactDOM.render(
	<Button />,
  document.getElementById('app')
);
