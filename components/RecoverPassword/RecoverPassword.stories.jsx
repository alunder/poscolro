import React from 'react';
import { storiesOf } from '@storybook/react';
import RecoverPassword from './RecoverPassword';

storiesOf('RecoverPassword', module)
  .add('RecoverPassword', () => (
    <React.Fragment>
      <RecoverPassword />
    </React.Fragment>
  )
);