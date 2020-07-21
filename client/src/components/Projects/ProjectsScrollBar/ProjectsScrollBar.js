import React from "react";

import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { MDBContainer, MDBScrollbar } from "mdbreact";

import "./ProjectScrollBar.css";
import projects from '../../../testData.json'; 

const ProjectsScrollBar = () => {
  const scrollContainerStyle = { width: "800px", maxHeight: "400px" };
  return (
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
  );
}

export default ProjectsScrollBar;