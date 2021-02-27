import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '@material-ui/pickers';
import { getIn } from 'formik';
import CalendarToday from '@material-ui/icons/CalendarToday';
import { Icon, InputAdornment } from '@material-ui/core';

class FDatePicker extends React.PureComponent {
  onChange = value => {
    const {
      field,
      form: { setFieldError },
    } = this.props;

    setFieldError(field.name, null);
    field.onChange({
      target: {
        name: field.name,
        value: value.toString(),
      },
    });
  };

  render() {
    const {
      label,
      field,
      form: { touched, errors },
      ...other
    } = this.props;
    const errorText = getIn(errors, field.name);
    const touchedVal = getIn(touched, field.name);
    const hasError = touchedVal && !!errorText;

    return (
      <DatePicker
        label={label}
        error={hasError}
        helperText={hasError ? errorText : ''}
        onChange={this.onChange}
        value={field.value}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Icon>
                <CalendarToday />
              </Icon>
            </InputAdornment>
          ),
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...other}
      />
    );
  }
}

FDatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.any,
    setFieldValue: PropTypes.func,
    setFieldError: PropTypes.func,
    errors: PropTypes.object,
  }).isRequired,
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  ampm: PropTypes.bool,
  autoOk: PropTypes.bool,
};

FDatePicker.defaultProps = {
  fullWidth: true,
  margin: 'normal',
  ampm: false,
  autoOk: true,
};

export default FDatePicker;
