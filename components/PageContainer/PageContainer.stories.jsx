import React from 'react';
import { storiesOf } from '@storybook/react';
import PageContainer from './PageContainer';

storiesOf('PageContainer', module)
  .add('PageContainer', () => (
    <React.Fragment>
      <Content />
    </React.Fragment>
  )
);
