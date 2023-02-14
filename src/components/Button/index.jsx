import * as React from "react";
import "./index.css";
const Button = (props) => {
  const { children, type, onChange } = props;

  return (
    <button onClick={onChange} className={type === "primary" ? "primary" : ""}>
      {children}
    </button>
  );
};

export default Button;
