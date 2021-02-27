import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Typography, Grid, Button, Divider, useMediaQuery, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '10px -8px',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: '18px',
    color: '#2D2A26',
  },

  withMargin: {
    margin: '0 36px',
  },

  groupTitle: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '20px',
    color: '#263238',
  },
}));

function ViewDetailsModalContent() {
  const classes = useStyles();
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const itemSpacing = xsDown ? 1 : undefined;

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} className={classes.withMargin}>
        <Typography className={classes.groupTitle}>Vendor Profile</Typography>
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12} className={classes.withMargin}>
        <Grid container spacing={itemSpacing}>
          <Grid item xs={12} sm={3}>
            Email
          </Grid>
          <Grid item xs={12} sm={9}>
            aaa@gmail.com
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12} className={classes.withMargin}>
        <Grid container spacing={itemSpacing}>
          <Grid item xs={12} sm={3}>
            Contact Number
          </Grid>
          <Grid item xs={12} sm={9}>
            +65 9123 4567
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12} />

      <Grid item xs={12} className={classes.withMargin}>
        <Typography className={classes.groupTitle}>Interactions</Typography>
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12} className={classes.withMargin}>
        <Grid container spacing={itemSpacing}>
          <Grid item xs={12} sm={3}>
            Awarded Tender
          </Grid>
          <Grid item xs={12} sm={3}>
            #299101: Furniture
          </Grid>
          <Grid item xs={12} sm={4} />
          <Grid item xs={12} sm={2}>
            <Box textAlign="right">29 Jul 2019</Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12} className={classes.withMargin}>
        <Grid container spacing={itemSpacing}>
          <Grid item xs={12} sm={3}>
            QnA
          </Grid>
          <Grid item xs={12} sm={3}>
            #299102: Furniture 2
          </Grid>
          <Grid item xs={12} sm={4}>
            What is the model number of the pum...
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box textAlign="right">30 Jul 2019</Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ViewDetailsModalContent;
