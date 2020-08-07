import React from 'react';
import { shallow } from 'enzyme';

import Navbar from './Navbar';


describe('Navbar', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Navbar/>));

  it('should render a <header />', () => {
    expect(wrapper.find('header').length).toEqual(1)
  });
});