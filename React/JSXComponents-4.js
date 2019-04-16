//Use this in a Component

import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
	get name() {
		return 'Marlon Braga';
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
    //We don't need parentheses because .food is a getter method. You can tell this from the get in the above class declaration body.

    //`this` is refrring to the `name` method defined on our `MyName` class.

    //Without `this` we would run into an error where `'name' is not defined` - this is because our `render` method is looking inside the scope of it's own definition for the `name` method.
  }
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));
