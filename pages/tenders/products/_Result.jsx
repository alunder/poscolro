import React, { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Button,
  //   Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableSortLabel,
  Tooltip,
  TablePagination,
  TableRow,
  Typography,
  colors,
} from '@material-ui/core';
import moment from 'moment';
import StackAvatars from 'components/StackAvatars';
import TableEditBar from 'components/TableEditBar';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 700,
  },
  body: {
    '@global': {
      '.MuiTableCell-root': {
        fontSize: '12px',
      },
    },
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1),
  },
  resultTextWrapper: {
    margin: `${theme.spacing(3)}px 0`,
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end',
  },
  starFilledIcon: {
    color: colors.amber[400],
  },
  buttonWrapper: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white,
    },
    margin: theme.spacing(0.5),
  },
  inlineIcon: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  row: {
    '&:hover': {
      backgroundColor: 'rgb(54,176,201,.1) !important',
    },
  },
  sortingArrow: {
    marginRight: theme.spacing(2),
  },
  overflow: {
    overflow: 'auto',
  },
}));

function Results({ className, customers, handleSort, ...rest }) {
  const classes = useStyles();
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('asc');
  const [sortBy, setSortBy] = useState('name');
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSelectAll = event => {
    const selectedCustomers = event.target.checked ? customers.map(customer => customer.id) : [];

    setSelectedCustomers(selectedCustomers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomers.indexOf(id);
    let newSelectedCustomers = [];

    if (selectedIndex === -1) {
      newSelectedCustomers = newSelectedCustomers.concat(selectedCustomers, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomers = newSelectedCustomers.concat(selectedCustomers.slice(1));
    } else if (selectedIndex === selectedCustomers.length - 1) {
      newSelectedCustomers = newSelectedCustomers.concat(selectedCustomers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomers = newSelectedCustomers.concat(
        selectedCustomers.slice(0, selectedIndex),
        selectedCustomers.slice(selectedIndex + 1),
      );
    }

    setSelectedCustomers(newSelectedCustomers);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  const onDelete = selectedId => {
    // TODO: Add delete api.

    console.log('List to delete', selectedId);
  };

  const handleNameSort = key => {
    if (key === 'asc') {
      setSort('desc');
    } else {
      setSort('asc');
    }
  };

  const handleSortClick = (sort, sortBy) => {
    setSortBy(sortBy);
    handleNameSort(sort);
    handleSort(sort, sortBy);
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography color="textSecondary" gutterBottom variant="body2" className={classes.resultTextWrapper}>
        {customers.length} Records found. Page {page + 1} of {Math.ceil(customers.length / rowsPerPage)}
      </Typography>
      <Card>
        <CardHeader title="All Catalogue items" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar className={classes.overflow}>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCustomers.length === customers.length}
                        color="primary"
                        indeterminate={selectedCustomers.length > 0 && selectedCustomers.length < customers.length}
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell sortDirection="desc">ID</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>
                      <Tooltip enterDelay={300} title="Sort" placement="bottom-start">
                        <div className={classes.inlineIcon}  onClick={() => handleSortClick(sort, 'name')}>
                          {sortBy === 'name' && sort === 'desc' && (
                            <ArrowDownwardIcon className={classes.sortingArrow}/>
                          )}
                          {sortBy === 'name' && sort === 'asc' && (
                            <ArrowUpwardIcon className={classes.sortingArrow} />
                          )}
                          <Typography variant="h6">Name</Typography>
                        </div>
                      </Tooltip>
                    </TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Tenders</TableCell>
                    <TableCell>
                      <Tooltip
                        enterDelay={300}
                        title="Sort"
                        placement="bottom-start"
                      >
                        <div className={classes.inlineIcon} onClick={() => handleSortClick(sort, 'dateCreated')}>
                          {sortBy === 'dateCreated' && sort === 'desc' && (
                            <ArrowDownwardIcon className={classes.sortingArrow} />
                          )}
                          {sortBy === 'dateCreated' && sort === 'asc' && (
                            <ArrowUpwardIcon className={classes.sortingArrow} />
                          )}
                          <Typography variant="h6">Date Added</Typography>
                        </div>
                      </Tooltip>
                    </TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.body}>
                  {customers.length >= 0 &&
                    customers.map(customer => (
                      <TableRow
                        hover
                        key={customer.id}
                        selected={selectedCustomers.indexOf(customer.id) !== -1}
                        className={classes.row}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={selectedCustomers.indexOf(customer.id) !== -1}
                            color="primary"
                            onChange={event => handleSelectOne(event, customer.id)}
                            value={selectedCustomers.indexOf(customer.id) !== -1}
                          />
                        </TableCell>
                        <TableCell>{customer.id}</TableCell>
                        <TableCell>
                          <StackAvatars avatars={customer.images} limit={3} />
                        </TableCell>
                        <TableCell>{customer.name ? customer.name : '-'}</TableCell>
                        <TableCell>Need to fetch from backend</TableCell>
                        <TableCell>Need to fetch from backend</TableCell>
                        <TableCell>{moment(customer.createdAt).format('D MMM YYYY')}</TableCell>
                        <TableCell>
                          <Button
                            color="secondary"
                            //   component={RouterLink}
                            size="small"
                            to="/management/customers/1"
                            variant="outlined"
                            className={classes.buttonWrapper}
                          >
                            Edit
                          </Button>
                          <Button
                            color="secondary"
                            //   component={RouterLink}
                            size="small"
                            to="/management/customers/1"
                            variant="outlined"
                            className={classes.buttonWrapper}
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={customers.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedCustomers} onDelete={onDelete} />
    </div>
  );
}

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array,
};

Results.defaultProps = {
  customers: [],
};

export default Results;
