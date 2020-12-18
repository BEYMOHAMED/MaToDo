import React from "react";

const Todo = ({ todo, removeTodo }) => {
  const remove = () => {
    removeTodo(todo.id);
  };

  return (
    <div className="todo">
      <p>{todo.task}</p>
      <input type="checkbox" className="check" onClick={remove} />
    </div>
  );
};

export default Todo;
