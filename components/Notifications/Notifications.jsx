import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Popover, Divider, Typography, Button, colors } from '@material-ui/core';

import NotificationList from '../NotificationList';
import EmptyList from '../EmptyList';

const useStyles = makeStyles(theme => ({
  root: {
    width: 350,
    maxWidth: '100%',
  },
  header: {
    backgroundColor: colors.grey[50],
    padding: theme.spacing(2),
  },
  actions: {
    backgroundColor: colors.grey[50],
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Notifications = props => {
  const { notifications, anchorEl, open, onClose, ...rest } = props;

  const classes = useStyles();

  return (
    <Popover
      {...rest}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      onClose={onClose}
      open={open}
    >
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant="h4">Notifications</Typography>
        </div>
        <Divider />
        {notifications.length > 0 ? <NotificationList notifications={notifications} /> : <EmptyList />}
        <Divider />
        <div className={classes.actions}>
          <Button component={RouterLink} size="small" to="#">
            See all
          </Button>
        </div>
      </div>
    </Popover>
  );
};

Notifications.propTypes = {
  anchorEl: PropTypes.any,
  className: PropTypes.string,
  notifications: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

Notifications.defaultProps = {
  open: false,
  onClose: () => {},
};

export default Notifications;
