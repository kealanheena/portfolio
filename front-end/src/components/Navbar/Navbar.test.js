import React from 'react';
import { shallow } from 'enzyme';

import Navbar from './Navbar';


describe('Navbar', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Navbar/>));

  it('should render a <header />', () => {
    expect(wrapper.find('header').length).toEqual(1);
  });

  it('should render a <nav />', () => {
    expect(wrapper.find('nav').length).toEqual(1);
  });

  it('should render 3 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(3)
  });
});