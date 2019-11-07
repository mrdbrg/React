class Machine extends React.Component {
  render() {
    // let array = [this.props.s1, this.props.s2, this.props.s3]
    // let go = array[Math.floor(Math.random() * array.length)]

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

// let s1 = getIcon();
// let s2 = getIcon();
// let s3 = getIcon();
// let result;

// if ((s1 === s2) && (s1 === s3)) {
//   result = 
//   <h2>You win!</h2>
// } else {
//   <h2>Try again.</h2>
// }