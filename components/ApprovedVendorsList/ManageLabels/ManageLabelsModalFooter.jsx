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
}));

function ManageLabelsModalFooter(props) {
  const { onApply, onCancel } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={onCancel}>Cancel</Button>
      <Button variant="contained" color="primary" onClick={onApply}>
        Apply
      </Button>
    </div>
  );
}

export default ManageLabelsModalFooter;
