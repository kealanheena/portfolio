import React from 'react';

import Profile from './Profile/Profile';
import Header from './Header/Header';
import Hobbies from './Hobbies/Hobbies';

function Homepage() {
  return (
    <div>
      <Header/>
      <Profile/>
      <Hobbies/>
    </div>
  );
}

export default Homepage;
