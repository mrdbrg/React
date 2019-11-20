class Hello extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        <h2>Hi {this.props.to} from {this.props.from}</h2>
      </div>
    );
  }
}