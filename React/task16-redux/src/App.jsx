
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  return (
    <div className="app-container">

      <header className="app-header">
        <h1>Redux Toolkit Application</h1>
        <p>Student Registration & Management System</p>
      </header>

      <main className="main-content">
        <StudentForm />

        <StudentList />
      </main>

      <footer>
        <p>Built with React.js & Redux Toolkit</p>
      </footer>

    </div>
  );
}

export default App;
