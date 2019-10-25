import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Board from './Board';
import SellColum from './sellColum';

configure({ adapter: new Adapter() });

describe("SellColumn component test ", () => {
  let wrapper, sellsList,compMount;
  beforeEach(() => {
    wrapper = shallow(<Board />);
    compMount = mount(<Board/>)
    const changeTurn = () => { console.log('adsa') }
    sellsList = shallow(<SellColum row={0} col={0} turn="X" setTurn={changeTurn}/>);
  });

  it('count number of row in board', () =>{
    expect(wrapper.props().children).toHaveLength(4)
  })

  it('matches the snapshot', () => {
    const tree = renderer.create(<Board />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('count number of column in row on board', () =>{
    // const innerText = wrapper.find('div.row');
    // console.log(wrapper.props().children[1].props.children);
    expect(wrapper.props().children[1].props.children).toHaveLength(3)
  })

});