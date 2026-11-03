
import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="app-container">

        <div className="todo-card">

          <h1>My Todo List</h1>
          <p className="subtitle">
            Organize your daily tasks
          </p>

          <TodoForm />

          <TodoList />

        </div>

      </div>
    </TodoProvider>
  );
}

export default App;
