import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {findWithClass} from 'react-shallow-testutils';
import Header from './index';

const mockData = { logo: "Boombasket",
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

describe('Header Spec', () => {
  beforeEach(() => {
    output = render(<Header logo={mockData.logo} navList={mockData.navList} />);
  });
  it('should have 5 children', () => {
    const header = findWithClass(output, 'header');
    expect(header.props.children.length).toEqual(5);
  });

});
