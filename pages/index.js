import React, { useContext } from "react";
import Router from "next/router";
import app from "../components/firebase";
import BookList from "../components/booklist";
import { AuthContext } from "../components/auth";
import { Container, Button, Loading } from "../components/design";

const Home = () => {
  const handleLogout = async () => {
    await app.auth().signOut();
    Router.push("/login");
  };

  const { user } = useContext(AuthContext);

  if (user === null) {
    Router.push("/login");
  }

  return user ? (
    <Container>
      <h1>Hello {user.email}!</h1>
      <BookList />
      <Button onClick={handleLogout}>Sign out</Button>
    </Container>
  ) : (
    <Loading page />
  );
};

export default Home;
