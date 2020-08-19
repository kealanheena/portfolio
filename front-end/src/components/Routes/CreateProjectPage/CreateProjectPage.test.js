import React from 'react';
import { shallow } from 'enzyme';

import CreateProjectPage from './CreateProjectPage';

describe('CreateProjectPage', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<CreateProjectPage data={[]}/>));

  it('should render a <form />', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render 6 <label />\'s', () => {
    expect(wrapper.find('label').length).toEqual(6);
  });

  it('should render a <textarea />', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
  });

  it('should render 6 <input />\'s', () => {
    expect(wrapper.find('input').length).toEqual(6);
  });


});
