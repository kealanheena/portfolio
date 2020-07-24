import React from "react";

import EducationCard from "../EducationCard/EducationCard";
import education from '../../../testData/educationData.json';
import { Container, CardColumns } from "react-bootstrap";

// import './EducationContainer.css'

const EducationContainer = () => {
  return (
    <div id="Education">
      <Container>
        <h2>Education</h2>
        <CardColumns>
          {education.map( data => (
              // <Col xs={6} className="mb-5" key={`${data.id}`}>
              <div key={`${data.id}`}><EducationCard data={data} /></div>
                
              // </Col>
            )
          )}
        </CardColumns>
      </Container>
    </div>
  );
}

export default EducationContainer;