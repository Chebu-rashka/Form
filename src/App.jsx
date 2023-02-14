import "./App.css";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";
import * as React from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [org, setOrg] = React.useState("");
  const [data, setData] = React.useState([
    "data 1",
    "data 2",
    "data 3",
    "data 4",
    "data 5",
    "data 6",
  ]);
  function handleSubmit() {
    console.log(firstName, lastName, email, org);
    setFirstName("");
    setLastName("");
    setEmail("");
    setOrg("");
  }
  return (
    <div className="container">
      <div className="grid">
        <div>
          <Input
            label="First Name"
            required
            placeholder="Please enter your first name"
            value={firstName}
            onChange={(value) => setFirstName(value)}
          />
        </div>
        <div>
          <Input
            label="Last Name"
            disabled
            required
            placeholder="Enter last name"
            value={lastName}
            onChange={(value) => setLastName(value)}
          />
        </div>
        <div>
          {" "}
          <Input
            label="Email Address"
            hasError
            required
            value={email}
            onChange={(value) => setEmail(value)}
          />
        </div>
        <div>
          <Input
            label="Organization"
            value={org}
            onChange={(value) => setOrg(value)}
          />
        </div>

        <div>
          <Checkbox label={"Advances"} />
        </div>
        <div>
          <Checkbox label={"Alerts"} />
        </div>
        <div>
          <Checkbox label={"Other communications"} />
        </div>
        <div>
          <Dropdown label="EU RESIDENT" required data={data} />
        </div>
      </div>
      <div className="actions">
        <Button
          onChange={handleSubmit}
          type="primary"
          firstName={firstName}
          lastName={lastName}
          email={email}
          org={org}
        >
          Submit
        </Button>
        <Button>Reset</Button>
      </div>
    </div>
  );
}

export default App;
