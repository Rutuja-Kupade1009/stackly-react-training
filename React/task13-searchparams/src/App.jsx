import { Routes, Route, Navigate } from "react-router-dom";
import UserList from "./components/UserList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users?page=1" replace />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
}

export default App;