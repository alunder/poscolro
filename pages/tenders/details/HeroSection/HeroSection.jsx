/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Avatar, Grid, Typography, Box } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import OpenWithIcon from '@material-ui/icons/OpenWith';

const useStyles = makeStyles(theme => ({
  heroImage: {
    marginBottom: 42,
    backgroundImage:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url("https://picsum.photos/id/1029/1680/360")',
    height: 360,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },
  heroTextContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    height: 'calc(360px - 18px)',
  },
  heroTitleBox: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  heroTitle: {
    marginRight: 16,
    fontWeight: 500,
    fontSize: 29,
    lineHeight: '32px',
    color: '#FFFFFF',
  },
  heroInfo: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: '18px',
    color: '#FFFFFF',
  },
  heroLocationIcon: {
    marginRight: 8,
    fontSize: 20,
    color: '#FFF',
  },
  heroMapImg: {
    marginLeft: 8,
  },
  heroAvatar360: {
    marginRight: 8,
    width: 20,
    height: 20,
    background: '#E6E9ED',
  },
  hero360Icon: {
    color: '#90A4AE',
    fontSize: 14,
  },
}));

function HeroSection() {
  const classes = useStyles();

  return (
    <div className={classes.heroImage}>
      <Container className={classes.heroTextContainer}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="flex-end" className={classes.heroTitleBox}>
              <Typography variant="h3" className={classes.heroTitle}>
                One Amber
              </Typography>
              <Typography variant="body1" className={classes.heroInfo}>
                MCST No. 3657
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <LocationOnIcon className={classes.heroLocationIcon} />
              <Typography variant="body1" className={classes.heroInfo}>
                Southeast | 5 Amber Gardens #01-14 One Amber Singapore 439973
              </Typography>
              <img alt="google" src="/images/google.png" className={classes.heroMapImg} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="body1" className={classes.heroInfo}>
              Project Size 900sqft • Number of Floors 24-38 • Number of Blocks 5 • Project Size 900sqft
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <Avatar className={classes.heroAvatar360}>
                <OpenWithIcon className={classes.hero360Icon} />
              </Avatar>

              <Typography variant="body1" className={classes.heroInfo}>
                View 360°
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HeroSection;
