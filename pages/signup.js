import React from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import app from "../components/firebase";

const Signup = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async ({ email, password }) => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input name="email" type="email" ref={register({ required: true })} />
        </label>
        {errors.email && "Email is required."}
        <label>
          Password
          <input
            name="password"
            type="password"
            ref={register({ required: true })}
          />
        </label>
        {errors.password && "Password is required."}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
