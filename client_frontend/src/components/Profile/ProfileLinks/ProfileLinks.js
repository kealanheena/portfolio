import React from "react";

import devtoLogo from '../img/devto-logo.png';
import linkedinLogo from '../img/linkedin-logo.png';
import codeWarsLogo from '../img/code-wars-logo.png';
import githubLogo from '../img/github-logo.png';
import { Card, Col, Row } from 'react-bootstrap';

const ProfileLinks = () => {
  return (
    <div id="aboutMe">
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
    </div>
  );
}

export default ProfileLinks;