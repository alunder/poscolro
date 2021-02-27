/* eslint-disable */
import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, FormGroup } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    marginTop30: {
        marginTop: '30px',
    },
    caption: {
        height: '21px',
        fontSize: '12px',
        color: '#66788a',
        paddingLeft: theme.spacing(2),
    },
    fieldWrapper: {
      paddingTop: '9px',
      margin: '2px 0px',
    },
    textField:{
      margin: '0px'
    }
}));

const FormField = props => {
  const { value, caption, ...rest } = props;
  const classes = useStyles();

  return (
    <FormGroup>
      <Grid container spacing={0}>
        <Grid item md={12} xs={12} lg={12} className={classes.fieldWrapper}>
          <Field
            variant="outlined" 
            component={TextField}
            multiline
            value={value}
            margin="dense"
            className={classes.textField}
            {...rest}
          />
          <Typography className={classes.caption}>
            {caption}
          </Typography>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default FormField;
