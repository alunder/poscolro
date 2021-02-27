/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
  CardActions,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import EmojiFlagsOutlinedIcon from '@material-ui/icons/EmojiFlagsOutlined';
import Label from 'components/Label';

const useStyles = makeStyles(theme => ({
  card: {
    '& .MuiCardContent-root': {
      padding: '24px 28px',
    },
  },
  flagImageContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flagContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  flagText: {
    margin: '0 8px',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: '18px',
    color: '#2D2A26',
  },

  bidContent: {
    '&.MuiCardContent-root': {
      padding: '12px 28px',
    },
  },
  bidFigures: {
    textAlign: 'center',
  },
  bidNumber: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '24px',
    textAlign: 'center',
    color: '#2D2A26',
  },
  bidDate: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '24px',
    textAlign: 'center',
    color: '#EB5757',
  },
  bidLabel: {
    fontWeight: 500,
    fontSize: 11,
    lineHeight: '16px',
    textTransform: 'uppercase',
    color: '#90A4AE',
  },
  bidText: {
    '& br': {
      display: 'block',
      margin: '12px 0',
      content: '""',
    },
  },
  bidReadMore: {
    justifyContent: 'center',
    padding: '8px 24px 10px 24px',
  },
  bidReadMoreButton: {
    lineHeight: '18px',
  },
  coloredLabel: {
    width: '78px',
    fontWeight: '500',
    fontSize: '11px',
    lineHeight: '16px',
  },
}));

function HeroSection() {
  const classes = useStyles();
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Card id="tenderDetails" className={classes.card}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.postedDate} color="textSecondary" gutterBottom>
              Posted on 06 Nov 2019 • Tender ID: 01119202
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" component="h2" className={classes.postedTitle}>
              Supply entire suite of pool side outdoor furniture to replace entire existing items
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Label color="#FF671D" className={classes.coloredLabel}>
              Reviewing
            </Label>
          </Grid>
          <Grid item xs={12} className={classes.flagImageContainer}>
            <div className={classes.flagContainer}>
              <EmojiFlagsOutlinedIcon />
              <Typography component="p" className={classes.flagText}>
                Single Request
              </Typography>
            </div>
            <img src="/images/exclusive_tender.png" alt="exclusive tender" className={classes.exclusiveImage} />
          </Grid>
        </Grid>
      </CardContent>

      <Divider />

      <CardContent className={classes.bidContent}>
        <Grid container spacing={downXs ? 1 : undefined} justify="center" className={classes.bidFigures}>
          <Grid item xs={4}>
            <Typography variant="h5" component="h2" className={classes.bidNumber}>
              3
            </Typography>
            <Typography className={classes.bidLabel} color="textSecondary">
              Bid Submissions
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h5" component="h2" className={classes.bidNumber}>
              $29,992
            </Typography>
            <Typography className={classes.bidLabel} color="textSecondary">
              Avg Bid Price
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h5" component="h2" className={classes.bidDate}>
              30 Dec 2019
            </Typography>
            <Typography className={classes.bidLabel} color="textSecondary">
              Closing Date
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <Divider />

      <CardContent>
        <Typography className={classes.bidText} color="textSecondary">
          Supply entire suite of poolside outdoor furniture to replace entire existing items (see attached inventory
          list). <br />
          The furniture needs to be replaced one for one with similar features (eg. existing sun lounger should be
          replaced with a new sun louger, existing small round tables should be replaced by new small round table). You
          may propose a different brand of furniture, as long as the main features are the same as existing. <br />
          The outdoor furniture should be weather proof. <br />
          You may come down for a site visit to view the furniture we have....
        </Typography>
      </CardContent>

      <Divider />

      <CardActions className={classes.bidReadMore}>
        <Button color="primary" className={classes.bidReadMoreButton}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default HeroSection;
