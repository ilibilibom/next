import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/hero.scss'
import '../styles/fonts.scss'
import withData from "../util/apolloClient";

class NextApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
    );
  }
}

export default withData(NextApp);
