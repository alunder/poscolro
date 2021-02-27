import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  svgIcon: {
    verticalAlign: 'middle !important',
  },
  actionButton: {
    marginTop: theme.spacing(2),
    backgroundColor: '#fafafa',
    color: '#2d2a26',
    height: '36px',
  },
  rightButton: {
    float: 'right',
    backgroundColor: '#36b0c9 !important',
    color: '#ffffff',
  },
  verticalCenter: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  leftButton: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 0,
      minWidth: '100px',
    },
  },
}));

export default function ButtonForm(props) {
  const { text, handleClick, arrow } = props;
  const classes = useStyles();
  const { actionButton, svgIcon, rightButton, verticalCenter, leftButton } = classes;
  return (
    <Button
      variant="contained"
      className={clsx(actionButton, arrow === 'right' ? rightButton : leftButton)}
      onClick={handleClick}
    >
      {arrow === 'right' ? (
        <>
          {text} <ArrowForwardIcon className={svgIcon} />
        </>
      ) : (
        <>
          <ArrowBackIcon className={svgIcon} /> {text}
        </>
      )}
    </Button>
  );
}
