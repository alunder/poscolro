import React from 'react';
import { storiesOf } from '@storybook/react';
import RecoverPasswordForm from './RecoverPasswordForm';

storiesOf('RecoverPasswordForm', module)
  .add('RecoverPasswordForm', () => (
    <React.Fragment>
      <RecoverPasswordForm />
    </React.Fragment>
  )
);