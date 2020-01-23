import React from "react";
import { AuthProvider } from "../components/auth";
import { Wrapper } from "../components/design";
import "../style.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </AuthProvider>
  );
}

export default MyApp;
