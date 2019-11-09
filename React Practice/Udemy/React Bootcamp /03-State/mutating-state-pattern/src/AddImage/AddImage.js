import React, { Component } from 'react'
import "./AddImage.css";

class AddImage extends Component {
  static defaultProps = {
    album: [
      "https://images.unsplash.com/photo-1472746729193-36ad213ac4a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1475173641776-50e70b746de8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      "https://images.unsplash.com/photo-1489712310660-bbce44cc541d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1056&q=80",
      "https://images.unsplash.com/photo-1573178025830-1ae43bcce8f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1572649297497-0b6e1a695c93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    ]
  }

  constructor(props) {
    super(props)
    this.state = {
      mural: [],
      limit: false,
      timesClicked: 0
    }
    this.addImage = this.addImage.bind(this)
  }

  trackClick(currentState) {
    return { timesClicked: currentState.timesClicked + 1 }
  }

  addImage() {
    let index = Math.floor(Math.random() * this.props.album.length)
    let newAlbum = this.props.album[index];
    this.setState(
      { mural: [ ...this.state.mural, newAlbum ] }
    );
    if (this.state.timesClicked < 7) {
      this.setState(this.trackClick)
    } else {
      this.setState({ limit: true })
    }

  }

  render() {
    const photo = this.state.mural.map(ph => <img src={`${ph}`} />);

    return (
    <div className="AddImage">
      <h1>Mural</h1>
      <button onClick={this.addImage} disabled={this.state.limit}>Add New Photo</button>
      <div className="AddImage-mural">
        { photo }
      </div>
    </div>
    )
  }
}

export default AddImage;