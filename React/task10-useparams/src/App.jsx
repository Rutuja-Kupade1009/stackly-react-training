import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Users />} />

        <Route path="/users" element={<Users />} />

        <Route path="/users/:id" element={<UserDetails />} />

        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;