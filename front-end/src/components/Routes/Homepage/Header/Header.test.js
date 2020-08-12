import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';


describe('Header', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Header/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2)
  });

  it('should render a <h1 />', () => {
    expect(wrapper.find('h1').length).toEqual(1)
  });

  it('should render a <h2 />', () => {
    expect(wrapper.find('h2').length).toEqual(1)
  });

  it('should render a <img />', () => {
    expect(wrapper.find('img').length).toEqual(1)
  });

});
