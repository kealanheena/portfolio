import React from 'react';
import { shallow } from 'enzyme';

import Backdrop from './Backdrop';


describe('Backdrop', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Backdrop/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

});
