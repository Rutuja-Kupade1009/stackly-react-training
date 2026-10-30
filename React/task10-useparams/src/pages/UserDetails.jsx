import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function UserDetails() {

  // Get dynamic ID from URL
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    setLoading(true);
    setUser(null);
    setError("");

    // Validate user ID
    if (!/^[1-9]\d*$/.test(id) || Number(id) > 10) {
      setError("User Not Found");
      setLoading(false);
      return;
    }

    // Fetch selected user
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User Not Found");
        }

        return response.json();
      })
      .then((data) => {

        if (!data.id) {
          throw new Error("User Not Found");
        }

        setUser(data);
        setLoading(false);

      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

  }, [id]);

  // Loading condition
  if (loading) {
    return <h2 className="message">Loading user details...</h2>;
  }

  // Invalid ID condition
  if (error || !user) {
    return (
      <div className="details-container">
        <h2>User Not Found</h2>

        <p>The requested user does not exist.</p>

        <Link to="/users" className="back-btn">
          Back to Users
        </Link>
      </div>
    );
  }

  // Display user details
  return (

    <div className="details-container">

      <div className="profile-avatar">
        {user.name.charAt(0)}
      </div>

      <h1>{user.name}</h1>

      <p className="username">@{user.username}</p>

      <div className="details-card">

        <h2>User Information</h2>

        <p><strong>ID:</strong> {user.id}</p>

        <p><strong>Name:</strong> {user.name}</p>

        <p><strong>Username:</strong> {user.username}</p>

        <p><strong>Email:</strong> {user.email}</p>

        <p><strong>Phone:</strong> {user.phone}</p>

        <p>
          <strong>Website:</strong>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noreferrer"
          >
            {user.website}
          </a>
        </p>

        <p><strong>City:</strong> {user.address.city}</p>

        <p><strong>Street:</strong> {user.address.street}</p>

        <p><strong>Company:</strong> {user.company.name}</p>

      </div>

      <Link to="/users" className="back-btn">
        ← Back to Users
      </Link>

    </div>

  );
}

export default UserDetails;