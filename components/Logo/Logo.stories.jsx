import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, withKnobs } from '@storybook/addon-knobs';
import Logo from './Logo';

storiesOf('Logo', module)
  .addDecorator(withKnobs)
  .add('REALly', () => (
    <div
      style={{
        backgroundColor: color('Background Color', '#333333'),
        width: '100%',
        height: '100%',
        position: 'absolute',
      }}
    >
      <Logo />
    </div>
  ));
