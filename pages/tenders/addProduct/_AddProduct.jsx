import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import ProductForm from './_ProductForm';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  item: {
    width: '100%',
  },
}));

const AddProduct = ({ currentUser, props }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="row" alignItems="left">
      <Grid item className={classes.item}>
        <ProductForm />
      </Grid>
    </Grid>
  );
};

AddProduct.propTypes = {
  className: PropTypes.string,
};

export default AddProduct;
