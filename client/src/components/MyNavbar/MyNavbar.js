import React from 'react';
import './MyNavbar.css';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => (
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        React Bootstrap
      </Navbar.Brand>
    </Navbar>
  </div>
);

export default MyNavbar; 