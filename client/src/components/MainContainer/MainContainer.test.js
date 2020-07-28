import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';

describe("MainContainer", () => {
  let wrapper;

  beforeEach(() => { wrapper = shallow(<MainContainer/>) });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toBe(1);
  });

  it("should render a Navbar Component", () => {
    expect(wrapper.find("Container").length).toEqual(1);
  });
});
