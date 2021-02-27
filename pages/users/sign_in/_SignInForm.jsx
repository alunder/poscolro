import React, { useState, useEffect } from 'react';
// import Router from 'next/router';
import cookie from 'js-cookie';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
// import { RouterLink } from 'routes';
import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Mutation } from 'react-apollo';
import { useMutation } from '@apollo/react-hooks';
import { withApollo } from 'lib/apollo';
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
import Message from 'components/Message';
import { useRouter } from 'next/router';

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

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const SignInForm = props => {
  const router = useRouter();

  const onCompleted = data => {
    cookie.set('token', data.login.token, { expires: 1 });

    const { returnUrl: redirectUrl = '/' } = router.query;
    window.location = redirectUrl;
  };

  const onError = (error, data) => {
    setMessage(error.graphQLErrors[0].message);
    setVariant('error');
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSubmit = (values, actions) => {
    const email = values.email;
    const password = values.password;
    login({ variables: { email, password } });
  };

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('success');
  const [login, { loading, data }] = useMutation(LOGIN, {
    onCompleted,
    onError,
  });

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        })}
        onSubmit={onSubmit}
      >
        {formikProps => {
          const { dirty, handleSubmit } = formikProps;
          return (
            <form onSubmit={handleSubmit}>
              <Field
                name="email"
                type="email"
                label="Email Address"
                margin="normal"
                component={TextField}
                fullWidth
                variant="outlined"
              />
              <Field
                name="password"
                type="password"
                label="Password"
                component={TextField}
                margin="normal"
                fullWidth
                variant="outlined"
              />
              <br />
              <br />
              <Link href="/users/recover_password">Forgot Password? </Link>

              <br />
              <br />
              <br />
              <Button color="primary" size="large" type="submit" fullWidth variant="contained">
                Log in
              </Button>
            </form>
          );
        }}
      </Formik>
      <Message open={open} onClose={onClose} message={message} variant={variant} />
    </>
  );
};

SignInForm.propTypes = {
  className: PropTypes.string,
};

export default withApollo(SignInForm);
