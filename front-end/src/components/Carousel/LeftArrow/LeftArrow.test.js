import React from 'react';
import { shallow } from 'enzyme';

import LeftArrow from './LeftArrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('LeftArrow', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<LeftArrow/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render FontAwesomeIcon component', () => {
    expect(wrapper.containsMatchingElement(<FontAwesomeIcon />)).toEqual(true)
  });
});
