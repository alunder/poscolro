import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileSetting from './ProfileSetting';

storiesOf('ProfileSetting', module)
  .add('ProfileSetting', () => (
    <React.Fragment>
      <ProfileSetting />
    </React.Fragment>
  )
);