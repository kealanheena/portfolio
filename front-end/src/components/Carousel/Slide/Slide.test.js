import React from 'react';
import { shallow } from 'enzyme';

import Slide from './Slide';
import CarouselData from '../CarouselData/CarouselData';

describe('Slide', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Slide data={CarouselData}/>));

  it('should render a <section />', () => {
    expect(wrapper.find('section').length).toEqual(1);
  });

  it('should render an amount of <div />\'s equal to 3 times the length of the data', () => {
    const amountOfDivs = 3 * CarouselData.length;
    expect(wrapper.find('div').length).toEqual(amountOfDivs);
  });

  it('should render an amount of <h1 />\'s equal to the length of the data', () => {
    const amountOfH1s = CarouselData.length;
    expect(wrapper.find('h1').length).toEqual(amountOfH1s);
  });

  it('should render an amount of <p />\'s equal to the length of the data', () => {
    const amountOfPs = CarouselData.length;
    expect(wrapper.find('p').length).toEqual(amountOfPs);
  });
});