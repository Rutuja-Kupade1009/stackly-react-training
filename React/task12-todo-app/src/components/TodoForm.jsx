
import React, { useState, useRef, useEffect } from "react";
import { useTodos } from "../context/TodoContext";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  const {
    addTodo,
    updateTodo,
    editingTodo,
    setEditingTodo
  } = useTodos();

  // Focus input automatically
  useEffect(() => {
    inputRef.current?.focus();
  }, [editingTodo]);

  // Load existing task when editing
  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.title);
    } else {
      setInput("");
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    // Form validation
    if (!trimmedInput) {
      setError("Please enter a task!");
      inputRef.current?.focus();
      return;
    }

    if (editingTodo) {
      updateTodo(editingTodo.id, trimmedInput);
    } else {
      addTodo(trimmedInput);
    }

    setInput("");
    setError("");
    setEditingTodo(null);
    inputRef.current?.focus();
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your task..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          maxLength={150}
        />

        <button type="submit">
          {editingTodo ? "Update Task" : "Add Task"}
        </button>

        {editingTodo && (
          <button
            type="button"
            className="cancel-btn"
            onClick={() => setEditingTodo(null)}
          >
            Cancel
          </button>
        )}
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default TodoForm;
