/* eslint-disable */
import React from 'react';
import clsx from 'clsx';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, FormGroup, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    marginTop30: {
        marginTop: '30px',
    },
    caption: {
        fontSize: '12px',
        color: '#66788a',
        paddingLeft: theme.spacing(2),
    },
    noRightBorder: {
      [`& fieldset`]: {
        borderRight: 0,
      },
    },
    noRightRadius: {
      [`& fieldset`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
    noLeftRadius: {
      [`& fieldset`]: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },
    svgColor: {
      '& >svg': {
        color: '#484542',
      },
    },
    caption: {
      fontSize: '12px',
      color: '#66788a',
      paddingLeft: theme.spacing(2),
    },
    fieldWrapper: {
      paddingTop: '9px',
      margin: '2px 0px',
    },
    textField: {
      margin: '0px'
    },
}));

const FormFieldWithSelect
 = props => {
  const { value,label,name, caption,periodTypes,subValue, subLabel, subName, ...rest } = props;
  const classes = useStyles();

  return (
    <FormGroup>
    <Grid container spacing={0} className={classes.fieldWrapper}>
      <Grid item md={8} sm={8} xs={8} lg={8}>
        <Field
          type="number"
          label={label}
          variant="outlined"
          margin="dense"
          name={name}
          fullWidth
          component={TextField}
          {...rest}
          InputProps={{
            className: clsx(classes.noRightBorder, classes.noRightRadius),
          }}
        />
        <Typography className={classes.caption}>
          {caption}
        </Typography>
      </Grid>

      <Grid item md={4} sm={4} xs={4} lg={4}>
        <Field
          label={subLabel}
          name={subName}
          select
          variant="outlined"
          margin="dense"
          fullWidth
          value={subValue}
          component={TextField}
          InputProps={{
            className: [classes.noLeftRadius, classes.svgColor],
          }}
          SelectProps={{
            MenuProps: {
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left',
              },
              getContentAnchorEl: null,
            },
          }}
        >
          {periodTypes.map(month => (
            <MenuItem key={month} value={month}>
              {month}
            </MenuItem>
          ))}
        </Field>
      </Grid>
    </Grid>
  </FormGroup>
  );
};

export default FormFieldWithSelect
;
