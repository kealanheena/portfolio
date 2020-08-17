import React from 'react';
import { shallow } from 'enzyme';

import CreateProjectPage from './CreateProjectPage';

describe('CreateProjectPage', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<CreateProjectPage data={[]}/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <h3 />', () => {
    expect(wrapper.find('h3').length).toEqual(1);
  });

});
