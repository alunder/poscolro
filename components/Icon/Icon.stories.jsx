import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconProvider, IconManager } from './Icon';
// import IconProvider from './IconProvider';

storiesOf('Icon', module)
  .add('provider', () => <IconProvider fontSize="large" />)
  .add('manager', () => <IconManager fontSize="large" />);
