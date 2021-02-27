import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import ProjectCard from 'components/ProjectCard';

const useStyles = makeStyles(() => ({
  root: {},
}));

const ProjectContent = props => {
  const { projects, className, ...rest } = props;
  const classes = useStyles();
  return (
    <div {...rest} className={clsx(classes.root, className)}>
      {projects.length <= 0 ? (
        <Grid container direction="row" justify="center" alignItems="center">
          <img src="/images/pm-project-empty-state.png" />
        </Grid>
      ) : (
        <Grid container direction="row" spacing={2}>
          {projects.map(project => (
            <Grid item key={project.id} xl={3} lg={4} md={4} s={6} xs={12}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

ProjectContent.propTypes = {
  className: PropTypes.string,
};

export default ProjectContent;
