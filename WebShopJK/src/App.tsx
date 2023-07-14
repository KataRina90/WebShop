import { useState } from "react";

import "./App.css";
import { LogIn } from "./Components/LogIn";
import { Register } from "./Components/Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  return <>{currentForm === "login" ? <LogIn /> : <Register />}</>;
}

export default App;
