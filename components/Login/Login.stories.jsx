import React from 'react';
import { storiesOf } from '@storybook/react';
import Login from './Login';

storiesOf('Login', module)
  .add('Login', () => (
    <React.Fragment>
      <Login />
    </React.Fragment>
  )
);