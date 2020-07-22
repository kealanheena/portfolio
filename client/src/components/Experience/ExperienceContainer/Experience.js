import React from "react";

import ExperienceCard from "../ExperienceCard/ExperienceCard";
import experience from '../../../ExperiencData.json'; 
import { Container, Row, Col } from "react-bootstrap";

const ExperienceContainer = () => {
  return (
    <div id="experience">
      <Container>
        <Row>
          {experience.map( data => (
              <Col xs={6} className="mb-5" key={`${data.id}`}>
                <ExperienceCard data={data} />
              </Col>
            )
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ExperienceContainer;