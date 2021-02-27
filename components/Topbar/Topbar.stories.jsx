import React from 'react';
import { storiesOf } from '@storybook/react';
import Topbar from './Topbar';

storiesOf('Topbar', module).add('with text', () => (
  <div style={{ margin: -20 }}>
    <Topbar>Hello Button</Topbar>
  </div>
));
