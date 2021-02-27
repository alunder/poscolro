import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '&.primaryListItem': {
      '& .MuiTypography-body1': {
        lineHeight: '18px',
        fontWeight: 'normal',
      },
      '& .MuiTypography-subtitle1': {
        textTransform: 'none',
        fontSize: '12px',
        lineHeight: '18px',
      },
    },
  },

  title: {
    fontWeight: 500,
    lineHeight: '24px',
  },

  subtitle: {
    color: '#90A4AE',
    fontFamily: 'Poppins',
    fontSize: '11px',
    lineHeight: '16px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
});

const BidCardPropertyItem = props => {
  const { title, subtitle, xs, sm, md, lg, className } = props;
  const classes = useStyles(props);

  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} className={`${className} ${classes.root}`}>
      <Box>
        <Typography className={classes.title} component="div">
          {title}
        </Typography>
        {title && (
          <Typography variant="subtitle1" className={classes.subtitle}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </Grid>
  );
};

export default BidCardPropertyItem;
