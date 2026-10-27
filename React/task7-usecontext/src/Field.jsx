
import { useContext } from "react";
import { FormContext } from "./App";

export default function Field({ label, name, type = "text", options }) {
  const { formData, updateField } = useContext(FormContext);

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>

      {options ? (
        <select
          id={name}
          name={name}
          value={formData[name]}
          onChange={(e) => updateField(name, e.target.value)}
          required
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : name === "address" ? (
        <textarea
          id={name}
          name={name}
          value={formData[name]}
          onChange={(e) => updateField(name, e.target.value)}
          placeholder={`Enter ${label.toLowerCase()}`}
          rows="3"
          required
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={formData[name]}
          onChange={(e) => updateField(name, e.target.value)}
          placeholder={`Enter ${label.toLowerCase()}`}
          required
          min={name === "age" ? "18" : undefined}
          max={name === "age" ? "100" : undefined}
          pattern={name === "mobile" ? "[0-9]{10}" : undefined}
          title={
            name === "mobile"
              ? "Enter a 10-digit mobile number"
              : undefined
          }
        />
      )}
    </div>
  );
}
