import React, { Component } from 'react';

import './ContactMe.css'

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subject: '',
      text: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: this.state.email,
      subject: this.state.subject,
      text: this.state.text
    }

    fetch('http://localhost:3001/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    console.log(data);

    this.setState({
      email: '',
      subject: '',
      text: '',
    });
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            value={this.state.subject}
            onChange={this.handleInputChange}
          />
        <label htmlFor="text">Text</label>
          <textarea
            id="text"
            name="text"
            value={this.state.text}
            onChange={this.handleInputChange}
          />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactMe;
