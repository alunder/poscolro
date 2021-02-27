import React from 'react';
import { storiesOf } from '@storybook/react';
import LoginForm from './LoginForm';

storiesOf('LoginForm', module)
  .add('LoginForm', () => (
    <React.Fragment>
      <LoginForm />
    </React.Fragment>
  )
);