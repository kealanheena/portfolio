import React from 'react';
import { shallow } from 'enzyme';

import RightArrow from './RightArrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('RightArrow', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<RightArrow/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render FontAwesomeIcon component', () => {
    expect(wrapper.containsMatchingElement(<FontAwesomeIcon />)).toEqual(true)
  });
});