import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileInfo from './ProfileInfo';

storiesOf('ProfileInfo', module)
  .add('ProfileInfo', () => (
    <React.Fragment>
      <ProfileInfo />
    </React.Fragment>
  )
);