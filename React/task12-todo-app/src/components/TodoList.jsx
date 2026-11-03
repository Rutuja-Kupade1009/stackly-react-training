
import React from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {

  const {
    filteredTodos,
    filter,
    setFilter,
    todos,
    clearAllTodos
  } = useTodos();

  return (
    <div className="todo-list">

      <div className="filter-section">

        {["All", "Completed", "Pending"].map((item) => (
          <button
            key={item}
            className={filter === item ? "active-filter" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}

      </div>

      <div className="todo-stats">
        <span>Total: {todos.length}</span>
        <span>
          Completed: {todos.filter(t => t.completed).length}
        </span>
        <span>
          Pending: {todos.filter(t => !t.completed).length}
        </span>
      </div>

      {filteredTodos.length === 0 ? (
        <p className="empty-message">
          No {filter.toLowerCase()} tasks found!
        </p>
      ) : (
        filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}

      {todos.length > 0 && (
        <button
          className="clear-btn"
          onClick={clearAllTodos}
        >
          Clear All Tasks
        </button>
      )}

    </div>
  );
};

export default TodoList;
