import React from "react";

import EducationCard from "../EducationCard/EducationCard";
import education from '../../../testData/educationData.json';
import { Container, Col, Row } from "react-bootstrap";

// import './EducationContainer.css'

const EducationContainer = () => {
  return (
    <div id="education">
      <Container>
        <h2>Education</h2>
        <Row>
          {education.map( data => (
              <Col xs={6} className="mb-5" key={`${data.id}`}>
              <div key={`${data.id}`}><EducationCard data={data} /></div>
                
              </Col>
            )
          )}
        </Row>
      </Container>
    </div>
  );
}

export default EducationContainer;