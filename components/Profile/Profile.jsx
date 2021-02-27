import React from 'react';
import RouterLink from 'next/link';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: theme.palette.really.secondary.c285,
  },
  name: {
    marginTop: theme.spacing(1),
    fontSize: 14,
  },
  position: {
    lineHeight: 1,
    fontSize: 12,
  },
}));

const Profile = props => {
  const { className, currentUser, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar className={classes.avatar}>{currentUser.firstName && currentUser.firstName.charAt(0)}</Avatar>
      <Typography className={classes.name} variant="h4">
        {currentUser.firstName}
      </Typography>
      <Typography className={classes.position} variant="body1">
        {currentUser.role}
      </Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
