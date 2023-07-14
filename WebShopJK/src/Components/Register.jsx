import React from "react";
import { useState } from "react";

export const Register = () => {
  [email, setEmail] = useState("");
  [passwords, setPassword] = useState("")[(personName, setName)] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <form>
        <label> Your Name </label>
        <input type="text" value={personName} onSubmit={handleNameChange} />
      </form>
    </>
  );
};
