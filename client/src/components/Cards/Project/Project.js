import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

import Iframe from '../../Iframe/Iframe.js';

import './Project.css'
// import projects from '../../projects.json';

export default function ProjectCard({ data }) {
  return (
    <Container>
      <Card className="cardContainer h-100 shadow-sm bg-dark text-white rounded">
        <Iframe displayedWebsite={data.website}/>
        <Card.Body className="d-flex flex-column">
          <div className="d-flex mb-2 justify-content-between">
            <Card.Title className="mb-0 font-weight-bold">
              {data.title}
            </Card.Title>
          </div>
          <Card.Text className="text-secondary">
            {data.description}
          </Card.Text>
          <Button href={data.github} variant="success">
            GitHub
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}
