import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3)
  },
  headerTitle: {
    fontStyle: 'normal',
    marginBottom: 0,
    fontWeight: 500,
    fontSize: 25,
    letterSpacing: -0.06,
    color: '#263238',
  }
}));

const PageHeader = props => {
  const { title, subtitle, ...rest } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        alignItems="center"
        container
        justify="space-between"
      >
        <Grid
          item
        >
          <Typography
            component="h2"
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
        </Grid>
      </Grid>
    </div>
  );
};

PageHeader.propTypes = {
  tabTitle: PropTypes.string,
  headerTitle: PropTypes.string,
};

export default PageHeader;
