import React from 'react';
import { withTheme } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 270,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlgin: 'center',
  },
  media: {
    height: '150px',
    margin: '-10px',
    padding: '0',
  },
  removeButton: {
    width: '100%',
    marginBottom: '-5px',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlgin: 'center',
  },
}));

const ProjectAvatar = props => {
  const classes = useStyles();
  const { theme, action } = props;

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image="/images/placeholder-avatar.png" title="Contemplative Reptile" />
        <CardActions>{action}</CardActions>
      </Card>
    </React.Fragment>
  );
};
export default withTheme(ProjectAvatar);
