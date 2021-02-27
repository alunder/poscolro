import Minimal from 'components/Layout/Minimal';
import Registration from 'components/Registration';
import AuthForm from 'components/AuthForm';
import Page from 'components/Page';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import { IconManager } from 'components/Icon';
import { Grid, Link, Typography } from '@material-ui/core';
import SignUpForm from './_SignUpForm';

const SignUp = props => {
  return (
    <Minimal forWho="manager" borderColor="#EEEEEE">
      <Page title="Account registration">
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <AuthForm
              forWho="manager"
              title="Pre-register as a Project Manager"
              description={
                <span>
                  Are you a vendor? <Link href="/vendors/sign_up">Click here</Link> instead
                </span>
              }
              icon={<IconManager />}
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
