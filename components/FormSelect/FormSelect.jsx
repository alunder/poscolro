import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import { TextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';

const DefaultField = props => <Field fullWidth variant="outlined" margin="dense" {...props} />;

const useStyles = makeStyles(theme => ({
  option: {
    padding: '10px',
    borderRadius: '4px !important',
    margin: '0px 12px',
    '&:hover': {
      background: 'linear-gradient(0deg, rgba(54, 176, 201, 0.1), rgba(54, 176, 201, 0.1)) !important',
    },
  },
  padding: {
    padding: '24px 0px',
  },
}));

const getRenderValue = value => value;

const FormSelect = ({ options, label, name }, ...props) => {
  const classes = useStyles(props);

  return (
    <FormGroup>
      <DefaultField
        label={label}
        name={name}
        select
        component={TextField}
        SelectProps={{
          renderValue: getRenderValue,
          MenuProps: { MenuListProps: { disablePadding: false, className: classes.padding } } }}
      >
        {options &&
          options.map(option => (
            <MenuItem key={option.value} value={option.value} className={classes.option}>
              {option.key}
            </MenuItem>
          ))}
      </DefaultField>
    </FormGroup>
  );
};

FormSelect.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
};

export default FormSelect;
