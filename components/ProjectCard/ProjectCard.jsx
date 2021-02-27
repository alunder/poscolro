import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, styled } from '@material-ui/styles';
import { compose, spacing } from '@material-ui/system';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  colors,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const StyledDivider = styled(Divider)(compose(spacing));
const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    maxWidth: 390,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {
    padding: '12px 12px 0 12px',
  },
  MuiCardContentRoot: {
    '&:lastChild': {
      paddingBottom: '0px',
    },
  },
  status: {
    display: 'block',
    color: '#fff',
    textAlign: 'center',
    fontSize: '10px',
    borderRadius: '5px',
    marginLeft: '5px',
  },
  draftStatus: {
    backgroundColor: '#828282',
  },
  activeStatus: {
    backgroundColor: '#80ba0c',
  },
  terminatedStatus: {
    backgroundColor: '#bdbdbd',
  },
  terminated: {
    borderLeft: '1px solid #eeeeee',
    paddingLeft: '2px !important',
  },
  projectDateWrapper: {
    padding: '7px 0 7px 0',
  },
  projectDate: {
    textAlign: 'center',
  },
  projectDateLabel: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  pendingAwards: {
    color: '#d30909',
  },
  styledDivider: {
    marginLeft: '-15px',
    marginRight: '-15px',
  },
  dividerTop: {
    marginTop: theme.spacing(1),
  },
  dividerBottom: {
    marginBottom: theme.spacing(1.5),
  },
  continueArrow: {
    textAlign: 'center',
    padding: '18px 0px',
    borderLeft: '1px solid #eeeeee',
  },
  tenderWrapper: {
    marginBottom: '-25px',
  },
  tender: {
    padding: '12px 0',
  },
}));

const ProjectCard = props => {
  const { project, className, ...rest } = props;
  const classes = useStyles();

  const [liked, setLiked] = useState(project.liked);

  const handleLike = () => {
    setLiked(true);
  };

  const handleUnlike = () => {
    setLiked(false);
  };
  return (
    <Card className={clsx(classes.root, classes.card)}>
      <CardMedia component="img" height="168" image={project.avatar ? project.avatar : '/images/profile-logo.png'} />
      <CardContent className={classes.content}>
        <Grid container>
          <Grid item xs={9} m={9}>
            <Typography variant="h5" component="div">
              {project.name} | #{project.id.padStart(5, 0)}
            </Typography>
          </Grid>
          <Grid item xs={3} m={9}>
            <Typography component="p" className={clsx(classes.status, classes.activeStatus)}>
              {project.status}
            </Typography>
          </Grid>
          <Grid item xs={12} m={12}>
            <Typography variant="body2" component="p">
              Location: {project.address}
            </Typography>
          </Grid>
        </Grid>
        <StyledDivider className={clsx(classes.styledDivider, classes.dividerTop)} />
        <Grid container>
          <Grid item xs={4} m={4} className={classes.projectDateWrapper}>
            <Typography variant="h6" component="p" className={classes.projectDate}>
              {project.startDate ? project.startDate : '-'}
            </Typography>
            <Typography variant="caption" component="p" className={classes.projectDateLabel}>
              Start date
            </Typography>
          </Grid>

          <Grid item xs={4} m={4} className={classes.projectDateWrapper}>
            <Typography variant="h6" className={classes.projectDate}>
              {project.endDate ? project.endDate : '-'}
            </Typography>
            <Typography variant="caption" component="p" className={classes.projectDateLabel}>
              End date
            </Typography>
          </Grid>

          <Grid item xs={4} className={clsx(classes.projectDateWrapper, classes.terminated)}>
            <Typography variant="h6" className={classes.projectDate}>
              {Math.abs(project.remaining)} Days
            </Typography>

            <Typography variant="caption" component="p" className={classes.projectDateLabel}>
              { project.remaining < 0 ? `Overdue` : `Remaining`   }
            </Typography>
          </Grid>
        </Grid>
        <StyledDivider className={clsx(classes.styledDivider)} />
        <Grid container className={classes.tenderWrapper}>
          <Grid item xs={5} className={classes.tender}>
            <Typography variant="h6" component="p" className={classes.projectDate}>
              {project.openCount}
            </Typography>
            <Typography variant="caption" component="p" className={classes.projectDateLabel}>
              Open tenders
            </Typography>
          </Grid>
          <Grid item xs={5} className={classes.tender}>
            <Typography variant="h6" component="p" className={clsx(classes.projectDate, classes.pendingAwards)}>
              {project.pendingCount}
            </Typography>
            <Typography variant="caption" component="p" className={classes.projectDateLabel}>
              Pending awards
            </Typography>
          </Grid>
          <Grid item xs={2} className={clsx(classes.projectDateWrapper, classes.continueArrow)}>
            <Link href={`/projects/${project.id}`} prefetch>
              <a>
                <ArrowForwardIcon />
              </a>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
