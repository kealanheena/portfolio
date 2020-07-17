import React from 'react';
import './MyNavbar.css';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => (
  <div>
    <Navbar sticky="top" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="#"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Kealan Heena
      </Navbar.Brand>
    </Navbar>
  </div>
);

export default MyNavbar; 