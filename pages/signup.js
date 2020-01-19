import React, { useState } from "react";
import Router from "next/router";

import app from "../components/firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async event => {
    event.preventDefault();

    const database = app.firestore();

    try {
      // Create user
      await app.auth().createUserWithEmailAndPassword(email, password);
      // Get the created user
      const user = app.auth().currentUser;
      // Create database entry for user/booklist
      await database
        .collection("users")
        .doc(user.email)
        .set({
          list: []
        });
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

export default Signup;
