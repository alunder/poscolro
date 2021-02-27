import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileForm from './ProfileForm';

storiesOf('ProfileForm', module)
  .add('ProfileForm', () => (
    <React.Fragment>
      <ProfileForm />
    </React.Fragment>
  )
);