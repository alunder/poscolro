import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, Button, Input, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    minWidth: '171px',
    flexGrow: 1,
    height: 42,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.icon,
  },
  searchInput: {
    flexGrow: 1,
    fontSize: '14px',
  },
  searchButton: {
    backgroundColor: theme.palette.common.white,
    marginLeft: theme.spacing(2),
  },
}));

function Search({ onSearch, className, ...rest }) {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const handleChange = event => {
    event.persist();
    setValue(event.target.value);
  };

  return (
    <Grid {...rest} className={clsx(classes.root, className)}>
      <Paper className={classes.search} elevation={1} xs={12}>
        <SearchIcon className={classes.searchIcon} />
        <Input
          className={classes.searchInput}
          disableUnderline
          onChange={handleChange}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              onSearch(value);
            }
          }}
          placeholder="Search for item names, category and ID..."
        />
      </Paper>
      {/* <Button className={classes.searchButton} onClick={() => onSearch(value)} size="large" variant="contained">
        Search
      </Button> */}
    </Grid>
  );
}

Search.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func,
};

export default Search;
