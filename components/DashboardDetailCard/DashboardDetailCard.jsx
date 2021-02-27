import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid,Box, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    cardColored: {
        padding: theme.spacing(1.25),
        margin: 0,
        borderRadius: "4px",
        boxShadow: "0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 0 0 0 rgba(63, 63, 68, 0.05)",
        backgroundColor: "#ffffff"
    },
    headerTitle: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '28px',
        color: 'black',
    },
    countTitle: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '28px',
        color: 'black',
    },
    boxStyle:{
        height:40,
        width:40,
        borderRadius:20,
        justifyContent:'center',
        display:'flex',
        alignItems:'center',
    }
}));

const DashboardDetailCard = props => {
    const { detailData } = props;

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid
                alignItems="center"
                container
                justify="space-between"
                spacing={2}
                
            >
                {detailData.map((item, index) => {
                    return (
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}  >
                            <Card className={classes.cardColored}
                             style={item.active?{backgroundColor:'#36b0c9'}:{backgroundColor:'white'}}
                            >
                                <Typography
                                    component="h2"
                                    gutterBottom
                                    variant="overline"
                                    className={classes.headerTitle}
                                    style={item.active?{color:'white'}:{color:'black'}}
                                >
                                    {item.title}
                                </Typography>
                                <Grid container justify={'space-between'}>
                                    <Typography
                                        component="h2"
                                        gutterBottom
                                        variant="overline"
                                        className={classes.countTitle}
                                        style={item.active?{color:'white'}:{color:'black'}}
                                    >
                                        {item.count}
                                    </Typography>
                                   <Box
                                    className={classes.boxStyle}
                                    style={item.active?{backgroundColor:'white'}:{backgroundColor:'#484542'}}
                                   >
                                    {item.icon}
                                    </Box>
                                </Grid>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </React.Fragment>
    );
};



export default DashboardDetailCard;
