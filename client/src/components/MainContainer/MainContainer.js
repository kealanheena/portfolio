import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import ProjectScrollBar from '../Projects/ProjectsScrollBar/ProjectsScrollBar';
// import { ProjectCard } from '../ProjectCard/ProjectCard';
// import projects from '../../testData.json'; 

const MainContainer = () => (
  <div>
    <Container>
      {/* <Row>
        {projects.map( data => (
          <Col xs={6} className="mb-5" key={`${data.id}`}>
            <ProjectCard data={data} />
          </Col>
        )
        )}
      </Row> */}
      <ProjectScrollBar/>

    </Container>
  </div>
)

export default MainContainer;
