import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectForm from './ProjectForm';

storiesOf('ProjectForm', module)
  .add('ProjectForm', () => (
    <React.Fragment>
      <ProjectForm />
    </React.Fragment>
  )
);