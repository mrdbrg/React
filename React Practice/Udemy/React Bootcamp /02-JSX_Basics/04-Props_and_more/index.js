class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Michael" from="Tod" />
        <Hello to="John" from="Dan" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));