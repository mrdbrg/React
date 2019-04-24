/*
  Concise implementation of React syntax

  Simplifying React class component
  Using the arrow function to  adopt the this binding of the enclosing scope.
  Destructuring function parameter
*/

class Reservation extends React.Component {
    state = {
      isGoing: true,
      numberOfGuests: 2
    };

  handleInputChange = ({ target }) => {
    // const target = event.target;
    const value = target.type === 'checkbox' ?
          target.checked : target.value;
    const name = target.name;

     /*
      Equivalent ES5 code:
        var partialState = {};
        partialState[name] = value;
        this.setState(partialState);

        setState() automatically merges a partial state into the current state, 
        we only needed to call it with the changed parts.
    */
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
