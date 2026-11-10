
import React, { useEffect, useState } from "react";

function UserForm({ onSubmit, editingUser, onCancel }) {
  const initialForm = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    city: ""
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name || "",
        username: editingUser.username || "",
        email: editingUser.email || "",
        phone: editingUser.phone || "",
        website: editingUser.website || "",
        city: editingUser.address?.city || ""
      });
    } else {
      setFormData(initialForm);
    }

    setErrors({});
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = `${key} is required`;
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formData);

    setFormData(initialForm);
  };

  return (
    <div className="form-card">
      <h2>{editingUser ? "Edit User" : "Add New User"}</h2>

      <form onSubmit={handleSubmit}>
        {[
          ["name", "Full Name"],
          ["username", "Username"],
          ["email", "Email"],
          ["phone", "Phone"],
          ["website", "Website"],
          ["city", "City"]
        ].map(([field, label]) => (
          <div className="form-group" key={field}>
            <label>{label}</label>

            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${label.toLowerCase()}`}
            />

            {errors[field] && (
              <span className="error-text">{errors[field]}</span>
            )}
          </div>
        ))}

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            {editingUser ? "Update User" : "Add User"}
          </button>

          {editingUser && (
            <button
              type="button"
              className="cancel-btn"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default UserForm;
