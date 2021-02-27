/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import RouterLink from 'next/link';
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
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Chip,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CloseIcon from '@material-ui/icons/Close';
import MoreButton from 'components/MoreButton';
import { categories } from './Shared/FilterSliderContent';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0,
  },
  tableContainer: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
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
  companyName: {
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end',
  },
  recordsFound: {
    marginBottom: 16,
    '& .MuiTypography-root': {
      color: '#90A4AE',
    },

    '& .categoryName': {
      color: theme.palette.primary.main,
      cursor: 'pointer',
    },
  },
  filteredBy: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
    color: theme.palette.text.primary,

    '& > *': {
      marginRight: 8,
    },

    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',

      '& > *': {
        margin: '0 0 8px 0',
      },
    },
  },
  filteredByText: {
    minWidth: 100,
  },
  clearAllButton: {
    minWidth: 100,
  },
  inlineIcon: {
    display: 'flex',
    alignItems: 'center',

    '& .reallyVerifiedIcon': {
      width: '12px',
      height: '12px',
      color: '#36b0c9',
    },

    '& .reallyVerifiedText': {
      color: '#90A4AE',
    },
  },
  sortingArrow: {
    marginRight: theme.spacing(2),
  },
  chips: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',

    '& > *': {
      margin: '4px',
      fontSize: '12px',
      color: '#2D2A26',
      backgroundColor: '#FFF',
      fontWeight: 'normal',
    },

    '& .MuiSvgIcon-root': {
      width: 20,
      height: 20,
      color: '#484542',

      '&:hover': {
        color: 'rgba(72, 69, 66, .8)',
      },
    },

    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },

  starIcon: {
    color: '#484542',
  },
}));

const ApprovedVendors = props => {
  const { className, customers, checkedItems = [], filters, onApplyFilters, onRowClick, onCheckItems, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const [selectedCustomers, setSelectedCustomers] = useState(checkedItems);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [seeMore, setSeeMore] = useState(false);
  const hasFilters = filters.length > 0;
  const isFilterMoreThan3 = filters.length > 3;
  const chips = xsDown && !seeMore ? filters.slice(0, 3) : filters;

  useEffect(() => {
    setSeeMore(false);
  }, [filters.length]);

  useEffect(() => {
    setSelectedCustomers(checkedItems);
  }, [checkedItems]);

  const handleSelectAll = event => {
    const selectedCustomers = event.target.checked ? customers.map(customer => customer.id) : [];

    setSelectedCustomers(selectedCustomers);
    onCheckItems(selectedCustomers);
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
    onCheckItems(newSelectedCustomers);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

  const getCategoryName = categoryId => (categories.find(cat => cat.id === categoryId) || {}).name || '';

  const getFilterTextValues = filters.map(({ value }, idx) => {
    const isLastItem = filters.length - 1 === idx;
    const isSecondToLast = filters.length - 2 === idx;
    return (
      <span key={value}>
        <span>&quot;</span>
        <span className="categoryName">{getCategoryName(value)}</span>
        <span>&quot;</span>
        {!isSecondToLast && !isLastItem && <span>, </span>}
        {isSecondToLast && <span> and </span>}
      </span>
    );
  });

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.recordsFound}>
        <Typography component="span" color="textSecondary" variant="body1">
          {`${customers.length} Records found ${hasFilters ? `in ` : ''}`}
        </Typography>
        {hasFilters && (
          <Typography component="span" color="textSecondary" variant="body1">
            {getFilterTextValues}
          </Typography>
        )}
      </div>

      <div className={classes.filteredBy}>
        <Typography color="textPrimary" variant="body1" className={classes.filteredByText}>
          Filtered By:
        </Typography>

        <div className={classes.chips}>
          {chips.map(({ value, prefix }) => (
            <Chip
              key={value}
              id={value}
              clickable={false}
              deleteIcon={<CloseIcon fontSize="small" />}
              label={`${prefix}: ${getCategoryName(value)}`}
              onDelete={() => handleRemoveFilter(value)}
            />
          ))}
        </div>

        {xsDown && !seeMore && isFilterMoreThan3 && (
          <Button color="primary" onClick={() => setSeeMore(true)}>
            See More
          </Button>
        )}

        <Button color="primary" onClick={handleClearAll} className={classes.clearAllButton}>
          Clear All
        </Button>
      </div>

      <Card>
        <CardHeader action={<MoreButton />} title="All Approved Vendors" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.tableContainer}>
              <Table className={classes.table}>
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
                    <TableCell />
                    <TableCell>
                      <div className={classes.inlineIcon}>
                        <ArrowDownwardIcon className={classes.sortingArrow} />
                        <Typography variant="h6">Company Name</Typography>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Email Address</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Contact Number</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Labels</Typography>
                    </TableCell>
                    <TableCell>
                      <div className={classes.inlineIcon}>
                        <ArrowDownwardIcon className={classes.sortingArrow} />
                        <Typography variant="h6">Date Added</Typography>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customers.slice(0, rowsPerPage).map(customer => (
                    <TableRow hover key={customer.id} selected={selectedCustomers.indexOf(customer.id) !== -1}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedCustomers.indexOf(customer.id) !== -1}
                          color="primary"
                          onChange={event => handleSelectOne(event, customer.id)}
                          value={selectedCustomers.indexOf(customer.id) !== -1}
                        />
                      </TableCell>
                      <TableCell>
                        <StarBorderIcon className={classes.starIcon} />
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar className={classes.avatar}>{customer.company_name.charAt(0)}</Avatar>
                          <div>
                            <Typography
                              color="inherit"
                              variant="body2"
                              onClick={() => onRowClick(customer)}
                              className={classes.companyName}
                            >
                              {customer.company_name}
                            </Typography>
                            <div className={classes.inlineIcon}>
                              <CheckCircleOutlineIcon className="reallyVerifiedIcon" />
                              <Typography variant="body2" className="reallyVerifiedText">
                                Verified by Really
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Typography color="inherit" variant="body2">
                          {customer.email}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="inherit" variant="body2">
                          {customer.contact_number}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="inherit" variant="body2">
                          {customer.label}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="inherit" variant="body2">
                          {customer.date_added}
                        </Typography>
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
    </div>
  );

  function handleRemoveFilter(id) {
    onApplyFilters(filters.filter(({ value }) => value !== id));
  }

  function handleClearAll() {
    onApplyFilters([]);
  }
};

ApprovedVendors.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired,
};

ApprovedVendors.defaultProps = {
  customers: [],
};

export default ApprovedVendors;
