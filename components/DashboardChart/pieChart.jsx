import React, { useState } from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell, Sector } from 'recharts';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Box, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  headerTitle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '28px',
  },
  background: {
    boxShadow: '0 1px 0 0 #eeeeee',
    padding: theme.spacing(1.25),
  },
  pieCardColored: {
    borderRadius: '4px',
    boxShadow: ' 0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 0 0 0 rgba(63, 63, 68, 0.05)',
    backgroundColor: '#fff',
    marginTop: theme.spacing(1.25),
  },
  open_title: {
    fontSize: '24px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '28px',
    letterSpacing: '-0.06px',
    color: '#80ba0c',
    float: 'left',
    padding: 5,
  },
  pending_title: {
    fontSize: '24px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '28px',
    letterSpacing: '-0.06px',
    color: '#eb5757',
    float: 'left',
    padding: 5,
  },
  awarded_title: {
    fontSize: '24px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '28px',
    letterSpacing: '-0.06px',
    color: '#36b0c9',
    float: 'left',
    padding: 5,
  },

  same_title: {
    fontSize: '11px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.25,
    letterSpacing: 'normal',
    color: '#607d8b',
    float: 'left',
  },
  box_show: {
    paddingBottom: '12px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    border: '1px solid #f2f2f2',
  },
}));

const PieChartComponent = props => {
  const { pieChartData, colorsFilled } = props;
  var [activeIndex, setActiveIndexId] = useState(0);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.pieCardColored}>
        <Typography variant="h6" className={classes.background}>
          All Tender Packages by Status
        </Typography>
        <ResponsiveContainer width="109%" height={300}>
          <PieChart width={200} height={300}>
            <Pie
              activeIndex={activeIndex}
              data={pieChartData}
              cx={140}
              cy={150}
              style={{ padding: '0 20px !important' }}
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              onMouseEnter={(e, id) => setActiveIndexId(id)}
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colorsFilled[index % colorsFilled.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Grid container>
          {pieChartData.map((item, index) => {
            return (
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.box_show}>
                <Typography
                  className={[classes.open_title]}
                  style={{ color: colorsFilled[index % colorsFilled.length] }}
                >
                  {item.percentage}
                </Typography>
                <Typography className={[classes.same_title]}>{item.subtitle}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </React.Fragment>
  );
};

export default PieChartComponent;
