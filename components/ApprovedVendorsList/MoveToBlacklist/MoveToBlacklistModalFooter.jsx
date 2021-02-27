/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, Menu, MenuItem, Avatar, colors } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    textAlign: 'right',

    '& button': {
      margin: '0 .6rem',
      minWidth: 130,
    },

    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',

      '& button': {
        margin: '0 0 8px 0',
        width: '100%',
      },
    },
  },
  buttonCancel: {
    background: 'rgba(54, 176, 201, .1)',
    color: '#36b0c9',
  },
  buttonMove: {
    marginRight: '0 !important',
    padding: '6px 16px',
  },
}));

function MoveToBlacklistModalFooter(props) {
  const { onMove, onCancel } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button color="primary" onClick={onCancel} className={classes.buttonCancel}>
        Cancel
      </Button>
      <Button color="primary" onClick={onMove} className={classes.buttonMove}>
        Move to Blacklist
      </Button>
    </div>
  );
}

export default MoveToBlacklistModalFooter;
