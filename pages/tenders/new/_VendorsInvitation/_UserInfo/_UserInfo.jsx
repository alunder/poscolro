import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const UserInfo = ({ className, noAvatar, name, isVerified }) => {
  return (
    <Box display="flex" alignItems="center" className={className}>
      {!noAvatar && (
        <Box marginRight={2}>
          <Avatar>Avatar</Avatar>
        </Box>
      )}

      <Box flexGrow={1} flexBasis={1} overflow="hidden">
        <Typography variant="h5">{name}</Typography>

        {isVerified && (
          <Typography variant="body2" color="textSecondary">
            <Box component="span" display="flex" alignItems="center">
              <CheckCircleOutlineIcon color="primary" fontSize="small" />
              <span>Verified by Really</span>
            </Box>
          </Typography>
        )}
      </Box>
    </Box>
  );
};

UserInfo.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  noAvatar: PropTypes.bool,
  isVerified: PropTypes.bool,
};

UserInfo.defaultProps = {
  className: '',
  name: '',
  noAvatar: false,
  isVerified: false,
};

export default UserInfo;
