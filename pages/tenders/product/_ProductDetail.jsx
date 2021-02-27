import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import ProductInfoCard from './_ProductInfoCard';
import ProductOwnerCard from './_ProductOwnerCard';

const useStyles = makeStyles(() => ({
  root: {},
}));

const ProductDetail = props => {
  const { company, details, productId, title } = props;

  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid className={classes.wrapper} item lg={12} md={6} xs={12}>
        <ProductOwnerCard company={company} />
      </Grid>
      <Grid item lg={12} md={6} xs={12}>
        <ProductInfoCard details={details} productId={productId} title={title} />
      </Grid>
    </Grid>
  );
};

ProductDetail.propTypes = {
  className: PropTypes.string,
  company: PropTypes.object,
  details: PropTypes.object,
  productId: PropTypes.string,
  title: PropTypes.string,
};

export default ProductDetail;
