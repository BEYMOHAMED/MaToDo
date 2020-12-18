import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className="todolist">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;
