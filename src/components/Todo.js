import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.done ? "done" : ""} todo-name`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="faPenToSquare"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="faTrashCan"
          icon={faX}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
