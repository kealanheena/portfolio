import React from "react";

import SkillsCard from "../SkillsCard/SkillsCard";
import skills from '../../../testData/skillsData.json';
import { Container, CardColumns } from "react-bootstrap";

const SkillsContainer = () => {
  return (
    <div className="section-container" id="skills">
      <Container>
        <h2>Skills</h2>
        <CardColumns>
          {skills.map( data => (
              // <Col xs={6} className="mb-5" key={`${data.id}`}>
              <div key={`${data.id}`}><SkillsCard data={data} /></div>
                
              // </Col>
            )
          )}
        </CardColumns>
      </Container>
    </div>
  );
}

export default SkillsContainer;