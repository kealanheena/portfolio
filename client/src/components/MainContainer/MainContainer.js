import React from 'react';

import { Container } from 'react-bootstrap';
import Profile from '../Profile/Profile';
import ExperienceContainer from '../Experience/ExperienceContainer/ExperienceContainers'
import ProjectContainer from '../Projects/ProjectsContainer/ProjectsContainer';
import EducationContainer from '../Education/EducationContainer/EducationContainer'


const MainContainer = () => (
  <div>
    <Container>
      <Profile/>
      <ExperienceContainer/>
      <ProjectContainer/>
      <EducationContainer/>
    </Container>
  </div>
)

export default MainContainer;
