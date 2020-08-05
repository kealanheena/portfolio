import React, { Component } from 'react';
import Slider from '../Slider/Slider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {

    fetch("http://localhost:3001/projects")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });

  }

  render() {

    var { isLoaded, items } = this.state

    if(!isLoaded) {
      return (
        <div>
          Loading . . .
        </div>
      )
    } else {
      return (
        <div className="App">
          <Slider projects={items} />
        </div>
      );
    }
  }
}

export default App;