/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Typography, Card, CardContent, Divider, IconButton, useMediaQuery } from '@material-ui/core';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

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
  termList: {
    margin: '24px 0',

    '& > *': {
      borderLeft: '5.5px solid #36B0C9',
      paddingLeft: 18,

      [theme.breakpoints.down('xs')]: {
        marginBottom: 16,

        '&:last-child': {
          marginBottom: 0,
        },
      },
    },
  },
  termLabel: {
    marginBottom: 4,
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: '18px',
    color: '#90A4AE',
  },
  termValue: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '18px',
    color: '#2D2A26',
  },
  termDateContainer: {
    display: 'flex',
    marginTop: 24,
  },
  termDate: {
    margin: '0 18px',
  },
  termArrow: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',

    '& h1': {
      fontSize: 44,
    },
  },
}));

function TermsSection() {
  const classes = useStyles();
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Card id="termsAndConditions" className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.cardTitle}>
          Tender terms & conditions
        </Typography>

        <Grid container className={classes.termList}>
          <Grid item xs={12} sm={4}>
            <Typography className={classes.termLabel} color="textSecondary">
              Validity of quotation
            </Typography>
            <Typography variant="h5" component="h2" className={classes.termValue}>
              1 month
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography className={classes.termLabel} color="textSecondary">
              Warranty
            </Typography>
            <Typography variant="h5" component="h2" className={classes.termValue}>
              12 months
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography className={classes.termLabel} color="textSecondary">
              Payment terms
            </Typography>
            <Typography variant="h5" component="h2" className={classes.termValue}>
              30 days
            </Typography>
          </Grid>
        </Grid>

        <Divider />

        <Grid container>
          <Grid item xs={12} sm={5}>
            <div className={classes.termDateContainer}>
              <IconButton>
                <CalendarTodayOutlinedIcon />
              </IconButton>
              <div className={classes.termDate}>
                <Typography className={classes.termLabel} color="textSecondary">
                  Expected delivery start date
                </Typography>
                <Typography variant="h5" component="h2" className={classes.termValue}>
                  25 Dec 2019
                </Typography>
              </div>
            </div>
          </Grid>

          {!downXs && (
            <Grid item xs={12} sm={2}>
              <div className={classes.termArrow}>
                <Typography color="primary" variant="h1">
                  &#10230;
                </Typography>
              </div>
            </Grid>
          )}

          <Grid item xs={12} sm={5}>
            <div className={classes.termDateContainer}>
              <IconButton>
                <CalendarTodayOutlinedIcon />
              </IconButton>
              <div className={classes.termDate}>
                <Typography className={classes.termLabel} color="textSecondary">
                  Expected delivery completion date
                </Typography>
                <Typography variant="h5" component="h2" className={classes.termValue}>
                  30 Dec 2019
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default TermsSection;
