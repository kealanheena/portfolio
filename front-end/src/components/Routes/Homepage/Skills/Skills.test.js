import React from 'react';
import { shallow } from 'enzyme';

import Skills from './Skills';
import HobbiesData from '../Hobbies/HobbiesData/HobbiesData';
import Card from '../../../Card/Card';

describe('Skills', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Skills/>));

  it('should render 2 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('should render a <h2 />', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  });

});
