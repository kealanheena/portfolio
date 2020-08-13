import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';


describe('Card', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Card/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1)
  });

  it('should render a <h2 />', () => {
    expect(wrapper.find('h2').length).toEqual(1)
  });

});