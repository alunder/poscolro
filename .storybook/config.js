import React, { Fragment } from 'react'; //needed for ThemeProvider
import Head from 'next/head';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'components/theme';

// automatically import all files ending in *.stories.jsx
const req = require.context('../components', true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div style={{ margin: 20 }}>{story()}</div>
  </ThemeProvider>
));

addParameters({
  options: {
    name: 'REALly',
    sortStoriesByKind: true,
  },
});

configure(loadStories, module);
