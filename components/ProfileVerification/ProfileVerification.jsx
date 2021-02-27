import React, { useState } from 'react';
import RouterLink from 'next/link';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    padding: '0px !important',
  },
  avatar: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.white,
  },
  actions: {
    justifyContent: 'flex-end',
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const ProfileVerification = props => {
  const { className, emailVerified, companyStatus, ...rest } = props;
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Verification Status" />
      <Divider />
      <CardContent className={classes.content}>
        <List disablePadding>
          <ListItem divider={true} key={1}>
            <ListItemAvatar>
              <Avatar className={classes.avatar} size="small" style={{ backgroundColor: emailVerified ? '#4caf50' : '#C4C3C2' }}>
                {emailVerified && <CheckIcon />}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Email" />
            <Typography variant="subtitle2">{emailVerified ? 'Verified' : 'Not Verified'}</Typography>
          </ListItem>
          <ListItem divider={false} key={2}>
            <ListItemAvatar>
              <Avatar className={classes.avatar} size="small" style={{ backgroundColor: companyStatus === 'Active' ? '#4caf50' : '#C4C3C2' }}>
                {companyStatus === 'Active' && <CheckIcon />}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Profile" />
            <Typography variant="subtitle2">{companyStatus}</Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

ProfileVerification.propTypes = {
  className: PropTypes.string,
};

export default ProfileVerification;
