
import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  // GET: Fetch all users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // POST: Create new user
  const handleAddUser = async (formData) => {
    try {
      const newUser = {
        name: formData.name,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        address: { city: formData.city }
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const data = await response.json();

      // Update local UI because JSONPlaceholder does not persist data
      setUsers((prev) => [
        { ...data, id: Date.now(), address: newUser.address },
        ...prev
      ]);

      setMessage("User added successfully!");
      setShowForm(false);

    } catch (err) {
      setError(err.message);
    }
  };

  // PUT: Update existing user
  const handleUpdateUser = async (formData) => {
    try {
      const updatedUser = {
        ...editingUser,
        name: formData.name,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        website: formData.website,
        address: {
          ...editingUser.address,
          city: formData.city
        }
      };

      const response = await fetch(
        `${API_URL}/${editingUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedUser)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const data = await response.json();

      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingUser.id
            ? { ...data, id: editingUser.id }
            : user
        )
      );

      setEditingUser(null);
      setShowForm(false);
      setMessage("User updated successfully!");

    } catch (err) {
      setError(err.message);
    }
  };

  // DELETE: Remove user
  const handleDeleteUser = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      setUsers((prev) =>
        prev.filter((user) => user.id !== id)
      );

      setMessage("User deleted successfully!");

    } catch (err) {
      setError(err.message);
    }
  };

  const handleFormSubmit = async (formData) => {
    setError("");
    setMessage("");

    if (editingUser) {
      await handleUpdateUser(formData);
    } else {
      await handleAddUser(formData);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowForm(true);
    setMessage("");
    setError("");
  };

  const handleAddClick = () => {
    setEditingUser(null);
    setShowForm(true);
    setMessage("");
    setError("");
  };

  const handleCancel = () => {
    setEditingUser(null);
    setShowForm(false);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div>
          <h1>User Management System</h1>
          <p>Manage users using React Fetch API</p>
        </div>

        <button className="add-btn" onClick={handleAddClick}>
          + Add User
        </button>
      </header>

      {message && (
        <div className="success-message">{message}</div>
      )}

      {error && (
        <div className="error-message">{error}</div>
      )}

      {showForm && (
        <UserForm
          onSubmit={handleFormSubmit}
          editingUser={editingUser}
          onCancel={handleCancel}
        />
      )}

      <section className="users-section">
        <h2>All Users ({users.length})</h2>

        {loading ? (
          <p className="loading">Loading users...</p>
        ) : error && users.length === 0 ? (
          <button onClick={fetchUsers}>Retry</button>
        ) : (
          <UserList
            users={users}
            onEdit={handleEdit}
            onDelete={handleDeleteUser}
          />
        )}
      </section>
    </div>
  );
}

export default App;
