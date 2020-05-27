import React, { Component } from "react";
import TodoList from "./TodoList";

class Todo extends Component {
  state = {
    todos: [],
  };

  constructor() {
    super();
    this.input = React.createRef();
  }

  render() {
    return (
      <div>
        <input type="text" id="todoInput" ref={this.input} />
        <button id="addTodo" onClick={this.addTodo}>
          Add
        </button>

        <div>
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }

  todoCounter = 0;
  addTodo = () => {
    console.log(this.input.current.value);
    const todo = this.input.current.value;
    const todos = [...this.state.todos, { id: ++this.todoCounter, name: todo }];
    this.setState({ todos });

    this.input.current.value = "";
  };
}

export default Todo;
