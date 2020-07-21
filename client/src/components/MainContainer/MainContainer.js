import React from 'react';

import { Container } from 'react-bootstrap';
import ProjectContainer from '../Projects/ProjectsContainer/ProjectsContainer';
import Profile from '../Profile/Profile';

const MainContainer = () => (
  <div>
    <Container>
      <Profile/>
      <ProjectContainer/>
    </Container>
  </div>
)

export default MainContainer;
