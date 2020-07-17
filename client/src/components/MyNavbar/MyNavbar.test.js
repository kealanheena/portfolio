import React from 'react';
import { shallow } from 'enzyme';
import Navbar from 'react-bootstrap/Navbar';
import MyNavbar from './MyNavbar';

describe("Navbar", () => {

  let wrapper;
  
  beforeEach(() => { wrapper = shallow(<MyNavbar/>) });

  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
})