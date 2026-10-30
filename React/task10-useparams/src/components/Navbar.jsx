import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>UsersHub</h2>

      <div>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/users" className="nav-link">
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;