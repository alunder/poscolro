import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Topbar from '../Topbar';

const useStyles = makeStyles(() => ({
  content: {
    flexGrow: 1,
    width: 1280,
    margin: '0 auto',
    padding: 24,
    maxWidth: '100%',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography variant="body1">
      <Topbar />
      <main className={classes.content}>{children}</main>
    </Typography>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
