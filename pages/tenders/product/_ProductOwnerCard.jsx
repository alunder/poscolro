import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  titleBlock: {
    margin: '0px 10px',
  },
  content: {
    padding: theme.spacing(3),
  },
  title: {
    fontWeight: 500,
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    height: 48,
    width: 48,
  },
  icon: {
    height: 32,
    width: 32,
  },
  chips: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  centered: {
    display: 'flex',
    alignItems: 'center',
  },
  verifyIcon: {
    height: 16,
    width: 16,
    marginRight: theme.spacing(0.5),
  },
}));

const ProductCard = props => {
  const { className, company } = props;

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <Grid container alignItems="center">
          <Grid item>
            <Avatar className={classes.avatar}>
              <BarChartIcon className={classes.icon} />
            </Avatar>
          </Grid>
          <Grid className={classes.titleBlock} item>
            <Typography className={classes.title} variant="h5">
              {company.name}
            </Typography>
            {company.isVerified && (
              <Typography className={classes.centered} variant="body2">
                <VerifiedUserOutlinedIcon className={classes.verifyIcon} color="secondary" />
                Verified by Really
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid container>
          {company.labels.map((label, index) => (
            <Chip className={classes.chips} key={`${label}${index}`} label={label} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  company: PropTypes.object,
};

export default ProductCard;
