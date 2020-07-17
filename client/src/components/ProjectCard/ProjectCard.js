import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

export function ProjectCard({ data, setOrder }) {
  return (
    <Card className="h-100 shadow-sm bg-white rounded">
      <Card.Img variant="top" src={data.github}/>
      <Card.Body className="d-flex flex-cloumn">
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
