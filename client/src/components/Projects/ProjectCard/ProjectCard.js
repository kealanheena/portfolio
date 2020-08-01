import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Iframe from '../Iframe/Iframe';

export function ProjectCard({ data }) {
  return (
    <div>
      <Card className="h-100 shadow-sm bg-dark text-white rounded">
        <Iframe displayedWebsite={data.website}/>
        <Card.Body className="d-flex flex-column">
          <div className="d-flex mb-2 justify-content-between">
            <Card.Title className="mb-0 font-weight-bold">
              {data.title}
            </Card.Title>
          </div>
          <Card.Text className="text-secondary">{data.description}</Card.Text>
          <Button 
            href={data.github}
            variant="success">
              GitHub
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
