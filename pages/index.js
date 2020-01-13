import React, { useContext } from "react";
import Router from "next/router";
import app from "../components/base";
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
        <button onClick={handleLogout}>Sign out</button>
      </div>
    )
  );
};

export default Home;
