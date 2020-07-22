import React from 'react';

import { Container } from 'react-bootstrap';
import Profile from '../Profile/Profile';
import ExperienceContainer from '../Experience/ExperienceContainer/Experience'
import ProjectContainer from '../Projects/ProjectsContainer/ProjectsContainer';


const MainContainer = () => (
  <div>
    <Container>
      <Profile/>
      <ExperienceContainer/>
      <ProjectContainer/>
    </Container>
  </div>
)

export default MainContainer;
