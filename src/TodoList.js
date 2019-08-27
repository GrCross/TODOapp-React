import React from "react";
import { Todo } from "./Todo";

function TodoList(props) {
  const todos = props.todos;
  const listItems = todos.map(todo => (
    <div>
      <li> todo.text </li>
      <li> todo.priority </li>
      <li> todo.dueDate </li>
    </div>
  ));
}
