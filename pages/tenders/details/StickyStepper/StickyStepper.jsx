/* eslint-disable no-use-before-define */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    position: '-webkit-sticky',
    position: 'sticky',
    top: 64,
  },
  listItem: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '24px',
    borderLeft: `4px solid ${theme.palette.action.disabledBackground}`,

    '&.Mui-selected': {
      borderColor: '#36B0C9',
      color: '#36B0C9',
      background: 'none',

      '&:hover': {
        background: 'none',
      },
    },
  },
  listItemText: {
    '& .MuiTypography-root': {
      cursor: 'pointer',
    },
  },
}));

export default function StickyStepper(props) {
  const classes = useStyles();
  const { currentId, onClick } = props;

  return (
    <div className={classes.root}>
      <List>
        {Ids.map(e => (
          <ListItem className={classes.listItem} key={e.id} selected={currentId === e.id}>
            <ListItemText className={classes.listItemText} primary={e.name} onClick={() => onClick(e.id)} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export const Ids = [
  {
    id: 'tenderDetails',
    name: 'Tender Details',
  },
  {
    id: 'termsAndConditions',
    name: 'Terms & Conditions',
  },
  {
    id: 'siteVisitDetails',
    name: 'Site Visit Details',
  },
  {
    id: 'photos',
    name: 'Photos',
  },
  {
    id: 'supportingDocuments',
    name: 'Supporting Documents',
  },
  {
    id: 'itemsRequired',
    name: 'Items Required',
  },
  {
    id: 'qna',
    name: 'QnA',
  },
];
