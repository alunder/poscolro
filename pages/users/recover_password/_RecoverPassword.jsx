import Minimal from 'components/Layout/Minimal';
import Registration from 'components/Registration';
import AuthForm from 'components/AuthForm';
import Page from 'components/Page';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Grid, Link, Typography } from '@material-ui/core';
import RecoverPasswordForm from './_RecoverPasswordForm';

const submitForm = () => {
  alert('Submit Form');
};

const RecoverPassword = () => (
  <Minimal>
    <Page title="Recover password">
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <AuthForm
            title="Recover Password"
            description=""
            footer={
              <span>
                <Link href="/users/sign_in">Return to Log In</Link>
              </span>
            }
          >
            <RecoverPasswordForm description="Please enter your registered email address to reset your password." />
          </AuthForm>
        </Grid>
      </Grid>
    </Page>
  </Minimal>
);

export default RecoverPassword;
