import React from 'react';
import { shallow } from 'enzyme';

import Skills from './Skills';

let testData = [{
    id: 1,
    title: "Testing 1 .. 2 .. 3",
    description: "This is a test",
    github: "https://github.com/",
    stack: ["Express", "CSS"]
  }]

describe('Skills', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Skills data={[]}/>));

  it('should render 2 <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(9);
  });

  it('should render a <h2 />', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  });

  it('should render a <h3 />', () => {
    expect(wrapper.find('h3').length).toEqual(2);
  });

});
