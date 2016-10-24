import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {findWithClass} from 'react-shallow-testutils';
import Stamp from './index';

const mockData = { title: 'Stamp 1',
image: '1.jpg'
};
let output;

const render = (jsx) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
};

describe('Stamp Spec', () => {
  beforeEach(() => {
    output = render(<Stamp title={mockData.title} image={mockData.image} />);
  });
 it('should have correct class', () => {
    const element = findWithClass(output, 'stamp');
    expect(element.props.className.split(" ")).toContain('stamp');
  });
 it('should have correct label', () => {
    const element = findWithClass(output, 'stamp-label');
    expect(element.props.children).toEqual(mockData.title);
 });
});
