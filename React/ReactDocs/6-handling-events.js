class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  // This binding is necessary to make 'this' work in the callback
  // If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
    // this.handleClick = this.handleClick.bind(this);
  }

  // We don't need .bind(this) when using arrow functions.
  // :ES6’s arrow function uses Lexical Scoping, which lets the method access the this of where it’s triggered.
  handleClick = (event) => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button className={'styleButton'} onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
