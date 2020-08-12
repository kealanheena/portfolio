import React from 'react';

import HeaderPhoto from './img/HeaderPhoto.png';

import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-text">
        <h1>Kealan Heena</h1>
        <h2>Software Developer</h2>
      </div>
      <img
        className="header-img"
        src={HeaderPhoto}
        alt="Kealan Heena Profile"  
      />
    </div>
  );
}

export default Header;