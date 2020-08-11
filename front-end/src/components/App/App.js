import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../Navbar/SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Profile from '../Profile/Profile';
import Carousel from '../Carousel/Carousel';

import './App.css';

class App extends Component {

  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render(){
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <Profile/>
          <Carousel/>
        </main>
      </div>
    );
  }
}

export default App;
