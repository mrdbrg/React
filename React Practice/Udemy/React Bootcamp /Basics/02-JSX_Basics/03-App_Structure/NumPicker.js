function genNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function youWrongGif() {
  var gifArr = [
    "https://media.giphy.com/media/GmlDMFfcNy7tu/giphy.gif",
    "https://media.giphy.com/media/3FevOmY1iz5uweISXE/giphy.gif",
    "https://media1.tenor.com/images/b8a9addf789bc7685e41d98a1ae9d813/tenor.gif?itemid=8352668",
    "https://media1.tenor.com/images/af35c2f70c581fd77914432782f7842d/tenor.gif?itemid=10754940"
  ];

  return gifArr[Math.floor(Math.random() * gifArr.length)];
}

class NumPicker extends React.Component {
  render() {
    var number = genNumber();
    var wrong = youWrongGif();
    // var message;
    // if (number === 7 || number === 10) {
    //   message = 
    //   <div>
    //     <h2>Congratulations!</h2>
    //     <img src="https://media0.giphy.com/media/li9owDEz2DfA4/giphy.gif" />
    //   </div>
    // } else {
    //   message = 
    //   <div>
    //     <h2>Sorry, not this time.</h2>
    //     <img src={wrong} />
    //   </div>
    // }

    return (
      <div>
        <h1>This is your number {number} </h1>
        {/* {message} */}
        <h2>
          {
            (number == 7 || number === 9) ? 
            <div>
              <h3>Congratulations!</h3>
              <img src="https://media0.giphy.com/media/li9owDEz2DfA4/giphy.gif" />
            </div> : 
            <div>
              <h3>Sorry, not this time.</h3>
              <img src={wrong} />
            </div>
          }
        </h2>
      </div>
    )
  }
}