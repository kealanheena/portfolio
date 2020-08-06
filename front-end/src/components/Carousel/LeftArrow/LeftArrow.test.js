import React from 'react';
import { shallow } from 'enzyme';

import LeftArrow from './LeftArrow';

describe('Profile', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<LeftArrow/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});