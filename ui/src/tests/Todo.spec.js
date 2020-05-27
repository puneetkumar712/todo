import { shallow, configure, mount } from "enzyme"
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import Todo from "../components/Todo";
import TodoList from "../components/TodoList";
configure({ adapter: new Adapter() });


describe('Todo component', () => {

    it("Should have input box and button", ()=> {

        const wrapper = shallow(<Todo/>)
        expect(wrapper.find("#todoInput")).toHaveLength(1);
        expect(wrapper.find("#addTodo").text()).toEqual("Add");
    });

    it("Click Add should add Todo in Todo List", ()=> {

        // Todo.prototype.input = "Complete React"
        const wrapper = mount(<Todo/>)
        expect(wrapper.find("#todoInput")).toHaveLength(1);
        wrapper.find('#todoInput').instance().value = "Complete React"
        wrapper.find('button').simulate('click');

        wrapper.find('#todoInput').instance().value = "Complete AWS"
        wrapper.find('button').simulate('click');

        console.log(wrapper.find(TodoList).html())
        expect(wrapper.find(TodoList).find('li').at(0).text()).toEqual('Complete React');

    });
})