
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Increment counter
  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };

  // Decrement counter
  const decrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  // Reset counter
  const reset = () => {
    setCount(0);
  };

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <div className="counter-card">
        <h1>React Counter App</h1>

        <p className="subtitle">
          Manage your count with ease
        </p>

        {/* Theme Section */}
        <div className="theme-section">
          <p className="theme-label">
            Current Theme:{" "}
            <strong>
              {isDarkMode ? "Dark Mode" : "Light Mode"}
            </strong>
          </p>

          <button
            className="theme-button"
            onClick={toggleTheme}
          >
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Counter Display - Below Theme Section */}
        <div className="counter-display">
          <p>Current Count</p>
          <h2>{count}</h2>
        </div>

        {/* Counter Buttons */}
        <div className="counter-buttons">
          <button
            className="increment"
            onClick={increment}
          >
             Increment
          </button>

          <button
            className="decrement"
            onClick={decrement}
          >
             Decrement
          </button>

          <button
            className="reset"
            onClick={reset}
          >
             Reset
          </button>
        </div>

        <p className="footer-text">
          Built with React useState Hook
        </p>
      </div>
    </div>
  );
}

export default App;
