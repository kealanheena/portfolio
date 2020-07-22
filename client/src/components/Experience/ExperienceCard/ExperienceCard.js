import React from "react";
import { Card } from 'react-bootstrap';

export function ExperienceCard({ data }) {
  return (
    <Card>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-between">
          <Card.Title className="mb-0 font-weight-bold">
            {data.job}
          </Card.Title>
        </div>
        <Card.Text className="text-secondary">{data.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ExperienceCard;