import Minimal from 'components/Layout/Minimal';
import Registration from 'components/Registration';
import AuthForm from 'components/AuthForm';
import Page from 'components/Page';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import { Grid, Link, Typography } from '@material-ui/core';
import { IconProvider } from 'components/Icon';
import SignUpForm from './_SignUpForm';

const SignUp = props => {
  return (
    <Minimal forWho="provider" borderColor="#EEEEEE">
      <Page title="Account registration">
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <AuthForm
              forWho="provider"
              title="Pre-register as a Vendor"
              description={
                <span>
                  Are you a project manager? <Link href="/managers/sign_up">Click here</Link> instead
                </span>
              }
              icon={<IconProvider />}
              iconColor="#ff8600"
              footer={
                <span>
                  Have an account? <Link href="/users/sign_in">Login</Link> now
                </span>
              }
            >
              <SignUpForm />
            </AuthForm>
          </Grid>
        </Grid>
      </Page>
    </Minimal>
  );
};

export default SignUp;
