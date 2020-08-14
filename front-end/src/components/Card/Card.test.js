import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';


describe('Card', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Card img={'test_url'}/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2)
  });

  it('should render a <img />', () => {
    expect(wrapper.find('img').length).toEqual(1)
  });

  it('shouldn\'t render a <img /> if there is no img prop', () => {
    let wrapper_no_img = shallow(<Card/>);
    expect(wrapper_no_img.find('img').length).toEqual(0)
  });

  it('should render a <h4 />', () => {
    expect(wrapper.find('h4').length).toEqual(1)
  });

  it('should render a <p />', () => {
    expect(wrapper.find('p').length).toEqual(1)
  });

});