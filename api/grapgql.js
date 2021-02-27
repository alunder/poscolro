import ApolloClient from 'apollo-boost';
import cookie from 'cookie';

function getToken(req) {
  const cookies = cookie.parse(req ? req.headers.cookie || '' : document.cookie);
  return cookies.token;
}

const client = new ApolloClient({
  uri: 'https://really-staging.herokuapp.com/graphql',
  request: operation => {
    const token = getToken();
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});

export default client;
