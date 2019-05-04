function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// const element = <Welcome name='Maverick' />;
function App() {
  return (
    <div>
      <Welcome name='Sara' />
      <Welcome name='Cahal' />
      <Welcome name='Edite' />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//     console.log(this.props)
//   }
// }
