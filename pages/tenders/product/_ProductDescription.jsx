import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid } from '@material-ui/core';
import EditorContents from 'components/EditorContents';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
  },
  title: {
    fontWeight: 500,
    alignItems: 'center',
  },
  cardContent: {
    padding: theme.spacing(3),
  },
  list: {
    paddingLeft: theme.spacing(2),
  },
}));

const ProductDescription = props => {
  const { className, description } = props;

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent className={classes.cardContent}>
        <Grid container className={classes.test}>
          <EditorContents data={description} />
        </Grid>
      </CardContent>
    </Card>
  );
};

ProductDescription.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
};

export default ProductDescription;
