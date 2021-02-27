import React from 'react';
import { storiesOf } from '@storybook/react';
import Example from './Example';

storiesOf('Example', module).add('with text', () => <Example title="This is Title">Hello Example</Example>);
