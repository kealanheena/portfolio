import React from 'react';
import { shallow } from 'enzyme';
import { Navbar, Nav } from 'react-bootstrap/Navbar';
import MyNavbar from './MyNavbar';

describe("Navbar", () => {

  let wrapper;
  
  beforeEach(() => { wrapper = shallow(<MyNavbar/>) });

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render a Navbar Component", () => {
    expect(wrapper.find("Navbar").length).toEqual(1);
  });

  it("should render a NavbarBrand Component", () => {
    expect(wrapper.find("NavbarBrand").length).toEqual(1);
  });

  it("should render a Nav Component", () => {
    expect(wrapper.find("Nav").length).toEqual(2);
  });

  it("should render a NavLink Component", () => {
    expect(wrapper.find("NavLink").length).toEqual(7);
  });

})