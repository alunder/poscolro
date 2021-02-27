import { useRouter } from 'next/router';
import Minimal from 'components/Layout/Minimal';
import Registration from 'components/Registration';
import AuthForm from 'components/AuthForm';
import Page from 'components/Page';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Grid, Link, Typography } from '@material-ui/core';
import SignInForm from './_SignInForm';

const SignIn = props => {
  return (
    <Minimal>
      <Page title="User Sign in">
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <AuthForm
              title="Log in to REALLY"
              description=""
              footer={
                <span>
                  Don't have an account yet? <Link href="/managers/sign_up">Sign Up</Link>
                </span>
              }
            >
              <SignInForm {...props} />
            </AuthForm>
          </Grid>
        </Grid>
      </Page>
    </Minimal>
  );
};

export default SignIn;
