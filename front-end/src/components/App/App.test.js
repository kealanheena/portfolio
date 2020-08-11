import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../Navbar/SideDrawer/SideDrawer';
import Profile from '../Profile/Profile';
import Carousel from '../Carousel/Carousel';

describe('App', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a Navbar component', () => {
    expect(wrapper.containsMatchingElement(<Navbar/>)).toEqual(true)
  });

  it('should render a SideDrawer component', () => {
    expect(wrapper.containsMatchingElement(<SideDrawer/>)).toEqual(true)
  });

  it('should render a <main />', () => {
    expect(wrapper.find('main').length).toEqual(1);
  });

  it('should render a Profile component', () => {
    expect(wrapper.containsMatchingElement(<Profile/>)).toEqual(true)
  });

  it('should render a Carousel component', () => {
    expect(wrapper.containsMatchingElement(<Carousel/>)).toEqual(true)
  });

});

