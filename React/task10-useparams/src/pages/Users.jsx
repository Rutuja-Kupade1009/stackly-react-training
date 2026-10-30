import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

function Users() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <h2 className="message">Loading users...</h2>;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <div className="container">

      <h1>Our Users</h1>

      <p className="subtitle">
        Explore our user directory and view individual profiles.
      </p>

      <div className="user-grid">

        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}

      </div>

    </div>
  );
}

export default Users;