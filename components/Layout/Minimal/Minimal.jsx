import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Topbar from '../../Topbar';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
  },
}));

const Minimal = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Topbar {...props} />
      <main className={classes.content}>{children}</main>
    </Container>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  forWho: PropTypes.string,
};

export default Minimal;
