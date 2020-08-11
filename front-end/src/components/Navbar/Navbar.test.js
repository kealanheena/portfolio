import React from 'react';
import { shallow } from 'enzyme';

import Navbar from './Navbar';
import SideDrawerToggleButton from './SideDrawerToggleButton/SideDrawerToggleButton';


describe('Navbar', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Navbar/>));

  it('should render a <header />', () => {
    expect(wrapper.find('header').length).toEqual(1);
  });

  it('should render a <nav />', () => {
    expect(wrapper.find('nav').length).toEqual(1);
  });

  it('should render a SideDrawerToggleButton component', () => {
    expect(wrapper.containsMatchingElement(<SideDrawerToggleButton/>)).toEqual(true)
  });

  it('should render 3 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(4)
  });

  it('should render a <ul />', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  });

  it('should render a <li />', () => {
    expect(wrapper.find('li').length).toEqual(2);
  });

  it('should render a <a />', () => {
    expect(wrapper.find('a').length).toEqual(3);
  });
});
