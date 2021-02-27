import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectAvatar from './ProjectAvatar';

storiesOf('ProfileAvatar', module)
  .add('ProfileAvatar', () => (
    <React.Fragment>
      <ProjectAvatar />
    </React.Fragment>
  )
);