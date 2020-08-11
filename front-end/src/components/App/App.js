import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../Navbar/SideDrawer/SideDrawer';
import Profile from '../Profile/Profile';
import Carousel from '../Carousel/Carousel';

import './App.css';

class App extends Component {
  render(){
    return (
      <div style={{ height: '100%' }}>
        <Navbar/>
        <SideDrawer/>
        <main style={{marginTop: '64px'}}>
          <Profile/>
          <Carousel/>
        </main>
      </div>
    );
  }
}

export default App;
