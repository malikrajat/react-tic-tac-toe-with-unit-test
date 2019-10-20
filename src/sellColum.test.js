import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from './sellColum';

configure({ adapter: new Adapter() });

describe("App component test ", () => {

  it("Find class name by shallow method", () => {
    const wrapper = shallow(<SellColum row={0} col={0} turn="X" setTurn={changeTurn}/>);
    expect(wrapper.hasClass('sell')).toEqual(true);
  });

  it('sellColum snapshot renders', () => {
    const component = renderer.create(<sellColum/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});