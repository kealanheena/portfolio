import React from 'react';
import { shallow } from 'enzyme';

import MainContainer from './MainContainer';
import ProfileContainer from '../Profile/ProfileContainer/ProfileContainer';
import ExperienceContainer from '../Experience/ExperienceContainer/ExperienceContainers';
import ProjectContainer from '../Projects/ProjectsContainer/ProjectsContainer';
import EducationContainer from '../Education/EducationContainer/EducationContainer';
import SkillsContainer from '../Skills/SkillsContainer/SkillsContainer';
import HobbiesContainer from '../Hobbies/HobbiesContainer/HobbiesContainer';

describe("MainContainer", () => {
  let wrapper;

  beforeEach(() => { wrapper = shallow(<MainContainer/>) });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toBe(1);
  });

  it("should render a Container Component", () => {
    expect(wrapper.find("Container").length).toEqual(1);
  });

  it("should render a ProfileContainer Component", () => {
    expect(wrapper.containsMatchingElement(<ProfileContainer />)).toEqual(true);
  });

  it("should render an ExperienceContainer component", () => {
    expect(wrapper.containsMatchingElement(<ExperienceContainer />)).toEqual(true);
  });

  it("should render a ProjectContainer component", () => {
    expect(wrapper.containsMatchingElement(<ProjectContainer />)).toEqual(true);
  });

  it("should render a EducationContainer component", () => {
    expect(wrapper.containsMatchingElement(<EducationContainer />)).toEqual(true);
  });

  it("should render a SkillsContainer component", () => {
    expect(wrapper.containsMatchingElement(<SkillsContainer />)).toEqual(true);
  });

  it("should render a HobbiesContainer component", () => {
    expect(wrapper.containsMatchingElement(<HobbiesContainer />)).toEqual(true);
  });
  
});
