import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from './App';

configure({ adapter: new Adapter() });

describe("App component test ", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render App component", () => {
    const wrapper = shallow(<App />);
  });

  it("Find class name by shallow mrthod", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.hasClass('App')).toEqual(true);
  });

  it('snapshot renders', () => {
    const component = renderer.create(<App/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});