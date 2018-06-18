import React, { Component } from "react";
import { todos } from "../seedData";
import Title from "./Title";
import Todo from "./Todo";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      inputValue: ""
    };
  }

  render() {
    return (
      <div>
        <Title title="Todo List" />
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                item={todo}
                handleClick={() => this.handleClick(todo)}
              />
            );
          })}
        </ul>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={event => this.handleNewTodoChange(event)}
        />
        <button onClick={() => this.addTodo()}>Add Todo</button>
      </div>
    );
  }

  handleClick(todo) {
    const index = this.state.todos.indexOf(todo);
    const updatedTodo = {
      ...todo,
      isCompleted: true
    };

    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        updatedTodo,
        ...this.state.todos.slice(index)
      ]
    });
  }

  addTodo() {
    const newTodo = {
      name: this.state.inputValue,
      isCompleted: false
    };
    console.log(newTodo);
    this.setState({
      todos: [...this.state.todos, newTodo],
      inputValue: ""
    });
    console.log(this.state);
  }

  handleNewTodoChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
}

export default TodoList;
