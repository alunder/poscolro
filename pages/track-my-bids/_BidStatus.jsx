import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, colors } from '@material-ui/core';
import Label from 'components/Label';

const useStyles = makeStyles({
  status: {
    width: '78px',
    minWidth: '78px',
    textAlign: 'center',
    background: '#C4C3C2',
    color: '#FFF',
    textTransform: 'uppercase',
    borderRadius: '4px',
    fontSize: '11px',
    fontWeight: 500,
    lineHeight: '16px',
    padding: '4px 8px',
    height: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  coloredLabel: {
    fontWeight: '500',
    fontSize: '11px',
    lineHeight: '16px',
    color: '#FFF',
    background: '#C4C3C2',
  },

  colors: {
    background: ({ type }) => {
      const mapping = {
        Draft: '#FFF',
        Open: '#4CAF50',
        Reviewing: '#FF671D',
        Won: '#36B0C9',
      };
      return mapping[type];
    },

    color: ({ type }) => {
      const mapping = {
        Draft: '#828282',
        Archived: '#FFF',
      };
      return mapping[type];
    },

    border: ({ type }) => {
      const mapping = {
        Draft: '1px solid #BDBDBD',
      };
      return mapping[type];
    },
  },
});

const BidStatus = props => {
  const classes = useStyles(props);
  const { status } = props;

  return (
    status && (
      <Typography className={`${classes.status} ${classes.colors}`} component="span">
        {status}
      </Typography>
    )
  );
};

export default BidStatus;
