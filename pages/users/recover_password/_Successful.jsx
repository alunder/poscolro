import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import Minimal from 'components/Layout/Minimal';
import AuthForm from 'components/AuthForm';
import Page from 'components/Page';

const RecoverPasswordSuccessful = ({ email, ...props }) => {
  return (
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
              <br />
              <br />
              <Typography>Your password has been reset. Please check your email.</Typography>
              <Typography variant="h3">{email}</Typography>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </AuthForm>
          </Grid>
        </Grid>
      </Page>
    </Minimal>
  );
};

export default RecoverPasswordSuccessful;
