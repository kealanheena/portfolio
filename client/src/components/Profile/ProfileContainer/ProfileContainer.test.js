import React from 'react';
import { shallow } from 'enzyme';

import ProfileContainer from './ProfileContainer';
import ProfileLinks from '../ProfileLinks/ProfileLinks';

describe("ProfileContainer", () => {
  let wrapper;

  beforeEach(() => { wrapper = shallow(<ProfileContainer/>) });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toBe(1);
  });
  
  it("should render a Container Component", () => {
    expect(wrapper.find("Container").length).toEqual(1);
  });

  it("should render a Card Component", () => {
    expect(wrapper.find("Card").length).toEqual(1);
  });
  
  it("should render a Row Component", () => {
    expect(wrapper.find("Row").length).toEqual(1);
  });

  it("should render a Col Component", () => {
    expect(wrapper.find("Col").length).toEqual(2);
  });

  it("should render a ProfileLinks Component", () => {
    expect(wrapper.containsMatchingElement(<ProfileLinks />)).toEqual(true);
  });
});
