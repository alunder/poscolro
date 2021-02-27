import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid,
  Icon,
  Divider,
  TextareaAutosize,
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import ProjectAvatar from '../ProjectAvatar';
import ProjectDetails from './ProjectDetails';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "-0.05px",
    color: "#37474F",
  },
  media: {
    height: '199px',
    border: '1px solid #eee',
    padding: '8px',
  },
  projectDetailsContainer: {
    margin: theme.spacing(1.5)
  }
}));

const ProjectDetailsContainer = ({project, ...props}) => {
  const classes = useStyles();

  return(
    <Card className={classes.root}>
      <CardHeader title="Project Details" />
      <Divider />
      <Grid container className={classes.projectDetailsContainer}>
        <Grid item xs={3} s={3}>
          <CardMedia
            component="img"
            className={classes.media}
            image="/images/placeholder-avatar.png"
            title="Contemplative Reptile"
          />
        </Grid>
        <Grid item xs={9} s={9}>
          <ProjectDetails project={project}/>
        </Grid>
      </Grid>
    </Card>
  )
}

export default ProjectDetailsContainer;
