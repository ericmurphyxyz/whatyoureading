import React, { useState } from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import app from "../components/firebase";
import {
  Form,
  Label,
  Input,
  Error,
  Button,
  Loading
} from "../components/design";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async ({ email, password }) => {
    setLoading(true);
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
      setLoading(false);
      alert(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          id="email"
          type="email"
          ref={register({ required: true })}
          error={errors.email}
        />
        {errors.email && <Error>Email is required.</Error>}
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          id="password"
          type="password"
          ref={register({ required: true })}
          error={errors.password}
        />
        {errors.password && <Error>Password is required.</Error>}
        <Button type="submit">{!loading ? "Sign Up" : <Loading />}</Button>
      </Form>
    </div>
  );
};

export default Signup;
