
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div className="app-container">
      <div className="stopwatch-card">
        <div className="timer-icon">⏱</div>

        <h1>React Stopwatch</h1>
        <p className="subtitle">
          Every second counts. Make it productive!
        </p>

        <div className="timer-display">{formatTime()}</div>

        <p className="timer-status">
          {isRunning ? "Stopwatch is running" : "Stopwatch is paused"}
        </p>

        <div className="button-container">
          <button
            className="start-btn"
            onClick={handleStart}
            disabled={isRunning}
          >
            Start
          </button>

          <button
            className="pause-btn"
            onClick={handlePause}
            disabled={!isRunning}
          >
            Pause
          </button>

          <button className="reset-btn" onClick={handleReset}>
           Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
