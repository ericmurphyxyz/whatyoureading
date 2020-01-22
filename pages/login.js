import React, { useContext } from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import app from "../components/firebase";
import { AuthContext } from "../components/Auth";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async ({ email, password }) => {
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
