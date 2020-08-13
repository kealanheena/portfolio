import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Navbar.css';
import SideDrawerToggleButton from './SideDrawerToggleButton/SideDrawerToggleButton';

const navbar = props => (
  <header className="navbar">
    <nav className="navbar-navigation">
      <div className="navbar-toggle-button">
        <SideDrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="navbar-logo">
        <a href="/">Kealan Heena</a>
      </div>
      <div className="navbar-navigation-items">
        <ul>
          <li><a href="/makers">Makers</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </div>
      <div className="spacer"/>
      <div className="navbar-navigation-items">
        <ul>
          <li><a href="/contact">Contact Me</a></li>
        </ul>
      </div>
      <div className="navbar-navigation-items brands">
        <ul>
          <li>
            <a href="https://www.github.com/kealanheena">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kealanheena">
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default navbar