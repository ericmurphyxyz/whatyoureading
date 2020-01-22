import React, { useContext } from "react";
import Router from "next/router";
import app from "../components/firebase";
import BookList from "../components/booklist";
import { AuthContext } from "../components/Auth";
import { Container } from "../components/design";

const Home = () => {
  const handleLogout = async () => {
    await app.auth().signOut();
    Router.push("/login");
  };

  const { user } = useContext(AuthContext);

  return (
    user && (
      <Container>
        <h1>Hello {user.email}!</h1>
        <BookList />
        <button onClick={handleLogout}>Sign out</button>
      </Container>
    )
  );
};

export default Home;
