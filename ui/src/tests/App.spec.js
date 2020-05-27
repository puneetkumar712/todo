// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import App from '../App';
import React from 'react';


configure({ adapter: new Adapter() });

describe("App Test", ()=> {

    it("Should render", ()=> {

        const wrapper = shallow(<App />);
        expect(wrapper.find('.App')).toHaveLength(1)
        // expect(wrapper.contains(<div>Dummy data</div>)).toBeTruthy();
        // console.log(wrapper.html())
        expect(wrapper).not.toBeNull();
    })



})