import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Iframe from '../Iframe/Iframe';

export function ProjectCard({ data, setOrder }) {
  return (
    <Card className="h-100 shadow-sm bg-white rounded">
      <Iframe displayedWebsite={data.website}/>
      {/* <Card.Img variant="top" src={data.website}/> */}
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
  )
}
