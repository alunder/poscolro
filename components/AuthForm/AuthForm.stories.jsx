import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Link, Typography } from '@material-ui/core';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import AuthForm from './AuthForm';

storiesOf('AuthForm', module)
  .add('Login', () => (
    <Fragment>
      <AuthForm title="Login" />
    </Fragment>
  ))
  .add('Register', () => (
    <Fragment>
      <AuthForm
        title="Pre-register as a Project Manager"
        description={
          <span>
            Are you a vendor? <Link href="/">Click here</Link> instead
          </span>
        }
        icon={<GroupAddOutlinedIcon />}
        iconColor="#ff8600"
        forWho="manager"
        footer={
          <span>
            Have an account? <Link href="/">Login</Link> now
          </span>
        }
      >
        <Typography>
          Be the first to gain access to our platform when you register and get verified early. We will send you an
          email to notify you when we go live!
        </Typography>
      </AuthForm>
    </Fragment>
  ));
