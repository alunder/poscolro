import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import Page from '../Page';
import ProfileSetting from '../ProfileSetting';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Page title="Home">

    </Page>
  );
};

export default Home;
