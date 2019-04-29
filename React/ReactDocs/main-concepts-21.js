function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color + props.class}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder class={props.class} color={props.color}>
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog(props) {
  return (
    <Dialog
      class={" header"}
      color={"blue"}
      title={"Welcome"}
      message={"Thank you for visitin our spacecraft!"}
      />
  );
}

function Introduction(props) {
  return (
    <Dialog
      class={" main-content"}
      color={"red"}
      title={"It's time to get to know the space station."}
      message={"For the next 100 years you'll experience the first time capsule ever built by mankind. Here the goal is to preserve human race for future generations to come. We hope you have a great life."}
      />
  );
}

ReactDOM.render(
  <div>
    <WelcomeDialog />
    <Introduction />
  </div>,
  document.getElementById('root')
);
