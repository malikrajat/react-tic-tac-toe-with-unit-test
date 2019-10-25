import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import SellColum from './sellColum';

configure({ adapter: new Adapter() });

describe("SellColumn component test ", () => {
  let wrapper;
  beforeEach(() => {
    const changeTurn = () => { console.log('adsa') }
    wrapper = shallow(<SellColum row={0} col={0} turn="X" setTurn={changeTurn}/>);
  });
  it('Check for default inner text of sell', () => {
    const innerText = wrapper.find('span').text();
    expect(innerText).toEqual('');
  });
  it('check for added class/Inner text after clicking on sell of game box', () => {
    const innerText = wrapper.find('span');
    innerText.simulate('click');
    const className = wrapper.props().children.props.className;
    expect(className).toEqual('sell X');

    const textOfSell = wrapper.find('span').text();
    expect(textOfSell).toEqual('X');    
  });
  it("Find class name by shallow method", () => {
    // const changeTurn = () => { console.log('adsa') }
    // const wrapper = shallow(<SellColum row={0} col={0} turn="X" setTurn={changeTurn}/>);
    const check = (wrapper.props().children.props.className === 'sell ')? true: false;
    expect(check).toEqual(true);
  });

  it('sellColum snapshot renders', () => {
    const changeTurn = () => { console.log('adsa') }
    const component = renderer.create(<SellColum row={0} col={0} turn="X" setTurn={changeTurn}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('count number of cell by class name on board', () =>{

  });
  it('Spyon function is being called on click', () =>{
    // wrapper.instance().nextTurn()
    // expect(wrapper.instance().nextTurn()).equals(true);
  });
});