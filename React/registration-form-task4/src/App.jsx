import { useState } from "react";
import "./App.css";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
  dob: "",
  gender: "",
  address: "",
  city: "",
  pincode: "",
};

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSuccess("");

    // Revalidate a field when the user changes it
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[name];

      if (name === "password") {
        delete updated.confirmPassword;
      }

      return updated;
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[a-zA-Z ]+$/.test(formData.firstName.trim())) {
      newErrors.firstName = "Use letters only";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[a-zA-Z ]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = "Use letters only";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters";
    } else if (
      !/[A-Z]/.test(formData.password) ||
      !/[a-z]/.test(formData.password) ||
      !/\d/.test(formData.password)
    ) {
      newErrors.password =
        "Include uppercase, lowercase, and a number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    } else {
      const birthDate = new Date(formData.dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (birthDate > today) {
        newErrors.dob = "Date of birth cannot be in the future";
      } else if (age < 18) {
        newErrors.dob = "You must be at least 18 years old";
      }
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
    }

    if (formData.address.trim().length < 10) {
      newErrors.address = "Address must contain at least 10 characters";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    } else if (!/^[a-zA-Z ]+$/.test(formData.city.trim())) {
      newErrors.city = "Enter a valid city name";
    }

    if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit PIN code";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (validateForm()) {
      setSuccess("Registration successful! Your form has been submitted.");
      console.log("Registration Data:", {
        ...formData,
        password: "[REDACTED]",
        confirmPassword: "[REDACTED]",
      });
    }
  };

  const handleReset = () => {
    setFormData(initialForm);
    setErrors({});
    setSuccess("");
  };

  const renderError = (field) =>
    errors[field] && (
      <small className="error">{errors[field]}</small>
    );

  return (
    <div className="page">
      <div className="form-card">
        <div className="form-header">
          <div className="logo">Registration Form</div>
          <h1>Create Account</h1>
          <p>Register today to get started</p>
        </div>

        {success && (
          <div className="success-message" role="status">
            ✓ {success}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="firstName">First Name *</label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                autoComplete="given-name"
              />
              {renderError("firstName")}
            </div>

            <div className="field">
              <label htmlFor="lastName">Last Name *</label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                autoComplete="family-name"
              />
              {renderError("lastName")}
            </div>

            <div className="field full-width">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                autoComplete="email"
              />
              {renderError("email")}
            </div>

            <div className="field">
              <label htmlFor="mobile">Mobile Number *</label>
              <input
                id="mobile"
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="10-digit number"
                maxLength={10}
                inputMode="numeric"
                autoComplete="tel"
              />
              {renderError("mobile")}
            </div>

            <div className="field">
              <label htmlFor="dob">Date of Birth *</label>
              <input
                id="dob"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                autoComplete="bday"
              />
              {renderError("dob")}
            </div>

            <div className="field">
              <label htmlFor="password">Password *</label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 8 characters"
                autoComplete="new-password"
              />
              {renderError("password")}
            </div>

            <div className="field">
              <label htmlFor="confirmPassword">
                Confirm Password *
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                autoComplete="new-password"
              />
              {renderError("confirmPassword")}
            </div>

            <div className="field">
              <label htmlFor="gender">Gender *</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">
                  Prefer not to say
                </option>
              </select>
              {renderError("gender")}
            </div>

            <div className="field">
              <label htmlFor="city">City *</label>
              <input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                autoComplete="address-level2"
              />
              {renderError("city")}
            </div>

            <div className="field full-width">
              <label htmlFor="address">Full Address *</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your complete address"
                rows={3}
                autoComplete="street-address"
              />
              {renderError("address")}
            </div>

            <div className="field">
              <label htmlFor="pincode">PIN Code *</label>
              <input
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="6-digit PIN code"
                maxLength={6}
                inputMode="numeric"
                autoComplete="postal-code"
              />
              {renderError("pincode")}
            </div>
          </div>

          <p className="required-note">* All fields are required.</p>

          <div className="button-group">
            <button type="submit" className="submit-btn">
              Create Account
            </button>

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset Form
            </button>
          </div>
        </form>

        <p className="footer-text">
          Registration Form · React useState Practice
        </p>
      </div>
    </div>
  );
}

export default App;
