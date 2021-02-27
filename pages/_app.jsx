import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { HttpLink } from 'apollo-link-http';
// import { ApolloProvider } from 'react-apollo';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloClient } from 'apollo-client';
// import fetch from 'node-fetch';
// import gql from 'graphql-tag';
import 'cross-fetch/polyfill';

// REDUX-SAGA
import { Provider } from 'react-redux';
import { store } from '../redux';
import theme from '../components/theme';

class Really extends App {
  // https://nextjs.org/docs#custom-app
  // If you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  static async getInitialProps(appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Head>
          <title>Really</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component theme={theme} {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default Really;
