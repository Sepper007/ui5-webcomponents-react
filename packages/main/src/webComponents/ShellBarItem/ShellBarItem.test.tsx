import { ShellBarItem } from '@ui5/webcomponents-react/lib/ShellBarItem';
import { mount } from 'enzyme';
import React from 'react';

describe('ShellBarItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mount(<ShellBarItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
