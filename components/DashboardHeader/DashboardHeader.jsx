import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, Hidden } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles(theme => ({
  root: {},
  headerTitle: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '25px',
    lineHeight: '28px',
    /* identical to box height, or 112% */
    letterSpacing: '-0.06px',
  }
}));

const DashboardHeader = props => {
  const { className, title, subtitle,name,headerusername, ...rest } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        alignItems="center"
        container
        justify="space-between"
        spacing={3}
      >
        <Grid
          item
        >
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            {title}
          </Typography>
          <Typography
            component="h1"
            gutterBottom
            variant="h3"
            className={classes.headerTitle}
          >
            {subtitle}
          </Typography>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
            className={headerusername}
          >
            {name}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

DashboardHeader.propTypes = {
  className: PropTypes.string,
  tabTitle: PropTypes.string,
  headerTitle: PropTypes.string,
  name:PropTypes.string
};

export default DashboardHeader;
