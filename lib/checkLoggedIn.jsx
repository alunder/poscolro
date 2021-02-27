import gql from 'graphql-tag';

/**
 * https://github.com/zeit/next.js/tree/master/examples/with-apollo-auth
 */

const sanitize = obj => {
  let ret = {};
  for (var k in obj) {
    if (obj[k]) {
      ret[k] = obj[k];
    } else {
      ret[k] = '';
    }
  }
  return ret;
};

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query user {
          me {
            id
            salutation
            firstName
            lastName
            email
            position
            telephone
            countryCode
            role
            confirmed
            avatar
            beta
          }
        }
      `,
    })
    .then(({ data }) => {
      if (data.me) {
        let currentUser = sanitize(data.me);
        return { currentUser: currentUser };
      } else {
        return { currentUser: data.me };
      }
    })
    .catch(() => {
      // Fail gracefully
      return { currentUser: {} };
    });
