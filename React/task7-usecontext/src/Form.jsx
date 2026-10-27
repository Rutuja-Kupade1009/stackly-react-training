
import { useContext } from "react";
import { FormContext } from "./App";
import Field from "./Field";
import Button from "./Button";

export default function Form() {
  const { theme, handleSubmit, submittedData, resetForm } =
    useContext(FormContext);

  return (
    <main className="main-content">
      <div className="form-card">
        <div className="section-heading">
          <div>
            <h2>Personal Information</h2>
            <p>Fields marked with * are required.</p>
          </div>

          <Button variant="theme" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <Field label="First Name *" name="firstName" />
            <Field label="Last Name *" name="lastName" />

            <Field
              label="Email Address *"
              name="email"
              type="email"
            />

            <Field
              label="Mobile Number *"
              name="mobile"
              type="tel"
            />

            <Field label="Age *" name="age" type="number" />

            <Field
              label="Gender *"
              name="gender"
              options={["Male", "Female", "Other", "Prefer not to say"]}
            />

            <Field
              label="City *"
              name="city"
              options={["Pune", "Mumbai", "Bengaluru", "Hyderabad", "Other"]}
            />

            <Field
              label="Department *"
              name="department"
              options={[
                "Engineering",
                "Human Resources",
                "Finance",
                "Marketing",
                "Operations",
              ]}
            />

            <Field
              label="Designation *"
              name="designation"
              options={[
                "Software Engineer",
                "Senior Software Engineer",
                "Team Lead",
                "Manager",
                "Other",
              ]}
            />

            <div className="address-field">
              <Field label="Address *" name="address" />
            </div>
          </div>

          <div className="form-actions">
            <Button type="submit">Submit Details</Button>
            <Button onClick={resetForm}>Reset Form</Button>
          </div>
        </form>
      </div>

      {submittedData && (
        <section className="result-card" aria-live="polite">
          <h2>Submitted Details</h2>
          <p className="success-message">
            Form submitted successfully!
          </p>

          <div className="result-grid">
            {Object.entries(submittedData).map(([key, value]) => (
              <div className="result-item" key={key}>
                <span>{key.replace(/([A-Z])/g, " $1")}</span>
                <strong>{value || "—"}</strong>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="footer">
        React Hooks Practice · Current theme: {theme}
      </footer>
    </main>
  );
}

