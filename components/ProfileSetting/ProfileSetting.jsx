import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Page from '../Page';
import PageContainer from '../PageContainer';
import PageHeader from '../PageHeader';
import ProfileInfo from '../ProfileInfo';

import { Typography, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const ProfileSetting = () => {
  const classes = useStyles();

  return (
    <Page title="Profile Setting">
      <PageContainer>
        <PageHeader title="Setting" subtitle="Profile" />
        <div className={classes.root}>
          <Grid container direction="row" alignItems="flex-start" spacing={2}>
            <Grid item xs={3} m={2}></Grid>
            <Grid item xs={7} m={6}>
              <ProfileInfo />
            </Grid>
          </Grid>
        </div>
      </PageContainer>
    </Page>
  );
};

export default ProfileSetting;
