import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid } from '@material-ui/core';

import useStyles from '../styles';

const TotalTenderBudget = ({ budget }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardPadding}>
        <Grid container className={classes.budgetDetails}>
          <Grid item md={3} xs={3}>
            <span className={classes.bigSpan}>Total Tender Budget</span>
          </Grid>
          <Grid item md={6} xs={6}>
            <span style={{ fontSize: '14px', color: '#90A4AE' }}>This will not be shown to vendors.</span>
          </Grid>
          <Grid item md={3} xs={3}>
            <span className={classes.bigSpan} style={{ float: 'right' }}>
              {budget} {` SGD`}
            </span>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalTenderBudget.propTypes = {
  budget: PropTypes.number,
};

TotalTenderBudget.defaultProps = {
  budget: 0,
};

export default TotalTenderBudget;
