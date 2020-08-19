import React from 'react';
import { shallow } from 'enzyme';

import Alert from './Alert';

describe('Alert', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Alert handleClick={jest.fn()}/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <span />', () => {
    expect(wrapper.find('span').length).toEqual(1);
  });

  it('should render a <strong />', () => {
    expect(wrapper.find('strong').length).toEqual(1);
  });

});
