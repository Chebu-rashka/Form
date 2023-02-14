import * as React from "react";
import "./index.css";
import checkSVG from "../../assets/check.svg";
const Checkbox = (props) => {
  const [checked, setChecked] = React.useState(false);
  const { label } = props;
  return (
    <>
      <section
        onClick={() => {
          setChecked(!checked);
        }}
      >
        <div className={`checkbox ${checked ? "checked" : ""}`}>
          {checked && <img src={checkSVG} width={15} />}
        </div>
        {label && <label>{label}</label>}
      </section>
    </>
  );
};

export default Checkbox;
