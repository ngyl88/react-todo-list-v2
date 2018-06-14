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
    const list = this.state.todos;
    list[list.indexOf(todo)].isCompleted = true;
    this.setState({
      todos: list
    });
  }

  addTodo() {
    const newTodo = { name: this.state.inputValue, isCompleted: false };
    this.setState({
      todos: [...this.state.todos, newTodo],
      inputValue: ""
    });
  }

  handleNewTodoChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
}

export default TodoList;
