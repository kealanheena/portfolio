import React from "react";

import ExperienceCard from "../ExperienceCard/ExperienceCard";
import experience from '../../../testData/experienceData.json';
import { Container, CardColumns } from "react-bootstrap";

import './ExperienceContainer.css'

const ExperienceContainer = () => {
  return (
    <div className="section-container" id="experience">
      <Container>
        <h2>Experience</h2>
        <CardColumns>
          {experience.map( data => (
              // <Col xs={6} className="mb-5" key={`${data.id}`}>
              <div key={`${data.id}`}><ExperienceCard data={data} /></div>
                
              // </Col>
            )
          )}
        </CardColumns>
      </Container>
    </div>
  );
}

export default ExperienceContainer;