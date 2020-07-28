import React from 'react';
import { shallow } from 'enzyme';
import { Navbar, Nav } from 'react-bootstrap/Navbar';
import MyNavbar from './MyNavbar';

describe("Navbar", () => {

  let wrapper;
  
  beforeEach(() => { wrapper = shallow(<MyNavbar/>) });

  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(0);
  });

  it("should render a Nav Component", () => {
    expect(wrapper.find("Nav").length).toEqual(2);
  });

  it("should render a Nav Component", () => {
    expect(wrapper.find("Navbar").length).toEqual(1);
  });

  it("should render a Nav Component", () => {
    expect(wrapper.find("NavLink").length).toEqual(7);
  });

})