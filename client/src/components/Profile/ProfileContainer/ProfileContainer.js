import React from "react";


import portrait from '../img/portrait.png';
import ProfileLinks from '../ProfileLinks/ProfileLinks';
import { Card, Container, Col, Row } from 'react-bootstrap';

import './ProfileContainer.css'

const ProfileContainer = () => {
  return (
    <div className="section-container" id="aboutMe">
      <Container>
        <Card>
          <Card.Body>
            <Row>
              <Col xs={2} className="mb-5 portrait">
                <Card.Img variant="top" src={portrait}/>
              </Col>
              <Col xs={9} className="mb-5">
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                  I’m Kealan, a Maker’s Academy graduate and a jack of all trades when it comes to work experience most recently coming out of carpentry to pursue a career in Software Development.
                  Over the last 8 months, I’ve been coding every day to hone my skills in JavaScript to achieve this goal.
                  Since graduating from Maker’s I’ve built several projects using Ruby,  JavaScript and React.
                  I’ve recently started using Mongo and React API’s to make more complex applications using CRUD system.
                </Card.Text>
                <ProfileLinks/>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default ProfileContainer;