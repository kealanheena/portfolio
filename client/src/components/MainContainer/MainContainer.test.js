import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';
import Profile from '../Profile/Profile';

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
});
