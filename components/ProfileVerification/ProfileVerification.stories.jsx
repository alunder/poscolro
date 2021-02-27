import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileVerification from './ProfileVerification';

storiesOf('ProfileVerification', module)
  .add('ProfileVerification', () => (
    <React.Fragment>
      <ProfileVerification />
    </React.Fragment>
  )
);