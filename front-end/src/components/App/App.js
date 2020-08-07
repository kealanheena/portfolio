import React, { Component } from 'react';
import Profile from '../Profile/Profile';
import Carousel from '../Carousel/Carousel';

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Profile/> */}
        <Carousel/>
      </div>
    );
  }
}

export default App;
