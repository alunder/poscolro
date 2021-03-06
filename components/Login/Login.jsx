import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
  Button,
  colors
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/PeopleOutlineOutlined';
import Divider from '@material-ui/core/Divider';

import Page from '../Page';
import gradients from '../gradients';
import LoginForm from '../LoginForm';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(6, 2),
  },
  card: {
    maxWidth: theme.breakpoints.values.sm,
    width: '40%',
    overflow: 'unset',
    display: 'flex',
    position: 'relative',
    marginTop: theme.spacing(7),
    '& > *': {
      flexGrow: 1,
      flexBasis: '40%',
      width: '40%'
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  peopleIcon: {
    backgroundImage: 'linear-gradient(180deg, #56CCF2 0%, #56CCF2 100%)',
    color: theme.palette.white,
    borderRadius: '100px',
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  githubButton: {
    marginTop: theme.spacing(2),
    backgroundColor: colors.blueGrey[900],
    color: theme.palette.white,
    '&:hover': {
      backgroundColor: colors.blueGrey[900]
    }
  },
  accountRegistrationForm: {
    marginTop: theme.spacing(8)
  },
  registrationTitle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '25px',
    lineHeight: '28px',
    /* or 112% */
    letterSpacing: '-0.06px',
    color: '#263238',
    marginBottom:  theme.spacing(3)
  },
}));


const Login = () => {
  const classes = useStyles();

  return (
    <Page title="Login">
      <div className={classes.root}>
        <Card className={classes.card} >
          <CardContent className={classes.content}>
            <PeopleIcon className={classes.peopleIcon} />
            <Typography
              gutterBottom
              className={classes.registrationTitle}
            >
              Login to REALLY
            </Typography>
            <Divider />
            <LoginForm className={classes.accountRegistrationForm} />
          </CardContent>
        </Card>
      </div>
    </Page>
  )
};

export default Login;
