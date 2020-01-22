import React, { useContext } from "react";
import Router from "next/router";
import app from "../components/firebase";
import BookList from "../components/booklist";
import { AuthContext } from "../components/Auth";

const Home = () => {
  const handleLogout = async () => {
    await app.auth().signOut();
    Router.push("/login");
  };

  const { user } = useContext(AuthContext);

  return (
    user && (
      <div>
        <h1>Hello {user.email}!</h1>
        <BookList />
        <button onClick={handleLogout}>Sign out</button>
      </div>
    )
  );
};

export default Home;
