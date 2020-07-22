import React from 'react';
import PropTypes from 'prop-types';
import { MDBContainer, MDBIframe } from 'mdbreact';

import './Iframe.css'


const Iframe = ({ displayedWebsite }) => {
  return(
    <div className='iframeContainer'>
      <MDBContainer className='text-center'>
        <MDBIframe src={displayedWebsite} />
      </MDBContainer>
    </div>
  );
}

Iframe.propTypes = { displayedWebsite: PropTypes.any.isRequired }

export default Iframe;