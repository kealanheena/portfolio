import React, { Component } from 'react';

import './ContactMe.css'

class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmation: '',
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
    const data = {
      email: this.state.email,
      subject: this.state.subject,
      text: this.state.text
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    
    event.preventDefault();
    fetch('http://localhost:3001/email', options);

    this.setState({
      email: '',
      subject: '',
      text: '',

      // confirmation: <Alert handleClick={this.handleAlert}/>
    });

    // setTimeout(this.handleAlert, 10000)
  }

  // handleAlert() {
  //   this.setState({
  //     confirmation: ''
  //   });
  // }

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        {/* {this.state.confirmation} */}
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
