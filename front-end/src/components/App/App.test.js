import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Navbar from './Navbar/Navbar';
import SideDrawer from './Navbar/SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

describe('App', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a Navbar component', () => {
    expect(wrapper.containsMatchingElement(<Navbar/>)).toEqual(true);
  });

  it('should render a SideDrawer component', () => {
    expect(wrapper.containsMatchingElement(<SideDrawer/>)).toEqual(true);
  });

  it('should render a Backdrop component when sideDrawerOpen is true', () => {
    wrapper.setState({ sideDrawerOpen: true })
    expect(wrapper.containsMatchingElement(<Backdrop/>)).toEqual(true);
  });

  it('should not render a Backdrop component when sideDrawerOpen is false', () => {
    expect(wrapper.containsMatchingElement(<Backdrop/>)).toEqual(false);
  });

  it('should render a <main />', () => {
    expect(wrapper.find('main').length).toEqual(1);
  });

});

