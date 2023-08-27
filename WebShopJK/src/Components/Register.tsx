import { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    console.log(email);
  };

  return (
    <>
      <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name"> Full Name </label>
          <input
            value={name}
            type="name"
            placeholder="Your Full Name"
            name="email"
            id="email"
            onChange={handleNameChange}
          ></input>
          <label htmlFor="email"> Email </label>
          <input
            value={email}
            type="email"
            placeholder="your email"
            name="email"
            id="email"
            onChange={handleEmailChange}
          ></input>
          <label htmlFor="password"> Password </label>
          <input
            value={password}
            type="password"
            placeholder="minimum 8 characters"
            name="password"
            id="password"
            onChange={handlePasswordChange}
            min={8}
          ></input>
          <button type="submit">Register</button>
        </form>
        <button
          className="link-button"
          onClick={() => props.onFormSwitch("login")}
        >
          Have an account? Log in here
        </button>
      </div>
    </>
  );
};
