import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {findWithClass, findAllWithType} from 'react-shallow-testutils';
import NavBar from './index';

const mockData = {
 navList: ["Home",
"Products",
"About Us",
"Contact"]};
let output;

const render = (jsx) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
};

describe('Navbar Spec', () => {
  beforeEach(() => {
    output = render(<NavBar list={mockData.navList} />);
  });
 it('should have correct class', () => {
    const element = findWithClass(output, 'navbar');
    expect(element.props.className.split(" ")).toContain('navbar');
  });
 it('should have 4 menu items', () => {
    const element = findAllWithType(output, 'ul');
    expect(element[0].props.children.length).toEqual(mockData.navList.length);
 });
 it('should have correct labels', () => {
    const element = findAllWithType(output, 'ul');
    element[0].props.children.map((item, index) => expect(item.props.children.props.children).toEqual(mockData.navList[index]));
 });
});
