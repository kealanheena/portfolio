import React from 'react';

import { Container } from 'react-bootstrap';
import ProfileContainer from '../Profile/ProfileContainer/ProfileContainer';
import ExperienceContainer from '../Experience/ExperienceContainer/ExperienceContainers';
import ProjectContainer from '../Projects/ProjectsContainer/ProjectsContainer';
import EducationContainer from '../Education/EducationContainer/EducationContainer'
import SkillsContainer from '../Skills/SkillsContainer/SkillsContainer';
import HobbiesContainer from '../Hobbies/HobbiesContainer/HobbiesContainer';


const MainContainer = () => (
  <div className="main-container">
    <Container>
      <ProfileContainer/>
      <ExperienceContainer/>
      <ProjectContainer/>
      <EducationContainer/>
      <SkillsContainer/>
      <HobbiesContainer/>
    </Container>
  </div>
)

export default MainContainer;
