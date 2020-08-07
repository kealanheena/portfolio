import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class LeftArrow extends Component {
  render() {
    return (
      <div className="backArrow" onClick={this.props.goToPrevSlide}>
        <FontAwesomeIcon icon={faChevronLeft}/>
      </div>
    )
  }
}

export default LeftArrow;
