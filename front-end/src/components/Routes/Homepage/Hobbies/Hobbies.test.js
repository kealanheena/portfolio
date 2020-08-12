import React from 'react';
import { shallow } from 'enzyme';

import Hobbies from './Hobbies';
import HobbiesData from './HobbiesData/HobbiesData';

describe('Hobbies', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Hobbies/>));

  it('should render an amount of <div />\'s equal to the length of HobbiesData plus one', () => {
    let amountOfDivs = HobbiesData.length + 1;
    expect(wrapper.find('div').length).toEqual(amountOfDivs);
  });

});
