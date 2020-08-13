import React from 'react';
import { shallow } from 'enzyme';

import Hobbies from './Hobbies';
import HobbiesData from './HobbiesData/HobbiesData';
import Card from '../../../Card/Card';

describe('Hobbies', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Hobbies/>));

  it('should render an amount of <div />\'s equal to the length of HobbiesData plus two', () => {
    let amountOfDivs = HobbiesData.length + 2;
    expect(wrapper.find('div').length).toEqual(amountOfDivs);
  });

  it('should render a <h3 />', () => {
    expect(wrapper.find('h3').length).toEqual(1);
  });

  it('should render a Card component', () => {
    expect(wrapper.containsMatchingElement(<Card/>)).toEqual(true)
  });

});
