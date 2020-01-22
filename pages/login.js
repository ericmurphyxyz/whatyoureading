import React, { useState, useContext } from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import app from "../components/firebase";
import { AuthContext } from "../components/Auth";
import {
  Form,
  Label,
  Input,
  Error,
  Button,
  Loading
} from "../components/design";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async ({ email, password }) => {
    setLoading(true);

    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      Router.push("/");
    } catch (error) {
      setLoading(false);
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Email</Label>
        <Input
          name="email"
          type="email"
          ref={register({ required: true })}
          error={errors.email}
        />
        {errors.email && <Error>Email is required.</Error>}
        <Label>Password</Label>
        <Input
          name="password"
          type="password"
          ref={register({ required: true })}
          error={errors.password}
        />
        {errors.password && <Error>Password is required.</Error>}
        <Button type="submit" disabled={loading}>
          {!loading ? "Log In" : <Loading />}
        </Button>
      </Form>
    </div>
  );
};

export default Login;
