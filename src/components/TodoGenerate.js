import React, { useState } from "react";

export const TodoGenerate = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value !== "") {
      addTodo(value);
      setValue("");
    } else {
      alert("Write a to do");
    }
  };
  return (
    <form className="Container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todoInput"
        value={value}
        placeholder="What to do?"
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};
