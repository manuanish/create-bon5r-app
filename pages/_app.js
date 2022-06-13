import "inter-ui/inter.css";
import "../styles/globals.css";
import Head from "next/head";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import * as React from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = React.useState("dark");
  React.useEffect(() => {
    if (
      localStorage.getItem("theme") == undefined ||
      localStorage.getItem("theme") == "dark"
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });
  return (
    <>
      <GeistProvider themeType={theme}>
        <CssBaseline />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </GeistProvider>
    </>
  );
}

export default MyApp;
