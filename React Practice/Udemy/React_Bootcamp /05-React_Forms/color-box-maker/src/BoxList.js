import React, { Component } from 'react'
import NewBoxForm from './NewBoxForm'
import Box from './Box'

class BoxList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: []
    }
    this.addBox = this.addBox.bind(this);
    this.remove = this.remove.bind(this);
  }

  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }

  addBox(newBox) { 
    this.setState({
      boxes: [...this.state.boxes, newBox]
    })
  }

  renderBoxes() {
    return (
      this.state.boxes.map(box => (
        <Box 
        key={box.id}
        id={box.id}
        height={box.height}
        width={box.width}
        color={box.color}
        removeBox={this.remove}
        />
      ))
    )
  }

  render() {
    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        {this.renderBoxes()}
      </div>
    )
  }
}

export default BoxList