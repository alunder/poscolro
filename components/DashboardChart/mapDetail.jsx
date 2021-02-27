import React, { useState } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Box, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    cardOfficeDetail: {
        borderRadius: "4px",
        boxShadow: " 0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 0 0 0 rgba(63, 63, 68, 0.05)",
        backgroundColor: "#fff",
        margin: theme.spacing(2.25),
    },
    headerTitleCard: {
        paddingTop: theme.spacing(1.25),
        paddingLeft: theme.spacing(1.75),
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '28px',
        color: 'black'
    },
    subTitleCard: {
        paddingBottom: theme.spacing(1.25),
        paddingLeft: theme.spacing(1.75),
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '14px',
        lineHeight: '28px',
        color: 'darkgrey'
    },
    locationContainer: {
        flexDirection: 'row',
        paddingLeft: theme.spacing(1.75),
    }
}));



const MapDetailComponent = props => {
    const classes = useStyles();
    return (
        <React.Fragment>
          <Card className={classes.cardOfficeDetail}>
                            <Typography variant="h6" className={classes.headerTitleCard}>
                                Project ID #000138
                    </Typography>
                            <Typography variant="h6" className={classes.subTitleCard}>
                                Office Renovation Tower 1 and Tower 2</Typography>
                            <Typography variant="h6" className={classes.headerTitleCard}>
                                LOCATION
                    </Typography>
                            <Typography variant="h6" className={classes.subTitleCard}>
                                Raffles Place</Typography>
                            <Typography variant="h6" className={classes.headerTitleCard}>
                                NO OF OPEN TENDERS
                    </Typography>
                            <Typography variant="h6" className={classes.subTitleCard}>
                                39</Typography>
                            <Typography variant="h6" className={classes.headerTitleCard}>
                                NO OF PENDING AWARD TENDERS
                    </Typography>
                            <Typography variant="h6" className={classes.subTitleCard}>
                                12</Typography>
                            <Typography variant="h6" className={classes.headerTitleCard}>
                                NO OF AWARD TENDERS
                    </Typography>
                            <Typography variant="h6" className={classes.subTitleCard}>
                                8</Typography>
                        </Card>
                        <Grid container flexDirection='row' className={classes.locationContainer}>
                           <LocationOnIcon style={{color:'red', marginTop:14}} />
                           <Grid item>
                           <Typography variant="h6" className={classes.headerTitleCard}> Active Project
                                </Typography>
                                <Typography variant="h6" className={classes.subTitleCard}>
                                View Current Tender Package</Typography>
                                </Grid>
                        </Grid>
                        <Grid container flexDirection='row' className={classes.locationContainer}>
                           <LocationOnIcon style={{color:'yellow', marginTop: 14}} />
                           <Grid item>
                           <Typography variant="h6" className={classes.headerTitleCard}> Archeived Project
                                </Typography>
                                <Typography variant="h6" className={classes.subTitleCard}>
                                View Past Tender Package</Typography>
                                </Grid>
                        </Grid>
        </React.Fragment>
    );
};



export default MapDetailComponent;
