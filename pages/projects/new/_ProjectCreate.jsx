import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ProfileInfo from 'components/ProfileInfo';
import ProjectAvatar from 'components/ProjectAvatar';
import { Typography, Button, Grid } from '@material-ui/core';
import ProjectForm from './_ProjectForm';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
  },
}));

const ProjectCreate = ({ currentUser, props }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="row" alignItems="center">
      <Grid item>
        <ProjectForm />
      </Grid>
    </Grid>
  );
};

ProjectCreate.propTypes = {
  className: PropTypes.string,
};

export default ProjectCreate;
