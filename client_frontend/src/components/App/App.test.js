import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import MyNavbar from '../MyNavbar/MyNavbar';
import MainContainer from '../MainContainer/MainContainer';

describe("App", () => {
  let wrapper;

  beforeEach(() => { wrapper = shallow(<App/>) });

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toBe(1);
  });

  it("should render a MyNavbar Component", () => {
    expect(wrapper.containsMatchingElement(<MyNavbar />)).toEqual(true);
  });

  it("should render a MyNavbar Component", () => {
    expect(wrapper.containsMatchingElement(<MainContainer />)).toEqual(true);
  });
});

