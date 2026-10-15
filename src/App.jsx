import SelfIntroduction from "./components/SelfIntroduction";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a href="#" className="logo">
          Rutuja Kupade
        </a>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
        </nav>
      </header>

      <SelfIntroduction />
    </div>
  );
}

export default App;
