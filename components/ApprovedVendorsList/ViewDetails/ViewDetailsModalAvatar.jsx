/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, Menu, MenuItem, Avatar, colors } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 130,
    height: 130,
    backgroundColor: '#FFF',
    border: '1px solid #E6E6E6',
  },
}));

function ViewDetailsModalAvatar() {
  const classes = useStyles();

  return <Avatar variant="circle" src="https://picsum.photos/130" className={classes.avatar} />;
}

export default ViewDetailsModalAvatar;
