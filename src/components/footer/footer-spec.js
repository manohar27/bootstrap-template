import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {findWithClass} from 'react-shallow-testutils';
import Footer from './index';
import mockData from '../../../dist/mock-content.json';

let output;
const render = (jsx) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
};

describe('Footer Spec', () => {
  beforeEach(() => {
    output = render(<Footer label={mockData.footer[0].label} items={mockData.footer[0].items} />);
  });
 it('should have correct class', () => {
    const element = findWithClass(output, 'footer');
    expect(element.props.className.split(" ")).toContain('footer');
  });
 it('should have correct label', () => {
    const element = findWithClass(output, 'group-label');
    expect(element.props.children).toContain(mockData.footer[0].label);
 });
});
