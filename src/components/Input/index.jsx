import * as React from "react";
import "./index.css";

const Input = (props) => {
  const { label, disabled, hasError, required, placeholder, onChange, value } =
    props;

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      {label && (
        <label>
          {label}
          {required ? "*" : ""}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={hasError ? "input-error" : ""}
        onChange={handleChange}
        value={value}
      />
    </>
  );
};

export default Input;
