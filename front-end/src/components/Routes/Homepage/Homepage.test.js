import React from 'react';
import { shallow } from 'enzyme';

import Homepage from './Homepage';
import Profile from './Profile/Profile';
import Hobbies from './Hobbies/Hobbies';

describe('Homepage', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Homepage/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2)
  });

  it('should render a Profile component', () => {
    expect(wrapper.containsMatchingElement(<Profile/>)).toEqual(true)
  });

  it('should render a Hobbies component', () => {
    expect(wrapper.containsMatchingElement(<Hobbies/>)).toEqual(true)
  });

});
