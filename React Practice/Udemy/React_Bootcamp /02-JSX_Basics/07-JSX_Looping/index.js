class App extends React.Component {
  render() {
    return (
      <Friend 
        name="Rod"
        hobbies={["Piano", "Rowing", "Harmonica", "Singing"]}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));