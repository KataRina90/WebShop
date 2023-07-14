import React from "react";

export const LogIn = () => {
  return (
    <form>
      <label htmlFor="email"> Email </label>
      <input
        type="email"
        placeholder="your email"
        name="email"
        id="email"
      ></input>
      <label htmlFor="password"> Password </label>
      <input
        type="password"
        placeholder="minimum 8 characters"
        name="email"
        id="email"
        min={8}
      ></input>
    </form>
  );
};
