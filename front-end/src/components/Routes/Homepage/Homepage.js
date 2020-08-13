import React from 'react';

import Profile from './Profile/Profile';
import Header from './Header/Header';
import Hobbies from './Hobbies/Hobbies';
import Card from '../../Card/Card';

function Homepage() {
  return (
    <div>
      <Header/>
      <div  className="container">
        <Profile/>
        <Hobbies/>
        <Card/>
      </div>
    </div>
  );
}

export default Homepage;
