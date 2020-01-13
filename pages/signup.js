import React, { useState } from "react";
import Router from "next/router";

import app from "../components/base";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async event => {
    event.preventDefault();

    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      Router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default signup;
