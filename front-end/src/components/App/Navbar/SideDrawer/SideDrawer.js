import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './SideDrawer.css';

const sideDrawer = props => {

  let drawerClasses = 'side-drawer';

  if(props.show) {
    drawerClasses = 'side-drawer open';
  }

  return(
    <nav className={drawerClasses}>
      <ul>
        {/* <li><a href="/makers">Makers</a></li>
        <li><a href="/projects">Projects</a></li>
        <hr/> */}
        <li><a href="/contact">Contact Me</a></li>
        <li><a href="https://www.github.com/kealanheena">
          <FontAwesomeIcon icon={faGithub} className="brand"/>Github
        </a></li>
        <li><a href="https://www.linkedin.com/in/kealanheena">
          <FontAwesomeIcon icon={faLinkedin} className="brand"/> Linkedin
        </a></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
