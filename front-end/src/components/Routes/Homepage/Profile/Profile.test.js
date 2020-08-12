import React from 'react';
import { shallow } from 'enzyme';

import Profile from './Profile';

describe('Profile', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Profile/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <h3 />', () => {
    expect(wrapper.find('h3').length).toEqual(1);
  });

  it('should render a <p />', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });
});