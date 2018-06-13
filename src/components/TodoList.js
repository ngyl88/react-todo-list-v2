import React, { Component } from "react";
import { todos } from "../seedData";
import Todo from "./Todo";
import Title from "./Title";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  render() {
    return (
      <div>
        <Title title="Todo List" />
        <ul>
          {this.state.todos.map((todo, index) => {
            return <Todo key={index} item={todo} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
