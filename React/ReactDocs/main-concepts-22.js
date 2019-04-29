function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>

    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="">

      </h1>
      <p className="">

      </p>

    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">

        <input />

        <button onClick={this.handleSignUp}>

        </button>

      </Dialog>
    );
  }



}

ReactDOM.render(
  <SignUpDialog />,
  document.getElementById('root')
);
