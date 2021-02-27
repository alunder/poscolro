import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
}));

const PageContainer = props => {
  const classes = useStyles();
  const { children } = props;

  return <div className={classes.root}>{children}</div>;
};

PageContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PageContainer;
