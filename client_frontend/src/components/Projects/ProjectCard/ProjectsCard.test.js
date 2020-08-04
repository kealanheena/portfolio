import React from 'react';
import { shallow } from 'enzyme';

import ProjectCard from './ProjectCard';

describe("ProjectsCard", () => {
  let wrapper;

  beforeEach(() => { wrapper = shallow(<ProjectCard data={[{
    id: 1,
    title: "First Test Project",
    description: "This is a test project",
    website: "#",
    github: "#"
  }]} />) });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toBe(2);
  });
  
});
