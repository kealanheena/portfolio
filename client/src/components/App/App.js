import React from 'react';
import './App.css';
import MyNavbar from '../MyNavbar/MyNavbar';

import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import projects from '../../testData.json'; 

function App() {
  return (
    <div className="App">
      <MyNavbar/>
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
  );
}

export default App;
