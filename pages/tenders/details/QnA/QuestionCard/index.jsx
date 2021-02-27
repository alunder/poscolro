import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardMedia,
  Avatar,
  Link,
  Typography,
  Divider,
  colors,
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CommentBubble from './CommentBubble';
import CommentForm from './CommentForm';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 24,
  },
  cardHeader: {
    padding: 0,

    '& .MuiCardHeader-avatar': {
      marginRight: 8,
    },
  },
  cardContent: {
    padding: '0 !important',
  },
  avatar: {
    width: 44,
    height: 44,
    background: colors.blue[600],
  },
  author: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '24px',
    color: '#2D2A26',
  },
  date: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: '18px',
    color: '#90A4AE',
  },

  accessTimeIcon: {
    color: theme.palette.text.secondary,
    fontSize: '14px',
    height: 14,
    width: 14,
    marginRight: 6,
  },
  message: {
    marginTop: 24,
    marginBottom: 36,
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: '18px',
    color: '#2D2A26',
  },

  mediaArea: {
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 400,
    backgroundPosition: 'initial',
  },
  divider: {
    marginTop: 12,
    marginBottom: 24,
  },
}));

function PostCard({ question, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        avatar={<Avatar src="https://picsum.photos/id/1069/40" className={classes.avatar} />}
        disableTypography
        className={classes.cardHeader}
        title={
          <Typography variant="h6" className={classes.author}>
            {question.author.name}
          </Typography>
        }
        subheader={
          <Typography variant="body2" className={classes.date}>{`Posted on: ${question.created_at}`}</Typography>
        }
      />

      <CardContent className={classes.cardContent}>
        <Typography className={classes.message} variant="body1">
          {question.message}
        </Typography>

        {question.media && (
          <CardActionArea className={classes.mediaArea}>
            <CardMedia className={classes.media} image={question.media} />
          </CardActionArea>
        )}

        <Divider className={classes.divider} />

        {question.comments && (
          <div className={classes.comments}>
            {question.comments.map(comment => (
              <CommentBubble comment={comment} key={comment.id} />
            ))}
          </div>
        )}

        {/* <Divider className={classes.divider} /> */}
        {/* <CommentForm /> */}
      </CardContent>
    </Card>
  );
}

PostCard.propTypes = {
  className: PropTypes.string,
  question: PropTypes.object.isRequired,
};

export default PostCard;
