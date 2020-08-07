import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

class RightArrow extends Component {
  render() {
    return (
      <div className="backArrow" onClick={this.props.goToNextSlide}>
        <FontAwesomeIcon icon={faChevronRight}/>
      </div>
    )
  }
}

export default RightArrow;
