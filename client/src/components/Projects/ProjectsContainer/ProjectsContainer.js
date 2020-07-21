import React from "react";

import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { MDBContainer } from "mdbreact";

import projects from '../../../testData.json'; 
import "./ProjectsContainer.css";

const ProjectsContainer = () => {
  const scrollContainerStyle = { width: "1200px", maxHeight: "450px" };
  return (
    <div id="projects">
      <MDBContainer>
        <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>
          <Container>
            <Row>
              {projects.map( data => (
                <Col xs={6} className="mb-5" key={`${data.id}`}>
                  <ProjectCard data={data} />
                </Col>
              )
              )}
            </Row>
          </Container>
        </div>
      </MDBContainer>
    </div>
  );
}

export default ProjectsContainer;