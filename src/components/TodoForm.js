import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
  });

  const inputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task) {
      addTodo({ ...todo, id: Math.floor(Math.random() * 99999) });
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        className="form-input"
        type="text"
        placeholder="Ajouter une tâche"
        value={todo.task}
        onChange={inputChange}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default TodoForm;
