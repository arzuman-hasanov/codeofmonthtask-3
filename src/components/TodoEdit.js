import React, { useState } from "react";

export const TodoEdit = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);

    setValue("");
  };
  return (
    <form className="Container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todoInput"
        value={value}
        placeholder="Update todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn">
        Update
      </button>
    </form>
  );
};
