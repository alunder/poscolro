/* eslint-disable no-use-before-define */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import moment from 'moment';
import times from 'lodash/times';
import { colors, Button, Grid, Menu, MenuItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Paginate from './_Paginate';
import TenderCard from './_TenderCard';

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
  resultText: {
    fontStyle: 'normal */',
    fontSize: '14px',
    color: '#90A4AE',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
  sortButton: {
    textTransform: 'none',
    letterSpacing: 0,
    marginRight: theme.spacing(2),
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
  },
}));

function GridResults({ search, className }) {
  const classes = useStyles();
  const sortRef = useRef(null);
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [openSort, setOpenSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Newest');
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchTenders = () => {
      if (mounted) {
        const searchedTenders = filterTendersBySearch(mockTenders, search);
        setCurrentPage(1);
        setTenders(searchedTenders);
      }
    };

    fetchTenders();

    return () => {
      mounted = false;
    };
  }, [search]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTenders = tenders.slice(startIndex, endIndex);
  const totalPages = Math.ceil(tenders.length / itemsPerPage);

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.header}>
        <Typography color="textSecondary" gutterBottom variant="body2" className={classes.resultText}>
          {`${tenders.length} Records found, Page ${currentPage} of ${totalPages}`}
        </Typography>

        <div className={classes.actions}>
          <Button className={classes.sortButton} onClick={handleSortOpen} ref={sortRef}>
            {selectedSort}
            <ArrowDropDownIcon />
          </Button>
          <Menu
            keepMounted
            anchorEl={sortRef.current}
            className={classes.menu}
            onClose={handleSortClose}
            open={openSort}
            elevation={1}
          >
            {['Newest', 'Exclusive Tender'].map(option => (
              <MenuItem className={classes.menuItem} key={option} onClick={() => handleSortSelect(option)}>
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>

      <Grid container spacing={3}>
        {paginatedTenders.map(project => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <TenderCard project={project} />
          </Grid>
        ))}
      </Grid>

      <div className={classes.paginate}>
        <Paginate forcePage={currentPage - 1} pageCount={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );

  function filterTendersBySearch(tendersList = [], searchKeyword = '') {
    if (!searchKeyword) {
      return tendersList;
    }
    return tendersList.filter(tender => tender.title.includes(searchKeyword));
  }

  function handleSortOpen() {
    setOpenSort(true);
  }

  function handleSortClose() {
    setOpenSort(false);
  }

  function handleSortSelect(value) {
    setSelectedSort(value);
    setOpenSort(false);
  }

  function handlePageChange({ selected }) {
    setCurrentPage(selected + 1);
  }
}

GridResults.propTypes = {
  search: PropTypes.string,
  className: PropTypes.string,
};

const getMockTenders = count => [
  {
    id: uuid(),
    number: count,
    title: 'Mella Full Screen Slider',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png',
    },
    price: '12,500',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    members: 5,
    tags: [
      {
        text: 'Open',
        color: colors.green[600],
      },
    ],
    start_date: moment(),
    end_date: moment(),
    closing_date: moment().add(10, 'days'),
  },
  {
    id: uuid(),
    number: count + 1,
    title: 'Dashboard Design',
    author: {
      name: 'Emilee Simchenko',
      avatar: '/images/avatars/avatar_9.png',
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    members: 3,
    tags: [
      {
        text: 'Open',
        color: '#EB5757',
      },
    ],
    start_date: moment(),
    end_date: moment(),
    closing_date: moment().add(5, 'days'),
  },
  {
    id: uuid(),
    number: count + 2,
    title: 'Ten80 Web Design',
    author: {
      name: 'Kwak Seong-Min',
      avatar: '/images/avatars/avatar_10.png',
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    members: 8,
    tags: [
      {
        text: 'Open',
        color: colors.green[600],
      },
    ],
    start_date: moment(),
    end_date: moment(),
    closing_date: moment().add(18, 'days'),
  },
  {
    id: uuid(),
    number: count + 3,
    title: 'Neura e-commerce UI Kit',
    author: {
      name: 'Shen Zhi',
      avatar: '/images/avatars/avatar_11.png',
    },
    price: '12,500',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    members: 10,
    tags: [
      {
        text: 'Open',
        color: colors.green[600],
      },
    ],
    start_date: moment(),
    end_date: moment(),
    closing_date: moment().add(11, 'days'),
  },
  {
    id: uuid(),
    number: count + 4,
    title: 'Administrator Dashboard',
    author: {
      name: 'Cao Yu',
      avatar: '/images/avatars/avatar_3.png',
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    members: 2,
    tags: [
      {
        text: 'Open',
        color: colors.green[600],
      },
    ],
    start_date: moment(),
    end_date: moment(),
    closing_date: moment().add(16, 'days'),
  },
  {
    id: uuid(),
    number: count + 5,
    title: 'Kalli UI Kit',
    author: {
      name: 'Anje Keizer',
      avatar: '/images/avatars/avatar_5.png',
    },
    price: '15,750',
    currency: '$',
    type: 'Full-Time',
    location: 'Europe',
    members: 12,
    tags: [
      {
        text: 'Open',
        color: colors.green[600],
      },
    ],
    start_date: moment(),
    end_date: moment(),
    closing_date: moment().add(6, 'days'),
  },
];

let mockTenders = [];
times(5, initialCount => {
  const count = mockTenders.length + initialCount;
  mockTenders = [...mockTenders, ...getMockTenders(count)];
});

export default GridResults;
