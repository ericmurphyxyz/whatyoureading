import React from "react";
import { AuthProvider } from "../components/Auth";
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
