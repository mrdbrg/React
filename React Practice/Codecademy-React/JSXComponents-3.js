//Use a Conditional in a Render Function

import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    let tonightPlan;
    if(fiftyFifty) {
			tonightPlan = 'out'
    } else {
      tonightPlan = 'to bed'
    }

    return <h1>Tonight I'm going {tonightPlan} WOOO</h1>
  }
}

ReactDOM.render(
	<TonightsPlan />,
  document.getElementById('app')
);
