import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button, useTheme, useMediaQuery } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import Search from './Search';
import FilterSlider from './FilterSlider';

const useStyles = makeStyles(theme => ({
  search: {
    flexGrow: 1,
    maxWidth: 662,
    flexBasis: 662
  },
  filterButton: {
    marginLeft: 'auto',
    height: 42,
    minWidth: 110,
  },
  gridItemSearch: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: 'calc(98px + 24px)',
    },
  },
  gridItemFilter: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: 'calc(125px + 24px)',
    },
  },
  searchButton: {
    fontWeight: '500',
    fontSize: '14px',
    backgroundColor: theme.palette.common.white,
  },
  filterIcon: {
    marginRight: theme.spacing(1),
  },
}));

function SearchBar({ search, placeholder, filters, onFilterApply, onFilterClear, onSearch, filterSliderRenderer }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClear = arg => {
    setOpenFilter(false);
    if (onFilterClear) {
      onFilterClear(arg);
    }
  };

  const handleFilterApply = arg => {
    setOpenFilter(false);
    if (onFilterApply) {
      onFilterApply(arg);
    }
  };

  const handleClose = () => {
    setOpenFilter(false);
  };

  return (
    <Grid container spacing={matches ? 2 : 3}>
      {/* Search field */}
      <Grid item xs={8} sm={6}>
        <Search className={classes.search} search={search} placeholder={placeholder} onSearch={onSearch} />
      </Grid>

      {/* Search button */}
      <Grid item xs={4} sm={2} className={classes.gridItemSearch}>
        <Button fullWidth className={classes.searchButton} size="large" variant="contained">
          Search
        </Button>
      </Grid>

      {/* Filter button */}
      <Grid item xs={12} sm={2} className={classes.gridItemFilter}>
        <Button
          fullWidth
          className={classes.filterButton}
          color="primary"
          onClick={handleFilterOpen}
          size="small"
          variant="outlined"
        >
          <FilterListIcon className={classes.filterIcon} /> Filter
        </Button>
      </Grid>

      {/* Filter slider */}
      <FilterSlider
        open={openFilter}
        filters={filters}
        onClose={handleClose}
        onFilterApply={handleFilterApply}
        onFilterClear={handleFilterClear}
        filterSliderRenderer={filterSliderRenderer}
      />
    </Grid>
  );
}

SearchBar.propTypes = {
  className: PropTypes.string,
  search: PropTypes.string,
  placeholder: PropTypes.string,
  onFilterApply: PropTypes.func,
  onSearch: PropTypes.func,
};

export default SearchBar;
