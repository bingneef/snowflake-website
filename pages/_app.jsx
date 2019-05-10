import React from "react";
import App, { Container } from "next/app";
import { LightTheme, ThemeProvider } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import bulma from "bulma/bulma.sass";

import { styletron } from "../src/services/styletron";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <StyletronProvider value={styletron}>
          <ThemeProvider theme={LightTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </StyletronProvider>
      </Container>
    );
  }
}

export default MyApp;
