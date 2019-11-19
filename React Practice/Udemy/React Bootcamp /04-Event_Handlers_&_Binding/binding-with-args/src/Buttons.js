import React, { Component } from 'react'
import "./Buttons.css"

class Buttons extends Component {
  static defaultProps = {
    colors: ['#8de503', '#888a7c', '#42efa6', '#78da0e', '#c88dd2', '#289241']
  }
  constructor(props){
    super(props)
    this.state = { color: '#fff' }
  }

  changeColor(newColor) {
    this.setState({ color: newColor })
  }
  render() {
    return (
      <div className="Buttons" style={{backgroundColor: this.state.color}}>
        {
          this.props.colors.map(clr => {
            const colorObj = { backgroundColor: clr };
            return (
              <button style={colorObj} onClick={this.changeColor.bind(this, clr)}><span>Click Me</span></button>
            )
          })
        }
      
      </div>
    )
  }
}

export default Buttons