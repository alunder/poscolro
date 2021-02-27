/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& button': {
      color: '#484542',
    },
  },
}));

function ViewDetailsModalAction(props) {
  const { onManage, onEdit, onMove, onRemove, onClose } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Tooltip title="Manage Labels">
        <IconButton aria-label="manage-label" onClick={onManage}>
          <LabelOutlinedIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Edit Contact">
        <IconButton aria-label="edit" onClick={onEdit}>
          <EditIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Move to Blacklist">
        <IconButton aria-label="block" onClick={onMove}>
          <NotInterestedIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Remove from list">
        <IconButton aria-label="remove" onClick={onRemove}>
          <DeleteOutlineIcon />
        </IconButton>
      </Tooltip>

      <IconButton aria-label="close" onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </div>
  );
}

export default ViewDetailsModalAction;
