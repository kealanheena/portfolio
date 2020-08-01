import React from 'react';
import { shallow } from 'enzyme';

import ProfileContainer from './ProfileContainer';

describe("MainContainer", () => {
  let wrapper;

  beforeEach(() => { wrapper = shallow(<ProfileContainer/>) });

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toBe(1);
  });
  
  it("should render a Container Component", () => {
    expect(wrapper.find("Container").length).toEqual(1);
  });

  it("should render a Container Component", () => {
    expect(wrapper.find("Card").length).toEqual(1);
  });
  
});
