
import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

  // useState: Retrieve todos from Local Storage
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("All");
  const [editingTodo, setEditingTodo] = useState(null);

  // useEffect: Save todos whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add Todo
  const addTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

    if (editingTodo?.id === id) {
      setEditingTodo(null);
    }
  };

  // Complete / Pending Todo
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Edit Todo
  const updateTodo = (id, newTitle) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTitle }
          : todo
      )
    );

    setEditingTodo(null);
  };

  // Clear All Todos
  const clearAllTodos = () => {
    setTodos([]);
    setEditingTodo(null);
  };

  // Filter Todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.completed;
    if (filter === "Pending") return !todo.completed;
    return true;
  });

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        filter,
        setFilter,
        addTodo,
        deleteTodo,
        toggleTodo,
        updateTodo,
        editingTodo,
        setEditingTodo,
        clearAllTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// Custom Hook for accessing Context
export const useTodos = () => {
  return useContext(TodoContext);
};
