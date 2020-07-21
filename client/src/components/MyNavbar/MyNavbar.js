import React from 'react';
import './MyNavbar.css';
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="/">Kealan Heena</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#aboutMe">About Me</Nav.Link>
        <Nav.Link href="#experience">Experience</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#education">Education</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#hobbies">Hobbies</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#projects">Contact Me</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar; 