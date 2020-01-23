import React, { useState, useContext } from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import app from "../components/firebase";
import { AuthContext } from "../components/auth";
import {
  Container,
  Form,
  Label,
  Input,
  SubLabel,
  Error,
  Button,
  Loading
} from "../components/design";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async ({ email, username, password }) => {
    setLoading(true);
    const database = app.firestore();

    try {
      // Create user and create database entry for user/booklist
      await Promise.all([
        app.auth().createUserWithEmailAndPassword(email, password),
        database
          .collection("users")
          .doc(username)
          .set({
            list: []
          })
      ]);

      // Add username to newly created user
      const user = app.auth().currentUser;
      await user.updateProfile({
        username
      });

      // Redirect to index
      Router.push("/");
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };

  const { user, userLoading } = useContext(AuthContext);

  if (user) {
    Router.push("/");
  }

  return user !== null ? (
    <Loading page />
  ) : (
    <Container>
      <h1>Sign Up</h1>
      <p>You're one step away from setting up your booklist.</p>
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
        <Label htmlFor="username">Username</Label>
        <SubLabel>
          This will be your URL, e.g. <em>whatimreading.xyz/yourusername</em>.
        </SubLabel>
        <Input
          name="username"
          id="username"
          type="text"
          ref={register({ required: true })}
          error={errors.username}
        />
        {errors.username && <Error>Username is required.</Error>}
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
    </Container>
  );
};

export default Signup;
