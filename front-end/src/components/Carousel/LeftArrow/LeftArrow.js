import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LeftArrow extends Component {
  render() {
    return (
      <div className="backArrow" onClick={this.props.goToPreviousSlide}>
        <FontAwesomeIcon icon="faChevronLeft"/>
      </div>
    )
  }
}

export default LeftArrow;
