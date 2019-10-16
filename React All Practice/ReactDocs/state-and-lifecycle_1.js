/*
POINT#1:
"React does so by "mounting" (adding nodes to the DOM), "unmounting" (removing them from the DOM), and "updating" (making changes to nodes already in the DOM)."

 Source: https://bit.ly/2GnkRZh
*/

class Clock extends React.Component {
// Step 2) constructor of the Clock is called and this.state is initialized
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // LIFECYCLE METHODS ( mounting and unmounting )
    // Step 4) componentDidMount() lifecycle method is called. A timer is set up to call the component's tick() method once a second.
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  // *If Clock component is removed from the DOM, componentWillUnmount() lifecyle method is called and the timer will stop.*
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Step 5) Every second the browser calls the tick() methods. Clock component schedules a UI update by calling setState() with an object containing the current time. Render() method is called again to know what should go on the screen.
  tick() {
    this.setState({
      date: new Date()
    });
  }

  // Step 3) render() method is called. React now knows what should displayed on the screen. React updates the DOM to match Clock's render output.
  // Step 6) this.state.date in render() method will change. Render output will have the updated time.
  render() {
    return (
      <div>
        <h1>Hello, from the Clock function!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// Step 1) <Clock /> is passed
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

// source: https://bit.ly/2GYUKLK

// =============================================================
//                     Basic Example
// =============================================================

// setInterval(tick, 1000);

// // Tick function from a previous lesson
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, again from the tick function!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

//       date: new Date().toJSON().slice(5,10).replace(/-/g,'/'),
//       year: new Date().toJSON().slice(0,4).replace(/-/g,'/')

// <h2>Today is {this.state.date}/{this.state.year}.</h2>
