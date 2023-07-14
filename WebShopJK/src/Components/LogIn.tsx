import { useState } from "react";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <form onSubmit={handleSubmit}>
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
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};
