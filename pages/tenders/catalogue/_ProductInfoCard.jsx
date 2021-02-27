import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  title: {
    fontWeight: 500,
    alignItems: 'center',
  },
  content: {
    padding: theme.spacing(3),
  },
  valueContainer: {
    textAlign: 'right',
    fontWeight: 500,
    fontSize: '14px',
  },
  labelContainer: {
    textTransform: 'capitalize',
  },
}));

const ProductInfo = props => {
  const { className, details, productId, title, ...rest } = props;
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <Grid container>
          <Grid item>
            <Typography className={classes.title} variant="h5">
              {title}
            </Typography>
            <Typography variant="body2">Product Id: {productId}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <List>
            {Object.keys(details).map((key, i) => (
              <ListItem className={classes.infoBlock} disableGutters divider key={`${key}${i}`}>
                <ListItemText
                  primary={key}
                  primaryTypographyProps={{ variant: 'body1' }}
                  className={classes.labelContainer}
                />
                <ListItemText className={classes.valueContainer} primary={details[key]} disableTypography />
              </ListItem>
            ))}
          </List>
        </Grid>
      </CardContent>
    </Card>
  );
};

ProductInfo.propTypes = {
  className: PropTypes.string,
  details: PropTypes.object,
  productId: PropTypes.string,
  title: PropTypes.string,
};

export default ProductInfo;
