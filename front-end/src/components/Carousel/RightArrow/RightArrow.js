import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RightArrow extends Component {
  render() {
    return (
      <div className="forwardArrow" onClick={this.props.goToNextSlide}>
        <FontAwesomeIcon icon="faChevronRight"/>
      </div>
    )
  }
}

export default RightArrow;
