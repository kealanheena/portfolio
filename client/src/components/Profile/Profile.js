import React from "react";


import portrait from './img/portrait.png';
import devtoLogo from './img/devto-logo.png';
import linkedinLogo from './img/linkedin-logo.png';
import codeWarsLogo from './img/code-wars-logo.png';
import githubLogo from './img/github-logo.png';
import { Card, Container, Col, Row } from 'react-bootstrap';

import './Profile.css'

const Profile = () => {
  return (
    <div id="aboutMe">
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
                    <Row>
                      <Col xs={1}>
                        <Card.Link href="https://github.com/kealanheena">
                          <Card.Img src={githubLogo}/>
                        </Card.Link>
                      </Col>
                      <Col xs={1}>
                        <Card.Link href="https://www.linkedin.com/in/kealanheena">
                          <Card.Img src={linkedinLogo}/>
                        </Card.Link>
                      </Col>
                      <Col xs={1}>
                        <Card.Link href="https://dev.to/kealanheena">
                          <Card.Img src={devtoLogo}/>
                        </Card.Link>
                      </Col>
                      <Col xs={1}>
                        <Card.Link href="https://www.codewars.com/users/kealanheena">
                          <Card.Img src={codeWarsLogo}/>
                        </Card.Link>
                      </Col>
                    </Row>
                </Col>
              </Row>
            </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Profile;