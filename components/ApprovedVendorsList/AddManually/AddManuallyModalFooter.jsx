/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, Menu, MenuItem, Avatar, colors } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  button: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

function AddManuallyModalFooter(props) {
  const { isValid, onClose } = props;
  console.log('TCL: AddManuallyModalFooter -> isValid', isValid);
  const classes = useStyles();

  return (
    isValid && (
      <Button color="primary" variant="contained" onClick={onClose} className={classes.button}>
        Add
      </Button>
    )
  );
}

export default AddManuallyModalFooter;
