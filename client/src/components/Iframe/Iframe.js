import React from 'react';
import PropTypes from 'prop-types';
import { MDBContainer, MDBIframe } from 'mdbreact';


const Iframe = ({ displayedWebsite }) => {
  return(
    <MDBContainer className='text-center'>
      <MDBIframe src={displayedWebsite} />
    </MDBContainer>
  );
}

Iframe.propTypes = { displayedWebsite: PropTypes.any.isRequired }

export default Iframe;