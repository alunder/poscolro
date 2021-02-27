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

function BatchUploadModalFooter(props) {
  const { files, onClose } = props;
  const classes = useStyles();
  const hasFiles = files.length > 0;

  return (
    hasFiles && (
      <Button color="primary" variant="contained" onClick={onClose} className={classes.button}>
        Import
      </Button>
    )
  );
}

export default BatchUploadModalFooter;
