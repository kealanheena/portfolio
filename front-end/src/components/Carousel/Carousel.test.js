import React from 'react';
import { shallow } from 'enzyme';

import Carousel from './Carousel';

describe('Carousel', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Carousel/>));

  it('should render 3 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(3)
  });
});