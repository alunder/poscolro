import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Card,
  CardHeader,
  CardContent,
} from '@material-ui/core';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import useStyles from './styles';

const ListAVL = ({ avl, handleSelectAvl, selectedAvl, inviteVendorsFromAvl }) => {
  const classes = useStyles();

  const selectAvl = useCallback(
    id => () => {
      handleSelectAvl(id);
    },
    [handleSelectAvl],
  );

  const countVendorsWithoutSelected = avlItem => {
    const selectedVendors = inviteVendorsFromAvl[avlItem.id] || [];
    return avlItem.vendors.length - selectedVendors.length;
  };

  return (
    <Card className={classes.avlLeft}>
      <CardHeader
        title={
          <Typography
            noWrap
            variant="h5"
            align="center"
            className={classes.leftTitle}
            title="Invite from Approved Vendor List (AVL)"
          >
            <PermContactCalendarIcon className={classes.mr1} />
            <span>Invite from Approved Vendor List (AVL)</span>
          </Typography>
        }
      />

      <Divider />

      <CardContent className={classes.cardContentListAvl}>
        <div className={classes.listAvl}>
          <List disablePadding>
            {avl.map(item => (
              <ListItem key={item.id} button divider selected={selectedAvl === item.id} onClick={selectAvl(item.id)}>
                <ListItemText primary={`${item.name} (${countVendorsWithoutSelected(item)})`} />
                <ListItemSecondaryAction>
                  <ArrowRightIcon />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </CardContent>
    </Card>
  );
};

ListAVL.propTypes = {
  avl: PropTypes.array,
  handleSelectAvl: PropTypes.func,
  inviteVendorsFromAvl: PropTypes.object.isRequired,
  selectedAvl: PropTypes.string,
};

ListAVL.defaultProps = {
  avl: [],
  handleSelectAvl: () => null,
  selectedAvl: null,
};

export default ListAVL;
