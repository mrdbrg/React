// Destructuring assignment in the function parameter
function BoilingVerdict({ celsius }) {

  if(celsius >= 100) {
    // 212 Fahrenheit
    return <p>The water would boil.</p>;
  } else if (celsius <= 0) {
    // 32 Fahrenheit
    return <p>The water would freeze.</p>;
  } else {
   return <p>The water would not boil.</p>;
  }
}

class Calculator extends React.Component {
    // Class component simplification
    state = {temperature: '0'};
  }

  // Arrow function: adopting the this binding of the enclosing scope.
  handleChange = (event) => {
    this.setState({temperature: event.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />

        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
