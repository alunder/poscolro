import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectCard from './ProjectCard';

storiesOf('ProjectCard', module)
  .add('ProjectCard', () => (
    <React.Fragment>
      <ProjectCard />
    </React.Fragment>
  )
);