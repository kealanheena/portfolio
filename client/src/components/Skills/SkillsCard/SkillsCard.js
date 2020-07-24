import React from "react";
import { Card, ListGroup } from 'react-bootstrap';

export function SkillsCard({ data }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Projects Built with {data.name}
        </Card.Subtitle>
        <ListGroup>
        {data.projects.map( data => (
              // <Col xs={6} className="mb-5" key={`${data.id}`}>
              // <div key={`${data.id}`}><SkillsCard data={data} /></div>
                <ListGroup.Item>
                  <Card.Link href="#projects">{data}</Card.Link>
                </ListGroup.Item>
              // </Col>
            )
        )}
      </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default SkillsCard;