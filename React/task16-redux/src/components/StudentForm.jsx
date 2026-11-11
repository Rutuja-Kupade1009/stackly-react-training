
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../features/students/studentSlice";

function StudentForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    role: "",
    department: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => !value.trim())) {
      alert("Please fill all fields");
      return;
    }

    dispatch(addStudent(formData));

    alert("Student registered successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      role: "",
      department: ""
    });
  };

  return (
    <div className="form-card">
      <h2>Student Registration</h2>
      <p className="subtitle">
        Enter your details to register
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Enter a 10-digit phone number"
              required
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Tester">Tester</option>
            </select>
          </div>

          <div className="form-group">
            <label>Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="IT">IT</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>

        </div>

        <button type="submit" className="submit-btn">
          Register Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
