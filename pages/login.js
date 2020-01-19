import React, { useState, useContext } from "react";
import Router from "next/router";
import app from "../components/firebase";
import { AuthContext } from "../components/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async event => {
    event.preventDefault();

    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      Router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const { user } = useContext(AuthContext);

  if (user) {
    Router.push("/");
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
