
import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [image, setImage] = useState("");
  const fileInputRef = useRef(null);
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users.");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("Unable to load users. Please try again.");
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  function handleUploadClick() {
    fileInputRef.current?.click();
  }

  function handleImageChange(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      event.target.value = "";
      return;
    }

    setImage((previousImage) => {
      if (previousImage) {
        URL.revokeObjectURL(previousImage);
      }

      return URL.createObjectURL(file);
    });

    event.target.value = "";
  }

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  return (
    <div className="app">
      <header className="header">
        <h1>React Hooks Dashboard</h1>
        <p>
          API Integration with useEffect & Image Upload with useRef
        </p>
      </header>

      <main className="container">
        <section className="upload-section">
          <h2>Image Upload</h2>
          <p>Select an image to preview it here.</p>

          <div className="image-preview">
            {image ? (
              <img src={image} alt="Selected preview" />
            ) : (
              <div className="placeholder">
                <span>🖼️</span>
                <p>No image selected</p>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />

          <button
            type="button"
            className="upload-button"
            onClick={handleUploadClick}
          >
            {image ? "Change Image" : "Upload Image"}
          </button>
        </section>

       
        <section className="users-section">
          <div className="section-heading">
            <div>
              <h2>User Directory</h2>
              <p>Users fetched from JSONPlaceholder API</p>
            </div>

            <span className="user-count">
              {users.length} Users
            </span>
          </div>

          {loading && (
            <p className="status">Loading users...</p>
          )}

          {error && (
            <p className="error" role="alert">
              {error}
            </p>
          )}

          {!loading && !error && (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td className="name">{user.name}</td>
                      <td>{user.username}</td>

                      <td>
                        <a href={`mailto:${user.email}`}>
                          {user.email}
                        </a>
                      </td>

                      <td>{user.phone}</td>

                      <td>
                        <a
                          href={`https://${user.website}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {user.website}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      <footer>Built with React Hooks | Task 6</footer>
    </div>
  );
}
