import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, FormGroup, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: '24px',
    color: '#2D2A26',
  },
}));

function RemoveFromListModalContent({ files, onFileChange }) {
  const classes = useStyles();
  return <Typography className={classes.title}>Remove this vendor from My Approved Vendors?</Typography>;
}

export default RemoveFromListModalContent;
