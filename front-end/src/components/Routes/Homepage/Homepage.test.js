import React from 'react';
import { shallow } from 'enzyme';

import Homepage from './Homepage';
import Profile from './Profile/Profile';
import Projects from './Projects/Projects';
import Hobbies from './Hobbies/Hobbies';

import CarouselData from '../../Carousel/CarouselData/CarouselData';

describe('Homepage', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Homepage data={CarouselData} />));

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
