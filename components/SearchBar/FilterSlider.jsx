/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, Divider, Drawer, FormControlLabel, RadioGroup, Typography, Grid, Checkbox } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import { getScrollStyle } from '../ApprovedVendorsList/Shared/utils';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  drawer: {
    width: 420,
    maxWidth: '100%',
  },
  header: {
    padding: theme.spacing(2, 1),
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
  content: {
    padding: theme.spacing(0, 3),
    flexGrow: 1,
    overflowY: 'auto',
    ...getScrollStyle(),
  },
  contentSection: {
    padding: theme.spacing(2, 0),
  },
  contentSectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  contentSectionContent: {},
  formGroup: {
    padding: theme.spacing(2, 0),
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  field: {
    marginTop: 0,
    marginBottom: 0,
  },
  flexGrow: {
    flexGrow: 1,
  },
  groupTitle: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '24px',
    color: '#607D8B',
    margin: '1rem 0',
  },
  addButton: {
    marginLeft: theme.spacing(1),
  },
  tags: {
    marginTop: theme.spacing(1),
  },
  minAmount: {
    marginRight: theme.spacing(3),
  },
  maxAmount: {
    marginLeft: theme.spacing(3),
  },
  radioGroup: {
    '& .MuiIconButton-colorPrimary': {
      color: theme.palette.primary.main,
    },
  },
  actions: {
    padding: theme.spacing(2, 3),
    width: '100%',
    margin: 0,

    '& .MuiButton-containedPrimary': {
      height: '44px',
    },
  },
}));

function FilterSlider(props) {
  const {
    open,
    filters: propFilters,
    onFilterApply,
    onFilterClear,
    onClose,
    className,
    filterSliderRenderer,
    ...rest
  } = props;
  const classes = useStyles();
  const [filters, setFilters] = useState([]);
  const rendererProps = {
    ...props,
    sliderFilters: filters,
    onAddFilter: handleAddFilter,
    onRemoveFilter: handleRemoveFilter,
  };

  useEffect(() => {
    if (open) {
      setFilters(propFilters);
    }
  }, [open, propFilters]);

  return (
    <Drawer anchor="right" classes={{ paper: classes.drawer }} onClose={onClose} open={open} variant="temporary">
      <form {...rest} className={clsx(classes.root, className)} onSubmit={handleFilterApply}>
        <div className={classes.header}>
          <Button size="small" onClick={onClose}>
            <CloseIcon className={classes.buttonIcon} />
            Close
          </Button>
        </div>

        <div className={classes.content}>
          <div className={classes.contentSection}>{filterSliderRenderer && filterSliderRenderer(rendererProps)}</div>
        </div>

        <Divider />

        <Grid container spacing={1} alignItems="center" className={classes.actions}>
          <Grid item xs={12} md={6}>
            <Button fullWidth onClick={onFilterClear}>
              <DeleteIcon className={classes.buttonIcon} />
              Clear Filters
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button fullWidth color="primary" type="submit" variant="contained" onClick={handleFilterApply}>
              Apply Filters
            </Button>
          </Grid>
        </Grid>
      </form>
    </Drawer>
  );

  function handleFilterApply(evt) {
    evt.preventDefault();
    onFilterApply(filters);
  }

  function handleAddFilter(newFilter) {
    setFilters(prevFilters => [...prevFilters, newFilter]);
  }

  function handleRemoveFilter(filterId) {
    setFilters(prevFilters => prevFilters.filter(({ value }) => value !== filterId));
  }
}

FilterSlider.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onFilterApply: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

export default FilterSlider;
