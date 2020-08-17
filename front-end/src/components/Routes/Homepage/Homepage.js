import React, { Component } from 'react';

import Profile from './Profile/Profile';
import Projects from './Projects/Projects';
import Header from './Header/Header';
import Hobbies from './Hobbies/Hobbies';
import Skills from './Skills/Skills';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      apiResponse: []
    }
  }

  callAPI() {
    fetch('http://localhost:3001/projects')
      .then(res => res.json() )
      .then(res => {
        this.setState({ 
          isLoaded: true,
          apiResponse: res 
      })}
    )
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const scrollContainerStyle = { maxHeight: "450px" };
    var { isLoaded, apiResponse } = this.state;

    if(!isLoaded) {
      return (
        <div className="container">
          Loading . . .
        </div>
      )
    } else {
      return(
        <div>
          <Header/>
          <div  className="container">
            <Profile/>
            <Projects data={apiResponse}/>
            <Skills data={apiResponse}/>
            <Hobbies/>
          </div>
        </div>
      )
    }
  }
}

export default Homepage;
