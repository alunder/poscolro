import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Grid } from '@material-ui/core';

import useStyles from '../styles';

const RequireVisit = ({ requireVisit, dateTime, name, phone, email, shouldContact }) => {
  const classes = useStyles();

  if (!requireVisit) return null;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardPadding}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <span style={{ display: 'block', marginBottom: '16px' }} className={classes.bigSpan}>
              A site visit is required
            </span>
            <p>{dateTime}</p>
          </Grid>
          <Grid container style={{ padding: '8px' }}>
            <Avatar style={{ backgroundColor: '#0071ce' }}>{name.charAt(0)}</Avatar>
            <div className={classes.contactDetails}>
              <p>{name}</p>
              <p>{phone}</p>
              <p>{email}</p>
            </div>
          </Grid>
          {shouldContact && (
            <Grid item md={12} xs={12}>
              Vendors should make contact to arrange an appointment for site visit before heading down.
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

RequireVisit.propTypes = {
  dateTime: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  requireVisit: PropTypes.bool,
  shouldContact: PropTypes.bool,
};

RequireVisit.defaultProps = {
  dateTime: '',
  email: '',
  name: '',
  phone: '',
  requireVisit: false,
  shouldContact: false,
};

export default RequireVisit;
