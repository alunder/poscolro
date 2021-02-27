import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 14,
  },
}));

const Logo = forwardRef((props, ref) => {
  const classes = useStyles(props);
  return (
    <div ref={ref} className={classes.root}>
      <img src="/really-logo.svg" height={45} alt="REALly logo" />
    </div>
  );
});

export default Logo;
