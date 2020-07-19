import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const MainContainer = () => (
  <div>
    <Container>
      <Row>
        {projects.map( data => (
          <Col xs={3} className="mb-5" key={`${data.id}`}>
            <ProjectCard data={data} />
          </Col>
        )
        )}
      </Row>
    </Container>
  </div>
)

export default MainContainer;
