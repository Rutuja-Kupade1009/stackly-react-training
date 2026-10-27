
import { useContext } from "react";
import { FormContext } from "./App";

export default function Button({ type = "button", children, onClick, variant = "" }) {
  const { theme, toggleTheme } = useContext(FormContext);

  const isThemeButton = variant === "theme";

  return (
    <button
      type={type}
      className={`btn ${isThemeButton ? "theme-btn" : ""}`}
      onClick={isThemeButton ? toggleTheme : onClick}
      aria-label={
        isThemeButton
          ? `Switch to ${theme === "light" ? "dark" : "light"} mode`
          : undefined
      }
    >
      {isThemeButton
        ? theme === "light"
          ? "🌙 Dark Mode"
          : "☀️ Light Mode"
        : children}
    </button>
  );
}

