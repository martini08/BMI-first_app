import React, {Component} from 'react';

class ImageContainer extends Component {

  render() {
      return (
        <img src={this.props.image} width='700' height='400' alt='obrazek'/>
      );
  }
}

export default ImageContainer;