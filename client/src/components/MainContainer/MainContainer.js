import React from 'react';

import { Container } from 'react-bootstrap';
import Profile from '../Profile/Profile';
import ExperienceContainer from '../Experience/ExperienceContainer/ExperienceContainers'
import ProjectContainer from '../Projects/ProjectsContainer/ProjectsContainer';
import EducationContainer from '../Education/EducationContainer/EducationContainer'
import SkillsContainer from '../Skills/SkillsContainer/SkillsContainer';


const MainContainer = () => (
  <div>
    <Container>
      <Profile/>
      <ExperienceContainer/>
      <ProjectContainer/>
      <EducationContainer/>
      <SkillsContainer/>
    </Container>
  </div>
)

export default MainContainer;
