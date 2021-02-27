import React, { useState } from 'react';
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";
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
        boxShadow: "0 1px 0 0 #eeeeee",
        padding: theme.spacing(1.25),
    },
    pieCardColored: {
        borderRadius: "4px",
        boxShadow: " 0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 0 0 0 rgba(63, 63, 68, 0.05)",
        backgroundColor: "#fff",
        marginTop: theme.spacing(1.25),
       
    },
    barchartConrtainer:{
        paddingTop:25,
        paddingBottom:25
    }
}));


const BarChartComponent = props => {
    const { barChartData, } = props;
    const monthTickFormatter = (tick) => {
  
        return tick
      };
    const classes = useStyles();

    return (
        <React.Fragment>
            <Card className={classes.pieCardColored}>
                <Typography variant="h6" className={classes.background}>
                   Tender Packages by Project</Typography>
                <ResponsiveContainer width="100%" height={350} paddingTop="5% " >
                <BarChart
                width={800}
                height={280}
                data={barChartData}
                style={{ justify: 'center', alignContent: "center", marginTop:25 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
                <YAxis />
                <Bar dataKey="pv" fill="#ffd040" />
                <Bar dataKey="uv" fill="#d41367" />
                <Bar dataKey="cv" fill="#36b0c9" />
              </BarChart>
                </ResponsiveContainer>
            </Card>
        </React.Fragment>
    );
};



export default BarChartComponent;
