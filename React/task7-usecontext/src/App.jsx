
import { createContext, useState } from "react";
import Form from "./Form";
import "./App.css";

export const FormContext = createContext();

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  age: "",
  gender: "",
  city: "",
  address: "",
  department: "",
  designation: "",
};

export default function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [theme, setTheme] = useState("light");
  const [submittedData, setSubmittedData] = useState(null);

  const updateField = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setSubmittedData(null);
  };

  const contextValue = {
    formData,
    updateField,
    theme,
    toggleTheme,
    handleSubmit,
    submittedData,
    resetForm,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <div className={`app ${theme}`}>
        <header className="header">
          <div>
            <h1>Employee Registration</h1>
            <p>Enter your personal and professional details</p>
          </div>
          <span className="header-tag">Task 7 · useContext</span>
        </header>

        <Form />
      </div>
    </FormContext.Provider>
  );
}

