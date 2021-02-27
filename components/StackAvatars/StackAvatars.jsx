import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { makeStyles } from '@material-ui/styles';
import { Tooltip, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  avatar: {
    marginRight:'-8px',
    border: '1px red',
    '&:hover': {
      zIndex: 50
    }
  },
  more: {
    color: theme.palette.white,
    fontSize: 14,
    backgroundColor: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium
  }
}));

function StackAvatars({
  avatars, limit, className, ...rest
}) {
  const classes = useStyles();

  const avatarNodes = avatars.slice(0, limit).map((item, key) => (
    <Avatar
      className={classes.avatar}
      src={item}
      key={uuid()}
      style={{zIndex: limit-key}}
    />
  ));

  if (avatars.length > limit) {
    avatarNodes.push(
      <Avatar className={clsx(classes.avatar, classes.more)} key={uuid()}>
        +
        {avatars.length - limit}
      </Avatar>
    );
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {avatarNodes}
    </div>
  );
}

StackAvatars.propTypes = {
  avatars: PropTypes.array,
  className: PropTypes.string,
  limit: PropTypes.number
};

StackAvatars.defaultProps = {
  avatars: [],
  limit: 3
};

export default memo(StackAvatars);
