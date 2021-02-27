import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import NavigateNextIcon from '@material-ui/icons/ChevronRight';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const useStyles = makeStyles(() => ({
  root: {
    display: 'block',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  row: {
    alignItems: 'center',
  },
}));

const CatalogueHeader = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const product = {
    name: 'Couchy',
    info: 'Catalogue',
  };

  return (
    <div className={clsx(classes.root, className)}>
      <Typography className={classes.header} variant="overline" display="block">
        {product.info}
      </Typography>
      <Typography className={classes.header} variant="h2" display="block">
        {product.name}
      </Typography>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/">
          {product.info}
        </Link>
        <Typography color="textPrimary">{product.name}</Typography>
      </Breadcrumbs>
    </div>
  );
};

CatalogueHeader.propTypes = {
  className: PropTypes.string,
};

export default CatalogueHeader;
