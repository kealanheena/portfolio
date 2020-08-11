import React from 'react';

import './Navbar.css';
import SideDrawerToggleButton from './SideDrawerToggleButton/SideDrawerToggleButton';

const navbar = props => (
  <header className="navbar">
    <nav className="navbar-navigation">
      <div className="navbar-toggle-button">
        <SideDrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <div className="spacer"/>
      <div className="navbar-navigation-items">
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Products</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default navbar