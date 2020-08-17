import React from 'react';
import { shallow } from 'enzyme';

import ProjectsPage from './ProjectsPage';

describe('ProjectsPage', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<ProjectsPage />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <h1 />', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should render a <img />', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('should render a <p />', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });

});
