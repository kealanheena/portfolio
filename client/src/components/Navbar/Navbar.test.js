import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe("Navbar", () => {

  let wrapper;
  
  beforeEach(() => { wrapper = shallow(<Navbar/>) });

  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
})