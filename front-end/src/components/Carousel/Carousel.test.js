import React from 'react';
import { shallow } from 'enzyme';

import Carousel from './Carousel';
import LeftArrow from './LeftArrow/LeftArrow';
import RightArrow from './RightArrow/RightArrow';


describe('Carousel', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Carousel/>));

  it('should render 3 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(3)
  });

  it('should render a LeftArrow component', () => {
    expect(wrapper.containsMatchingElement(<LeftArrow/>)).toEqual(true)
  });

  it('should render a RightArrow component', () => {
    expect(wrapper.containsMatchingElement(<RightArrow/>)).toEqual(true)
  });
});
