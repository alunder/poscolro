import React from 'react';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/react-hooks';
import cookie from 'js-cookie';
import { withApollo } from 'lib/apollo';
import redirect from 'lib/redirect';
import checkLoggedIn from 'lib/checkLoggedIn';

export const withoutAuth = PageComponent => {
  const WithoutAuth = props => {
    const apolloClient = useApolloClient();
    return <PageComponent {...props} />;
  };

  WithoutAuth.getInitialProps = async context => {
    const pageProps = PageComponent.getInitialProps ? await PageComponent.getInitialProps(context) : {};

    const { currentUser } = await checkLoggedIn(context.apolloClient);
    if (currentUser) {
      // If signed in, send them somewhere more useful
      redirect(context, '/projects');
    }
    return {
      ...pageProps,
    };
  };
  return withApollo(WithoutAuth);
};

export const withAuth = PageComponent => {
  const WithAuth = props => {
    const apolloClient = useApolloClient();
    return <PageComponent {...props} />;
  };

  WithAuth.getInitialProps = async context => {
    const pageProps = PageComponent.getInitialProps ? await PageComponent.getInitialProps(context) : {};

    const { currentUser } = await checkLoggedIn(context.apolloClient);
    if (!currentUser) {
      const { url } = context.req;
      const returnUrl = url && url !== '/' ? `?returnUrl=${url}` : '';

      // If not signed in, send them somewhere more useful
      redirect(context, `/users/sign_in${returnUrl}`);
    }
    return {
      ...pageProps,
      currentUser,
    };
  };
  return withApollo(WithAuth);
};

export const logout = () => {
  cookie.set('token', '');
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now());
  window.location = '/';
};
