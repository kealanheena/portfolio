import React, { Component } from 'react';

import './Navbar.css';

const navbar = props => (
  <header className="navbar">
    <nav className="navbar-navigation">
      <div></div>
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <div className="spacer"/>
      <div className="navbar-navigation-items">
        <ul>
          <li key="pro"><a href="/">Products</a></li>
          <li key="bro"><a href="/">Products</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default navbar