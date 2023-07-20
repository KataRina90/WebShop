import { useState } from "react";

import "./App.css";
import { LogIn } from "./Components/LogIn";
import { Register } from "./Components/Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      {currentForm === "login" ? (
        <LogIn onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </>
  );
}

export default App;
