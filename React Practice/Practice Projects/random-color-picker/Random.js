import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [108, 44, 44]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      color: this.chooseColor()
    });
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  /*
    1) Values towards the light spectrum of RGB color palette will be of higher number values and a sum of greater than 381, thus it's a light color.
    2) Values towards the dark spectrum of RGB color palette will be of lower number values and a sum of less than 381, thus it's a dark color.
  */
  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 381;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }
	//
  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  render() {
    // this.light() ? if it's TRUE (dark) return 'white' : else it's FALSE (white) return 'black'
    return (
      <div>
        <h2 className={this.isLight() ? 'white' : 'black'}> Your color is {this.formatColor(this.state.color)}!
        </h2>
        <Button
          light={this.isLight()}
          onClick={this.handleClick}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Random />,
  document.getElementById('app')
);
