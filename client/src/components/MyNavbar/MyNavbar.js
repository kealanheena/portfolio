import React from 'react';
import './MyNavbar.css';
import { Navbar, NavbarBrand,Nav, NavLink } from 'react-bootstrap';

const MyNavbar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <NavbarBrand href="/">Kealan Heena</NavbarBrand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavLink href="#aboutMe">About Me</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#education">Education</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#hobbies">Hobbies</NavLink>
      </Nav>
      <Nav>
        <NavLink href="#projects">Contact Me</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar; 