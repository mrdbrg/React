class Machine extends React.Component {
  render() {
    const {s1, s2, s3} = this.props;
    const winner = (s1 === s2) && (s1 === s3);
    const styleFruits = {
      fontSize: "50px",
    }

    return (
      <div className="Machine">
        <h3 style={styleFruits}> {s1} {s2} {s3}  </h3>
        <h2 className={winner ? "Machine-win" : "Machine-lose"}>{winner ? "You win!" : "You lose!"}</h2>
      </div>
    );
  }
}