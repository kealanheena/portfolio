import React from 'react';
import { shallow } from 'enzyme';

import Projects from './Projects';
import Carousel from '../../../Carousel/Carousel';


describe('Projects', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Projects data={[]}/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <h2 />', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  });

  it('should render a <h3 />', () => {
    expect(wrapper.find('h3').length).toEqual(2);
  });


  it('should render a Carousel component', () => {
    expect(wrapper.containsMatchingElement(<Carousel/>)).toEqual(true);
  });

});
