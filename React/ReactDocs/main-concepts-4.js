/*
POINT#1:
"React does so by "mounting" (adding nodes to the DOM), "unmounting" (removing them from the DOM), and "updating" (making changes to nodes already in the DOM)."

 Source: https://bit.ly/2GnkRZh
*/

class Clock extends React.Component {
  constructor(props, totalSum) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // LIFECYCLE METHODS ( mounting and unmounting )
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    return (
      <div>
        <h1>Hello, from the Clock function!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

// Let’s quickly recap what’s going on and the order in which the methods are called:
//
// 1. When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component.
// Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.
//
// 2. React then calls the Clock component’s render() method. This is how React learns what should be displayed
// on the screen. React then updates the DOM to match the Clock’s render output.
//
// 3. When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method.
// Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.
//
// 4. Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update
// by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
//
// 5. If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method
// so the timer is stopped.

// source: https://bit.ly/2GYUKLK

// ============================================================================
//                               Basic Example
// ============================================================================

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
