import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
// import {RouterLink} from '../../routes';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Mutation } from 'react-apollo';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  Button,
  MuiCheckbox,
  FormHelperText,
  Typography,
  Link,
  LinearProgress,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { fieldToTextField, TextField, TextFieldProps, Select, Checkbox, Switch } from 'formik-material-ui';

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64,
    },
  },
  confirm_email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64,
    },
    equality: 'email',
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128,
    },
  },
  confirm_password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128,
    },
    equality: 'password',
  },
};

const ranges = [
  {
    value: 'none',
    label: 'None',
  },
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

const useStyles = makeStyles(theme => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  },
  policy: {
    display: 'flex',
    alignItems: 'center',
  },
  policyCheckbox: {
    marginLeft: '-14px',
  },
  policyText: {
    display: 'inline',
  },
  registrationButton: {
    marginTop: '45px',
    width: '100%',
  },
  haveAnAccount: {
    marginTop: '25px',
  },
  signIn: {
    marginLeft: '15px',
  },
  consentDivider: {
    marginTop: '55px',
    marginBottom: '10px',
  },
  noAccountYet: {
    marginTop: '25px',
  },
}));

const REGISTER_ACCOUNT = gql`
  mutation register($email: String!, $password: String!, $password_confirmation: String!) {
    register(email: $email, password: $password, passwordConfirmation: $password_confirmation) {
      id
      email
    }
  }
`;

const LoginForm = props => {
  const { className, ...rest } = props;

  const [register, { loading, data }] = useMutation(REGISTER_ACCOUNT);

  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
        consent: Yup.bool()
          .test('consent', 'You have to agree with our Terms and Conditions!', value => value === true)
          .required('You have to agree with our Terms and Conditions!'),
      })}
      onSubmit={(values, actions) => {
        let email = values.email;
        let password = values.password;
        let password_confirmation = values.passwordConfirmation;

        register({ variables: { email, password, password_confirmation } });

        actions.setSubmitting(true);
      }}
      render={({ handleSubmit, errors, dirty, isSubmitting, values, setFieldValue }) => (
        <Form {...rest} className={clsx(classes.root, className)} onSubmit={handleSubmit}>
          <div className={classes.fields}>
            <Field name="email" type="email" label="Email" component={TextField} fullWidth variant="outlined" />

            <Field
              name="password"
              type="password"
              label="Password"
              component={TextField}
              fullWidth
              variant="outlined"
            />

            <div>
              <div className={classes.policy}>
                <FormControlLabel
                  control={<Field label="Terms and Conditions" name="consent" component={Checkbox} />}
                  label={
                    <Typography className={classes.policyText} color="textSecondary" variant="body1">
                      Keep me signed in
                    </Typography>
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <Typography align="justify" color="textSecondary" variant="body2">
              <Link color="secondary" href="#" underline="always" variant="h6">
                Forgot Password?
              </Link>
            </Typography>
          </div>
          <Button
            className={classes.registrationButton}
            color="secondary"
            disabled={!dirty || isSubmitting}
            size="large"
            type="submit"
            variant="contained"
          >
            LOG IN
          </Button>

          <div>
            <Divider className={classes.noAccountYet} />
            <Typography className={classes.haveAnAccount} align="center" color="textSecondary" variant="body1">
              Don't have an account yet?
              <Link color="secondary" href="#" underline="always" variant="h6" className={classes.signIn}>
                Sign up
              </Link>
            </Typography>
          </div>
        </Form>
      )}
    />
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
};

export default LoginForm;
