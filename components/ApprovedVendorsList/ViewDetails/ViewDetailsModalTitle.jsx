/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, Menu, MenuItem, Avatar, colors } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
  details: {
    fontWeight: 500,
    fontSize: 11,
    lineHeight: '16px',
    textTransform: 'uppercase',
    color: '#90A4AE',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',

      '& p': {
        marginBottom: 0,
      },
      '& svg': {
        margin: '0 0 8px 0',
      },
    },
  },
  title: {
    margin: '8px 0',
    fontWeight: 500,
    fontSize: 29,
    lineHeight: '32px',
    textAlign: 'center',
    color: '#000000',
  },
  reallyVerifiedIcon: {
    width: '12px',
    height: '12px',
    color: '#36b0c9',
  },
  inlineIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  verifiedText: {
    fontSize: 12,
    lineHeight: '18px',
    color: '#90A4AE',
  },
  favoriteIcon: {
    margin: '0 10px',
    cursor: 'pointer',
  },
  button: {
    minWidth: 94,
    marginTop: 14,
    color: '#90A4AE !important',
    border: '1px solid #BDBDBD',
    fontWeight: 500,
    fontSize: 11,
    lineHeight: '16px',
  },
}));

function ViewDetailsModalTitle() {
  const classes = useStyles();
  const [favorite, setFavorite] = useState(false);
  const FavoriteComponent = favorite ? StarIcon : StarBorderIcon;

  return (
    <div>
      <Typography className={classes.details}>My Approved Vendor | Added on 2 Jun 2019</Typography>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>AAA Company Pte Ltd</Typography>
        <FavoriteComponent className={classes.favoriteIcon} onClick={handleFavoriteClick} />
      </div>

      <div className={classes.inlineIcon}>
        <CheckCircleOutlineIcon className={classes.reallyVerifiedIcon} />
        <Typography variant="body2" component="div" className={classes.verifiedText}>
          Verified by Really
        </Typography>
      </div>

      <Button disabled component="div" variant="outlined" className={classes.button}>
        Furniture
      </Button>
    </div>
  );

  function handleFavoriteClick() {
    setFavorite(!favorite);
  }
}

export default ViewDetailsModalTitle;
