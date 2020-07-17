import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MyNavbar from '../MyNavbar/MyNavbar';

describe("App", () => {
  let wrapper;

  beforeEach(() => { wrapper = shallow(<App/>) });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toBe(1);
  });

  it("should render a MyNavbar Component", () => {
    expect(wrapper.containsMatchingElement(<MyNavbar />)).toEqual(true);
  });
});

