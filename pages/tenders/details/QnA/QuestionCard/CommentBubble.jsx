import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography, Tooltip, IconButton, colors } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  bubble: {
    flexGrow: 1,
    padding: 16,
    background: '#F4F6F8',
    border: '1px solid #E6E6E6',
    marginLeft: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  author: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '24px',
    color: '#2D2A26',
  },
  avatar: {
    width: 44,
    height: 44,
    background: colors.green[600],
  },
  time: {
    marginLeft: 'auto',
  },
  message: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: '18px',
    color: '#2D2A26',
  },
  optionsButton: {
    alignSelf: 'center',
  },
}));

function CommentBubble({ comment, className, ...rest }) {
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar src="https://picsum.photos/id/1027/40" className={classes.avatar} />
      <div className={classes.bubble}>
        <div className={classes.header}>
          <Typography variant="h6" className={classes.author}>
            {comment.author.name}
          </Typography>
          {/* <Typography className={classes.time} variant="body2">
            {moment(comment.created_at).fromNow()}
          </Typography> */}
        </div>
        <Typography className={classes.message} variant="body1">
          {comment.message}
        </Typography>
      </div>
      <div className={classes.optionsButton}>
        <Tooltip title="Options">
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}

CommentBubble.propTypes = {
  className: PropTypes.string,
  comment: PropTypes.object.isRequired,
};

export default CommentBubble;
