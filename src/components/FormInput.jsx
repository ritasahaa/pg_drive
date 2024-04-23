import React from "react";
import "./FormInput.css";

const FormInput = ({
  label,
  inputType,
  placeholder = "",
  name,
  value,
  handleChange,
}) => {
  return (
    <div className="form-group">
      <label>{label} : </label>
      <input
        type={inputType}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default FormInput;
