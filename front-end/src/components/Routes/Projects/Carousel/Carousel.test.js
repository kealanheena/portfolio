import React from 'react';
import { shallow, mount } from 'enzyme';

import Carousel from './Carousel';
import LeftArrow from './LeftArrow/LeftArrow';
import RightArrow from './RightArrow/RightArrow';
import Slide from './Slide/Slide'

import CarouselData from './CarouselData/CarouselData';


describe('Carousel Shallow', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Carousel data={CarouselData}/>));

  it('should render 3 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(3)
  });

  it('should render a LeftArrow component', () => {
    expect(wrapper.containsMatchingElement(<LeftArrow/>)).toEqual(true)
  });

  it('should render a RightArrow component', () => {
    expect(wrapper.containsMatchingElement(<RightArrow/>)).toEqual(true)
  });

  it('should render a Slide component', () => {
    expect(wrapper.containsMatchingElement(<Slide/>)).toEqual(true)
  });
});

describe('Carousel Mount', () => {
  let wrapper;

  beforeEach(() => wrapper = mount(<Carousel data={CarouselData}/>));

  it('it should have a activeIndex of 0 when initially rendered', () => {
    expect(wrapper.state().activeIndex).toEqual(0);
  });

  it('it should have a activeIndex of CarouselData.length - 1 after goToPrevState is called', () => {
    wrapper.instance().goToPrevSlide();
    expect(wrapper.state().activeIndex).toEqual(CarouselData.length - 1);
  });

  it('it should have a activeIndex of 0 after goToPrevState is called, if activeIndex is equal to 1', () => {
    wrapper.setState({ activeIndex: 1 })
    wrapper.instance().goToPrevSlide();
    expect(wrapper.state().activeIndex).toEqual(0);
  });

  it('it should have a activeIndex of 1 after goToNextState is called', () => {
    wrapper.instance().goToNextSlide();
    expect(wrapper.state().activeIndex).toEqual(1);
  });

  it('it should have a activeIndex of 0 after goToNextState is called, if the activeIndex is equal to the CarouselData.length - 1', () => {
    wrapper.setState({ activeIndex: CarouselData.length - 1 })
    wrapper.instance().goToNextSlide();
    expect(wrapper.state().activeIndex).toEqual(0);
  });

});
