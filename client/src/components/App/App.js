import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
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
          <Container>
            <Slider projects={items} />
          </Container>
        </div>
      );
    }
  }
}

export default App;