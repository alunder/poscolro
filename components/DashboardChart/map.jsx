import React, { useState } from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps"
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid,Card } from '@material-ui/core';
import MapDetailComponent from './mapDetail'
const { compose } = require("recompose");

const useStyles = makeStyles(theme => ({
    root: {},
    background: {
        boxShadow: "0 1px 0 0 #eeeeee",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(1.75),
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '28px',
    },
    pieCardColored: {
        borderRadius: "4px",
        boxShadow: " 0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 0 0 0 rgba(63, 63, 68, 0.05)",
        backgroundColor: "#fff",
      
    },
}));


const MapWithAMarker = compose(
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 1.290270, lng: 103.851959 }}
        defaultOptions={{
            disableDefaultUI: true, // disable default map UI
            draggable: true, // make map draggable
            keyboardShortcuts: false, // disable keyboard shortcuts
            scaleControl: true, // allow scale controle
            scrollwheel: true, // allow scroll wheel
     
          }}
    >
        {props.markerposition.map((item, index) => {
            return (
                <Marker
                    position={item}
                    icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                />
            )
        })

        }
        {props.completemarkerposition.map((item, index) => {
            return (
                <Marker
                    position={item}
                    icon="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                />
            )
        })

        }
    </GoogleMap>
);



const MapComponent = props => {
    const classes = useStyles();
    const [markerposition, setmarkerposition] = useState([
      { lat: 1.290270, lng: 103.851959 },
      { lat: 1.287870, lng: 103.823959 },
      { lat: 1.279970, lng: 103.803759 },
      { lat: 1.309980, lng: 103.923759 },
      { lat: 1.289980, lng: 103.873759 },
      { lat: 1.299980, lng: 103.893759 },
    ])
    const [completemarkerposition, setcompletemarkerposition] = useState([
      { lat: 1.318012, lng: 103.863759 },
      { lat: 1.309580, lng: 103.823759 },
      { lat: 1.319580, lng: 103.923759 },

    ])

    return (
        <React.Fragment>
            <Card className={classes.pieCardColored}>
                <Typography variant="h6" className={classes.background}>
                    Project Location</Typography>
                <Grid container>
                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                        <MapWithAMarker
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbUB3CReV3ASJjspQq8YlzbyRfo-eoF-U&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `635px`, marginTop:16 }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            markerposition={markerposition}
                            completemarkerposition={completemarkerposition}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5} >
                        <MapDetailComponent/>
                    </Grid>
                </Grid>
            </Card>
        </React.Fragment>
    );
};

//googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAAaMuNKPfiDXnqLaZJVB16lBwnAV5XDs&v=3.exp&libraries=geometry,drawing,places"

export default MapComponent;
