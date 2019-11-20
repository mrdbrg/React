class Machine extends React.Component {
  render() {
    const {s1, s2, s3} = this.props;
    const winner = (s1 === s2) && (s1 === s3);

    return (
      <div>
        <h3> {s1} {s2} {s3}  </h3>
        <h2>{winner ? "You win!" : "You lose!"}</h2>
      </div>
    );
  }
}