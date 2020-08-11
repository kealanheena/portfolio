import React from 'react';
import { shallow } from 'enzyme';

import SideDrawerToggleButton from './SideDrawerToggleButton';


describe('SideDrawerToggleButton', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<SideDrawerToggleButton/>));

  it('should render a <button />', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });
});