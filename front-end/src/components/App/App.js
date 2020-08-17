import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import SideDrawer from './Navbar/SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

import Homepage from '../Routes/Homepage/Homepage';
import ProjectsPage from '../Routes/ProjectsPage/ProjectsPage';
import CreateProjectPage from '../Routes/CreateProjectPage/CreateProjectPage';

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
      <Router>
        <div style={{ height: '100%' }}>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
          <main style={{marginTop: '64px'}}>
            <Switch>
              <Route path="/" exact component={Homepage}/>
              <Route path="/projects/:id" exact component={ProjectsPage}/>
              <Route path="/create-project" exact component={CreateProjectPage}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
