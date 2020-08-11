import React from 'react';
import { shallow } from 'enzyme';

import SideDrawer from './SideDrawer';


describe('SideDrawer', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<SideDrawer/>));

  it('should render a <nav />', () => {
    expect(wrapper.find('nav').length).toEqual(1);
  });

  it('should render a <ul />', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  });

  it('should render a <li />', () => {
    expect(wrapper.find('li').length).toEqual(2);
  });

  it('should render a <a />', () => {
    expect(wrapper.find('a').length).toEqual(2);
  });
});