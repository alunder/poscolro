import React, { useState, useEffect } from 'react';
import Main from 'components/Layout/Main';

import gql from 'graphql-tag';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography, Button, Grid, Hidden } from '@material-ui/core';
import Page from 'components/Page';
import PropTypes from 'prop-types';
import { useLazyQuery } from '@apollo/react-hooks';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useRouter } from 'next/router';

import SearchBar from 'components/SearchBar';
import Box from '@material-ui/core/Box';
import Results from './_Result';

const useStyles = makeStyles(theme => ({
  heading: {
    color: '#36b0c9',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '0.2px',
    lineHeight: 1.71,
  },
  textTransform: {
    testTransform: 'uppercase',
  },
  header: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    maxWidth: '-webkit-fill-available',
  },
  resultWrapper: {
    paddingLeft: theme.spacing(0),
    maxWidth: '-webkit-fill-available',
  },
  searchBarWrapper: {
    padding: `${theme.spacing(4)} 0`,
    minWidth: '515px',
  },
  dataWrapper: {
    paddingLeft: theme.spacing(0),
    maxWidth: '-webkit-fill-available',
  },
  svgIcon: {
    verticalAlign: 'middle !important',
  },
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    padding: `0 ${theme.spacing(3)}px`,
    maxWidth: '-webkit-fill-available',
  },
  searchWrapper: {
    padding: `12px 0`,
  },
  title: {
    fontWeight: 500,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  addIcon: {
    width: '19.6px',
    display: 'inherit',
    marginLeft: '-4px',
    marginRight: '8px',
  },
  buttonWrapper: {
    minWidth: '135px',
  },
}));

const Catalogue = ({ currentUser, catalogues }) => {
  const classes = useStyles();
  const router = useRouter();

  // const [product] = useState(mockData);
  const [customers, setCustomers] = useState([]);
  const [sort, setSort] = useState('asc');
  const [sortBy, setSortBy] = useState('name');
  const [value, setValue] = useState('');

  const SORT_CATALOGUE = gql`
    query products($searchKey: String, $sortKey: OrderEnum) {
      products(where: { name: $searchKey }, orderBy: { name: $sortKey }) {
        id
        name
        images
        kind
        createdAt
      }
    }
  `;

  const SORT_CATALOGUE_BY_DATE = gql`
    query products($searchKey: String, $sortKey: OrderEnum) {
      products(where: { name: $searchKey }, orderBy: { createdAt: $sortKey }) {
        id
        name
        images
        kind
        createdAt
      }
    }
  `;

  const [sortCatalogueByDate, { loading, data: sortCatalogueByDateData }] = useLazyQuery(SORT_CATALOGUE_BY_DATE);
  const [sortCatalogue, { sortLoading, data: sortCataloguedata }] = useLazyQuery(SORT_CATALOGUE);

  const fetchData = (key, sortKey, sortBy) => {
    if (sortBy === 'name') {
      sortCatalogue({ variables: { searchKey: key, sortKey } });
    } else {
      sortCatalogueByDate({ variables: { searchKey: key, sortKey } });
    }
  };

  const handleSort = (sortKey, sortFrom) => {
    setSort(sortKey);
    setSortBy(sortFrom);
    fetchData(value, sort, sortBy);
  };

  const handleSearch = key => {
    setValue(key);
    fetchData(key, sort, sortBy);
  };

  useEffect(() => {
    if (sortCatalogueByDateData) {
      setCustomers(sortCatalogueByDateData.products);
    }
  }, [sortCatalogueByDateData]);

  useEffect(() => {
    if (sortCataloguedata) {
      setCustomers(sortCataloguedata.products);
    }
  }, [sortCataloguedata]);

  useEffect(() => {
    if (catalogues) {
      setCustomers(catalogues);
    }
  }, [catalogues]);

  return (
    <Main isShowSignOu currentUser={currentUser}>
      <Page title="Catalogue List">
        <Container className={classes.root} item lg={12} md={12} xl={12} xs={12}>
          <Grid alignItems="flex-end" container justify="space-between" spacing={3} className={classes.searchWrapper}>
            <Grid item>
              <Typography className={classes.textTransform} variant="overline" display="block">
                Management
              </Typography>
              <Typography variant="h2" display="block" component="h1">
                Catalogue
              </Typography>
            </Grid>
            <Grid item>
            <Button
              color="secondary"
              size="medium"
              onClick={()=> router.push('/tenders/addProduct')}
              className={classes.buttonWrapper}
              variant="contained"
            >
              <Hidden xsDown>
                <AddCircleOutlineIcon className={classes.addIcon}/>
              </Hidden>
              Add New Item
            </Button>
      </Grid>
          </Grid>
          <SearchBar className={classes.SearchBarWrapper} onSearch={handleSearch} value={value} setValue={setValue} />
          <Box item className={classes.dataWrapper}>
            {customers && <Results customers={customers} handleSort={handleSort} />}
          </Box>
        </Container>
      </Page>
    </Main>
  );
};

Catalogue.getInitialProps = async ({ apolloClient, query }) => {
  const data = await apolloClient
    .query({
      query: gql`
        query products($order: OrderEnum) {
          products(orderBy: { name: $order }) {
            id
            name
            images
            kind
            createdAt
          }
        }
      `,
      variables: {order: 'asc'}
    })
    .then(({ data }) => {
      return data.products;
    })
    .catch(e => {
      // Fail gracefully
      return { products: [] };
    });

  return { catalogues: data };
};

Catalogue.propTypes = {
  currentUser: PropTypes.object,
  catalogues: PropTypes.array,
};

export default Catalogue;
