import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import useStyles from './styles';

const InviteItem = ({ vendor, onRemove }) => {
  const classes = useStyles();

  const handleRemove = useCallback(() => {
    onRemove(vendor);
  }, [vendor, onRemove]);

  return (
    <ListItem divider className={classes.item}>
      <ListItemAvatar>
        <Avatar>Avatar</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={vendor.companyName}
        secondary={
          vendor.isVerified ? (
            <Typography variant="body2" color="textSecondary">
              <Box component="span" display="flex" alignItems="center">
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
                <span>Verified by Really</span>
              </Box>
            </Typography>
          ) : null
        }
      />
      <ListItemText primary={vendor.contactPerson} />
      <ListItemText primary={vendor.email} />
      <Box>
        <Chip className={classes.chip} variant="outlined" size="small" label="Basic" />
        <Chip className={classes.chip} variant="outlined" size="small" label="Basic" />
        <Chip className={classes.chip} variant="outlined" size="small" label="Basic" />
      </Box>
      <ListItemSecondaryAction className={classes.itemActions}>
        <IconButton onClick={handleRemove}>
          <CloseIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

InviteItem.propTypes = {
  vendor: PropTypes.object,
  onRemove: PropTypes.func,
};

export default InviteItem;
