import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Drawer, Grid, Typography, Button, Hidden
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    },
  },
  itemMenu: {
    fontSize: '14px',
    paddingLeft: '230px',
    color: '#2D2A26',
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  },
  itemSelected: {
    maxWidth: '40%',
    flexBasis: '40%',
  },
}));

function TableEditBar({ selected, className, onMarkPaid, onMarkUnpaid, onDelete, ...rest }) {
  const classes = useStyles();
  const open = selected.length > 0;

  return (
    <Drawer
      anchor="bottom"
      open={open}
      // eslint-disable-next-line react/jsx-sort-props
      PaperProps={{ elevation: 1 }}
      variant="persistent"
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Grid
          alignItems="center"
          container
          spacing={2}
        >
          <Hidden smDown>
            <Grid
              item
              md={4}
              className={classes.itemSelected}
            >
              <Typography
                color="textSecondary"
                variant="subtitle1"
                className={classes.itemMenu}
              >
              {selected.length}
                {' '}
                {selected.length > 1 ? 'items' : 'item'} selected
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            md={4}
            xs={12}
          >
            <div className={classes.actions}>
              <Button onClick={onMarkUnpaid}>
                <img src="/images/tick.svg" alt="Tick" className={classes.buttonIcon}/>
                Duplicate
              </Button>
              <Button onClick={() => onDelete(selected)}>
                <DeleteIcon className={classes.buttonIcon} />
                Remove
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
}

TableEditBar.propTypes = {
  className: PropTypes.string,
  onDelete: PropTypes.func,
  onMarkPaid: PropTypes.func,
  onMarkUnpaid: PropTypes.func,
  selected: PropTypes.array.isRequired,
};

export default TableEditBar;
