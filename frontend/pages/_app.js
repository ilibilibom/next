import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import '../styles/global.css'

import withData from '../util/apolloClient';

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