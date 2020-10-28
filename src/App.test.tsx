import React, { Component } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

describe('App', () => {
  let container: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;
  
  beforeEach(() => {
    container = shallow(<App />);
  });

  it('should render a div', () => {
    expect(container.find('div').length).toEqual(1);
  });

  it('should render a launch list', () => {
    expect(container.find('LaunchList').length).toEqual(1);
  });

  it('should render a launch profile', () => {
    expect(container.find('LaunchProfile').length).toEqual(1);
  });
  
});

