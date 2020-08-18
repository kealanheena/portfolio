import React, { Component } from 'react';

class CreateProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      website: '',
      github: '',
      stack: '',
      makers: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'makers' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const data = {
      title: this.state.title,
      description: this.state.description,
      website: this.state.website === '' ? null : this.state.website,
      github: this.state.github,
      stack: this.state.stack.split(' '),
      makers: this.state.makers
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    
    event.preventDefault();
    fetch('http://localhost:3001/projects', options);
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <label> Title:
          <input required name="title" checked={this.state.title} onChange={this.handleInputChange} />
        </label>
        <label> Description:
          <input required name="description" value={this.state.description} onChange={this.handleInputChange} />
        </label>
        <label> Website:
          <input name="website" value={this.state.website} onChange={this.handleInputChange} />
        </label>
        <label> Github:
          <input required name="github" value={this.state.github} onChange={this.handleInputChange} />
        </label>
        <label> Stack (enter a list of technologies sperated by a space):
          <input required name="stack" value={this.state.stack} onChange={this.handleInputChange} />
        </label>
        <label> Makers:
          <input name="makers" type="checkbox" checked={this.state.makers} onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateProjectPage;
