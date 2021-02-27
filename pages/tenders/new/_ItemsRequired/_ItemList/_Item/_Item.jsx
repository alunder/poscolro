import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Button, Card, CardContent, Divider, Grid } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

import ItemEditable from './_ItemEditable';
import ItemViewable from './_ItemViewable';
import useStyles from '../styles';

const Item = ({ index, data, appState, error, haveActions, makeItemCanEdit }) => {
  const classes = useStyles();

  const handleRemoveItem = useCallback(() => {}, []);

  const makeEdit = useCallback(() => {
    makeItemCanEdit(data.uid);
  }, [data.uid, makeItemCanEdit]);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardPadding}>
        <ItemViewable index={index} data={data} />
      </CardContent>

      {haveActions && (
        <>
          <Grid item md={12} xs={12}>
            <Divider />
          </Grid>

          {appState.isEditing ? (
            <ItemEditable data={data} appState={appState} error={error} />
          ) : (
            <>
              <Button className={classes.button} startIcon={<DeleteOutlineIcon />} onClick={handleRemoveItem}>
                REMOVE
              </Button>

              <Button className={classes.button} startIcon={<EditIcon />} onClick={makeEdit}>
                EDIT
              </Button>
            </>
          )}
        </>
      )}
    </Card>
  );
};

Item.propTypes = {
  data: PropTypes.object,
  makeItemCanEdit: PropTypes.func.isRequired,
  appState: PropTypes.object,
  error: PropTypes.object,
  index: PropTypes.number,
  haveActions: PropTypes.bool.isRequired,
};

Item.defaultProps = {
  data: {},
  appState: {
    isEditing: false,
  },
  index: 0,
};

export default Item;
