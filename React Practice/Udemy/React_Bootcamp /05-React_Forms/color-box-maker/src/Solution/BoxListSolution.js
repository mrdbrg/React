import React, { Component } from 'react'
import NewBoxFormSolution from './NewBoxFormSolution'
import BoxSolution from './BoxSolution'

class BoxListSolution extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: []
    }
    this.create = this.create.bind(this);
  }

  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }

  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox ]
    })
  }
  render() {
    const boxes = this.state.boxes.map(box => (
      <BoxSolution 
      key={box.id}
      id={box.id}
      height={box.height} 
      width={box.width} 
      color={box.color} 
      /* This syntax is only to show that there are other ways to pass the method to another component
      without binding in the constructor. Although many prefer binding it in the constructor since it makes 
      more explicit what is being done in the component */
      removeBox={() => this.remove(box.id)}
      />
    )) 
    return (
      <div>
        <h1>Color Box Maker</h1>
        <NewBoxFormSolution createBox={this.create}/>
        {boxes}
      </div>
    )
  }
}

export default BoxListSolution