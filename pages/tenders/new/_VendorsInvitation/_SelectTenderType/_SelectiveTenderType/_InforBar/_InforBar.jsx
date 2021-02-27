import React from 'react';

import { Typography, Paper } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import useStyles from '../styles';

const infor = [
  '•   Only the vendors you have invited will be able to view and bid for this tender.',
  '•   If your invited vendor is not on Really, they must sign up using the email you’ve invited them with.',
  // eslint-disable-next-line max-len
  '•   Once your tender goes live, we will send an email to notify your selected vendors that your tender is opened for bidding. ',
  '•   You may invite more vendors after the tender is published.',
];

const InforBar = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.inforBar}>
      <span className={classes.inforBarIcon}>
        <InfoIcon />
      </span>

      <div className={classes.inforBarMessage}>
        {infor.map((message, i) => (
          <Typography key={i.toString()} variant="h6" color="primary">
            {message}
          </Typography>
        ))}
      </div>
    </Paper>
  );
};

export default InforBar;
