import React from 'react';

import Profile from './Profile/Profile';
import Projects from './Projects/Projects';
import Header from './Header/Header';
import Hobbies from './Hobbies/Hobbies';

function Homepage() {
  return (
    <div>
      <Header/>
      <div  className="container">
        <Profile/>
        <Projects/>
        <Hobbies/>
      </div>
    </div>
  );
}

export default Homepage;
