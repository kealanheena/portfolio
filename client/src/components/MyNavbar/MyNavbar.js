import React from 'react';
import './MyNavbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MyNavbar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Kealan Heena</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="About Me" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#experience">Experience</NavDropdown.Item>
          <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
          <NavDropdown.Item href="#education">Education</NavDropdown.Item>
          <NavDropdown.Item href="#skills">Skills</NavDropdown.Item>
          <NavDropdown.Item href="#skills">Hobbies</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Contact Me</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar; 