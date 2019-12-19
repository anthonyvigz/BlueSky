import React, { Component } from 'react';
import '../css/photos.css';
var listOfImages = [];


class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [
          
      ]
    }
  }

  importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../img/testPhotos', false, /\.(png|jpe?g|svg)$/));
    }


  render() {
    return (
        <div className="imgBigContainer" id="photos">
            {
            listOfImages.map(
                (image, index) =>    <img className="imgBlock" width="400px" key={index} src={image} alt="info"></img>
            )
            }
          </div>
    );
  }
}

export default Photos;