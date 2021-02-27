import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import Typography from '@material-ui/core/Typography';
import { colors } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const allColors = [
  'red',
  'pink',
  'purple',
  'deepPurple',
  'indigo',
  'blue',
  'lightBlue',
  'cyan',
  'teal',
  'green',
  'lightGreen',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deepOrange',
  'brown',
  'grey',
  'blueGrey',
];

const primary = [
  { bg: 'primary.dark', text: 'primary.contrastText' },
  { bg: 'primary.main', text: 'primary.contrastText' },
  { bg: 'primary.light', text: 'primary.contrastText' },
];

const secondary = [
  { bg: 'secondary.dark', text: 'secondary.contrastText' },
  { bg: 'secondary.main', text: 'secondary.contrastText' },
  { bg: 'secondary.light', text: 'secondary.contrastText' },
];

const error = [
  { bg: 'error.dark', text: 'error.contrastText' },
  { bg: 'error.main', text: 'error.contrastText' },
  { bg: 'error.light', text: 'error.contrastText' },
];

const background = [{ bg: 'background.default', text: 'black' }, { bg: 'background.paper', text: 'black' }];

storiesOf('Theme|Color Palette', module)
  .add('Background colors', () => (
    <div>
      <Typography component="div" variant="body1">
        <h3>Primary</h3>
        <Grid container spacing={2}>
          {primary.map(color => (
            <Grid item xs={3}>
              <Box bgcolor={color.bg} color={color.text} p={2}>
                {color.bg}
              </Box>
            </Grid>
          ))}
        </Grid>
        <h3>Secondary</h3>
        <Grid container spacing={2}>
          {secondary.map(color => (
            <Grid item xs={3}>
              <Box bgcolor={color.bg} color={color.text} p={2}>
                {color.bg}
              </Box>
            </Grid>
          ))}
        </Grid>

        <h3>Error</h3>
        <Grid container spacing={2}>
          {error.map(color => (
            <Grid item xs={3}>
              <Box bgcolor={color.bg} color={color.text} p={2}>
                {color.bg}
              </Box>
            </Grid>
          ))}
        </Grid>

        <h3>Background</h3>
        <Grid container spacing={2}>
          {background.map(color => (
            <Grid item xs={3}>
              <Box bgcolor={color.bg} color={color.text} p={2}>
                {color.bg}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Typography>
    </div>
  ))
  .add('Text Colors', () => (
    <Typography component="div" variant="body1">
      <Box color="primary.main">primary.main</Box>
      <Box color="secondary.main">secondary.main</Box>
      <Box color="error.main">error.main</Box>
      <Box color="text.primary">text.primary</Box>
      <Box color="text.secondary">text.secondary</Box>
      <Box color="text.disabled">text.disabled</Box>
      <Box color="text.hint">text.hint</Box>
    </Typography>
  ))
  .add('All Colors', () => {
    return (
      <Grid container>
        {allColors.map(color => (
          <Grid item xs={2}>
            <Box bgcolor={colors[color]} py={4} px={2} m={2} color="white" textAlign="center">
              {color}
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  })
  .addDecorator(withKnobs)
  .add('Shades of Color', () => {
    const selectedColor = select('Color', allColors, 'red');
    return (
      <Grid container>
        <Grid item xs={3}>
          <Box bgcolor={colors[selectedColor][900]} p={2} color="white">
            {selectedColor}
          </Box>
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A400', 'A700'].map(num => (
            <Box bgcolor={colors[selectedColor][num]} p={2} color={num < 400 ? 'black' : 'white'}>
              {selectedColor} {num}
            </Box>
          ))}
        </Grid>
      </Grid>
    );
  });
