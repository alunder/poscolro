/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles(theme => ({
  box: {
    position: 'relative',
    background: '#f0f7fa',
    borderRadius: '4px',
    overflow: 'hidden',

    [theme.breakpoints.down('sm')]: {
      '& .MuiListItem-root': {
        maxHeight: 'unset',
        minHeight: 80,

        '& .MuiListItemText-root': {
          flexDirection: 'column',

          '& .MuiListItemText-primary': {
            minWidth: '100%',
            marginBottom: 8,
          },
        },
      },
    },
  },
  triangle: {
    position: 'absolute',
    zIndex: 1,
    width: '0',
    height: '0',
    borderTop: '24px solid #36B0C9',
    borderRight: '24px solid transparent',

    '& svg': {
      position: 'absolute',
      top: '-24px',
      left: '1px',
      width: '14px',
      height: '15px',
      color: '#FFF',
    },
  },
  listItem: {
    backgroundColor: '#F4F6F8 !important',
    borderRadius: '4px',
    minHeight: '48px',
    maxHeight: '48px',
    height: '100%',

    '&.Mui-selected': {
      border: '1px solid #36B0C9',
      color: '#36B0C9',
    },
  },
  listItemText: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',

    '& p': {
      color: '#2D2A26',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '14px',
    },

    '& .MuiListItemText-primary': {
      '-webkit-line-clamp': '2',
      '-webkit-box-orient': 'vertical',
      margin: 'auto',
      overflow: 'hidden',
      display: '-webkit-box',
      minWidth: '80%',
      maxWidth: ({ secondary }) => (secondary ? '80%' : '100%'),
    },

    '& .MuiListItemText-secondary': {
      width: '100%',
    },
  },
}));

function LabelItem(props) {
  const { primary, secondary, selected, onClick } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.box}>
      {selected && (
        <div className={classes.triangle}>
          <CheckIcon />
        </div>
      )}
      <ListItem button disableRipple selected={selected} onClick={onClick} className={classes.listItem}>
        <ListItemText
          primary={primary}
          secondary={secondary}
          className={classes.listItemText}
          primaryTypographyProps={{ component: 'p' }}
        />
      </ListItem>
    </div>
  );
}

export default LabelItem;
