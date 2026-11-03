
import React from "react";
import { useTodos } from "../context/TodoContext";

const TodoItem = ({ todo }) => {

  const {
    toggleTodo,
    deleteTodo,
    setEditingTodo
  } = useTodos();

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>

      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <span>{todo.title}</span>
      </div>

      <div className="todo-actions">
        <button
          className="edit-btn"
          onClick={() => setEditingTodo(todo)}
          disabled={todo.completed}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>

    </div>
  );
};

export default TodoItem;
