import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import BidStatus from './_BidStatus';

const useStyles = makeStyles({
  box: {
    display: 'flex',
  },

  title: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    marginRight: '1rem',
  },
});

const BidCardTitle = props => {
  const { type, typeTitle, typeStatus } = props;
  const classes = useStyles(props);

  return (
    <Box className={classes.box}>
      <Typography className={classes.title}>{typeTitle}</Typography>
      <BidStatus type={type} status={typeStatus} />
    </Box>
  );
};

export default BidCardTitle;
