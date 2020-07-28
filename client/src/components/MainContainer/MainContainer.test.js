import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';
import Profile from '../Profile/Profile';
import ExperienceContainer from '../Experience/ExperienceContainer/ExperienceContainers';
import ProjectContainer from '../Projects/ProjectsContainer/ProjectsContainer';

describe("MainContainer", () => {
  let wrapper;

  beforeEach(() => { wrapper = shallow(<MainContainer/>) });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toBe(1);
  });

  it("should render a Container Component", () => {
    expect(wrapper.find("Container").length).toEqual(1);
  });

  it("should render a Profile Component", () => {
    expect(wrapper.containsMatchingElement(<Profile />)).toEqual(true);
  });

  it("should render an ExperienceContainer component", () => {
    expect(wrapper.containsMatchingElement(<ExperienceContainer />)).toEqual(true)
  });

  it("should render a ProjectContainer component", () => {
    expect(wrapper.containsMatchingElement(<ProjectContainer />)).toEqual(true)
  });
  
});
