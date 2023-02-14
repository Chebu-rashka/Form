import React, { useState } from "react";
import "./index.css";
// import { SlArrowRight } from "react-icons/sl";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const { label, data } = props;

  const handleClick = (event) => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (event, option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      {label && <label>{label}</label>}
      <div className="dropdown">
        <div
          className="selected-option"
          onClick={handleClick}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {selectedOption || "-select one-"}
          {/* <SlArrowRight /> */}
        </div>
        {isOpen && (
          <div className="options">
            {data.map((option) => (
              <div
                className="option"
                key={option}
                onClick={(event) => handleOptionClick(event, option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
