import React from 'react';
import { shallow } from 'enzyme';

import CreateProjectPage from './CreateProjectPage';

describe('CreateProjectPage', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<CreateProjectPage data={[]}/>));

  it('should render a <form />', () => {
    expect(wrapper.find('from').length).toEqual(1);
  });

  it('should render a <label />', () => {
    expect(wrapper.find('label').length).toEqual(6);
  });

  it('should render a <input />', () => {
    expect(wrapper.find('input').length).toEqual(7);
  });


});
