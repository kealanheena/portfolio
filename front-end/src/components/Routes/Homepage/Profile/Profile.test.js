import React from 'react';
import { shallow } from 'enzyme';

import Profile from './Profile';

describe('Profile', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Profile/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});