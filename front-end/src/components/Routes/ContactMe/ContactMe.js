import React, { Component } from 'react';
import axios from 'axios';

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

  clearInput = () => {
    this.setState({
      email: '',
      subject: '',
      text: ''
    })
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:3001/email', this.state)
      .then( response => {
        JSON.stringify(response);
      })
      .catch( err => {
        console.log(err);
      });
    this.clearInput()
  }

  render() {

    const { email, subject, text } = this.state

    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
        <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            value={subject}
            onChange={this.handleInputChange}
          />
        <label htmlFor="text">Text</label>
          <textarea
            id="text"
            name="text"
            value={text}
            onChange={this.handleInputChange}
          />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactMe;
