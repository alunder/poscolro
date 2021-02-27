import React, { useState } from 'react';
import { ResponsiveContainer, Bar, BarChart } from 'recharts';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Box, Card } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
const useStyles = makeStyles(theme => ({
  root: {},
  headerTitle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    color: '#fff',
  },
  background: {
    padding: theme.spacing(1.25),
    color: 'white',
    backgroundColor: '#36b0c9',
  },
  pieCardColored: {
    borderRadius: '4px',
    boxShadow: ' 0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 0 0 0 rgba(63, 63, 68, 0.05)',
    backgroundColor: '#36b0c9',
    marginTop: theme.spacing(2),
  },
  background_packages: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '10px',
    paddingLeft: '17px',
    paddingBottom: '10px',
    paddingRight: '17px',
    backgroundColor: '#36b0c9',
  },
  headertitl_number: {
    fontWeight: 500,
    lineHeight: 1.25,
    color: '#fff',
  },
}));

const LineChartComponent = props => {
  const { barData, lineDetailData } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.pieCardColored}>
        <Typography variant="h6" className={classes.background}>
          Tender Packages Ageing Report
        </Typography>
        <Typography variant="p" className={classes.background}>
          Days overdue
        </Typography>
        <ResponsiveContainer width="100%" height={225}>
          <BarChart  data={barData} style={{ justify: 'center', alignContent: 'center' }}>
            <Bar dataKey="projectCount" fill="#a4deea" />
          </BarChart>
        </ResponsiveContainer>
        {lineDetailData.map((item, index) => {
          return (
            <Grid className={classes.background_packages}>
              <Typography className={classes.headerTitle}>{item.projectNo}</Typography>
              <Typography className={classes.headertitl_number}>{item.projectCount}</Typography>
            </Grid>
          );
        })}

        <Grid className={classes.background_packages} style={{ justifyContent: 'flex-end' }}>
          <Typography className={classes.headertitl_number} style={{ display: 'flex', alignItems: 'center' }}>
            SEE ALL <ArrowRightAltIcon />
          </Typography>
        </Grid>
      </Card>
    </React.Fragment>
  );
};

export default LineChartComponent;
