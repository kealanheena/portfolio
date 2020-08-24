import React, { Component } from 'react';

import Alert from './Alert/Alert';

import './CreateProjectPage.css'

class CreateProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      website: '',
      github: '',
      stack: '',
      makers: false,
      projectImage: null,
      confirmation: ''
    };

    this.onImageUpload = this.onImageUpload.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAlert = this.handleAlert.bind(this);
  }

  onImageUpload(event) {
    console.log(event.target.files[0])
    this.setState({
      projectImage: event.target.files
    })
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
      stack: this.state.stack.split(','),
      makers: this.state.makers,
      projectImage: this.state.projectImage
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

    this.setState({
      title: '',
      description: '',
      website: '',
      github: '',
      stack: '',
      makers: false,

      confirmation: <Alert handleClick={this.handleAlert}/>
    });

    setTimeout(this.handleAlert, 10000)
  }

  handleAlert() {
    this.setState({
      confirmation: ''
    });
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        {this.state.confirmation}
        <label htmlFor="title">Title</label>
          <input required
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        <label htmlFor="description">Description</label>
          <textarea required 
            id="description"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            value={this.state.website}
            onChange={this.handleInputChange}
          />
        <label htmlFor="github">Github</label>
          <input required
            id="website"
            name="github"
            value={this.state.github}
            onChange={this.handleInputChange}
          />
        <label htmlFor="stack">Stack</label>
        <em>(enter a list of technologies sperated by a comma)</em>
          <input required
            id="stack"
            name="stack"
            value={this.state.stack}
            onChange={this.handleInputChange}
          />
        <label htmlFor="file">Image</label>
        <em>(please use a JPEG or PNG)</em>
          <input required
            type="file"
            id="file"
            name="image"
            accept="image/*"
            onChange={this.onImageUpload}
          />
        <label htmlFor="stack">Makers</label>
          <input
            id="makers"
            name="makers"
            type="checkbox"
            checked={this.state.makers}
            onChange={this.handleInputChange}
          />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateProjectPage;
