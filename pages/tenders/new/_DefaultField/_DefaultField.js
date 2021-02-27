import React from 'react';
import { FastField } from 'formik';
import { TextField } from 'formik-material-ui';

const DefaultField = props => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FastField fullWidth variant="outlined" margin="dense" component={TextField} {...props} />
  );
};

export default DefaultField;
