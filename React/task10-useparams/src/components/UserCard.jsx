import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="user-card">

      <div className="user-avatar">
        {user.name.charAt(0)}
      </div>

      <h3>{user.name}</h3>

      <p><strong>ID:</strong> {user.id}</p>

      <p><strong>Username:</strong> {user.username}</p>

      <p><strong>Email:</strong> {user.email}</p>

      <p><strong>City:</strong> {user.address.city}</p>

      <Link to={`/users/${user.id}`} className="details-btn">
        View Details
      </Link>

    </div>
  );
}

export default UserCard;