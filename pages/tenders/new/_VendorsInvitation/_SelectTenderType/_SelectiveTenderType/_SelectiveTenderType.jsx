import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import withDeferComponentRender from 'components/withDeferComponentRender';

import InforBar from './_InforBar';
import InviteFromAVL from './_InviteFromAVL';
import InviteNotFromAVL from './_InviteNotFromAVL';
import VendorInvited from './_VendorInvited';

import useStyles from './styles';

const SelectiveTenderType = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.selectiveTender}>
      <Typography variant="h5">Start selecting vendors to invite for your tender</Typography>
      <InforBar />
      <InviteFromAVL />
      <InviteNotFromAVL />
      <VendorInvited />
    </Grid>
  );
};

SelectiveTenderType.propTypes = {};

SelectiveTenderType.defaultProps = {};

export default withDeferComponentRender(SelectiveTenderType);
