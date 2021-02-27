/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Grid, Typography, Box, Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    '& .MuiCardContent-root': {
      padding: '24px 28px',
    },
  },
  cardTitle: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '20px',
    color: '#2D2A26',
  },

  siteText: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: '18px',
    color: '#2D2A26',
  },
  sitePerson: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: '18px',
    color: '#90A4AE',
  },
  siteAvatar: {
    width: 44,
    height: 44,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    background: '#0071CE',
  },
}));

function SiteVisitSection() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2" className={classes.cardTitle}>
              Site visit details
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.siteText}>
              Please come on only Tuesdays and Fridays. Between 2PM to 4.30PM.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex">
              <Avatar className={classes.siteAvatar}>JD</Avatar>
              <Box display="flex" flexDirection="column" margin="0 24px">
                <Typography className={classes.sitePerson}>John Doe</Typography>
                <Typography>+65 9009 9009</Typography>
                <Typography>johndoe@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.siteText}>
              Vendors should make contact to arrange an appointment for site visit before heading down.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SiteVisitSection;
