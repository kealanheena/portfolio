import React from 'react';
import { shallow } from 'enzyme';

import Homepage from './Homepage';
import Profile from './Profile/Profile';

describe('Homepage', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Homepage/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1)
  });

  it('should render a Profile component', () => {
    expect(wrapper.containsMatchingElement(<Profile/>)).toEqual(true)
  });

});
