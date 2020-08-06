import React from "react";
import { Card } from 'react-bootstrap';

export function EducationCard({ data }) {
  return (
    <Card>
      <Card.Body className="d-flex flex-column">
        <Card.Img variant="top" src={data.image}/>
        <div className="d-flex mb-2 justify-content-between">
          <Card.Title className="mb-0 font-weight-bold">
            {data.qualification}
          </Card.Title>
        </div>
        <Card.Text className="text-secondary">
          <em><Card.Link href={data.website}>{data.name}</Card.Link></em>
        </Card.Text>
        <Card.Text className="text-secondary">{data.startDate} - {data.endDate}</Card.Text>
        <Card.Text className="text-secondary">{data.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default EducationCard;