import React, { useState, useEffect, Fragment } from 'react';
import cookie from 'js-cookie';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Router, { useRouter } from 'next/router';
import RouterLink from 'next/link';
import { fieldToTextField, TextField, TextFieldProps, Select, Checkbox, Switch } from 'formik-material-ui';
import { Box, Button, FormControlLabel, Link, Snackbar, Typography } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Message from 'components/Message';

const REGISTER_ACCOUNT = gql`
  mutation register($firstName: String!, $email: String!, $password: String!) {
    register(
      firstName: $firstName
      email: $email
      password: $password
      passwordConfirmation: $password
      role: "manager"
    ) {
      id
      token
    }
  }
`;

const SignUpForm = props => {
  const onCompleted = data => {
    setMessage('Registration Successful.');
    setVariant('success');
    setOpen(true);
    cookie.set('token', data.register.token, { expires: 1 });
    setTimeout(() => {
      window.location = '/';
    }, 2000);
  };

  const onError = (error, data) => {
    setMessage(error.graphQLErrors[0].message);
    setVariant('error');
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values, actions) => {
    const firstName = values.firstName;
    const email = values.email;
    const password = values.password;
    register({ variables: { firstName, email, password } });
    // .then(response => {
    //   setMessage('Registration Successful');
    //   setVariant('success');
    //   setOpen(true);
    //   actions.setSubmitting(false);
    // })
    // .catch(e => {
    //   const errors = e.graphQLErrors.map(error => error.message);
    //   setMessage(e.graphQLErrors[0].message);
    //   setVariant('error');
    //   setOpen(true);
    //   actions.setSubmitting(false);
    //   actions.setErrors({ email: ' ', password: '  ', form: errors });
    // });
  };

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('success');
  const [register, { loading, data, error }] = useMutation(REGISTER_ACCOUNT, {
    onCompleted,
    onError,
  });

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('First name is required'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        })}
        onSubmit={handleSubmit}
      >
        {formikProps => {
          const { dirty, handleSubmit, isSubmitting, setSubmitting } = formikProps;
          return (
            <form id="manager-registration" onSubmit={handleSubmit}>
              <Typography>
                Register now and be among the first to gain access when our platform is ready to go live!
              </Typography>
              <Field
                name="firstName"
                label="First Name"
                margin="normal"
                component={TextField}
                fullWidth
                variant="outlined"
              />
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
                margin="normal"
                name="password"
                type="password"
                label="Password"
                component={TextField}
                fullWidth
                variant="outlined"
              />
              {false && (
                <Box mb={3} mt={2}>
                  <FormControlLabel
                    control={<Field label="Terms and Conditions" name="consent" component={Checkbox} />}
                    label={
                      <Typography color="textSecondary" variant="body1">
                        I have read the{' '}
                        <Link color="secondary" href="#">
                          Terms of Service & Privacy Policy
                        </Link>
                      </Typography>
                    }
                  />
                </Box>
              )}
              <br />
              <br />
              <Button color="primary" size="large" type="submit" fullWidth variant="contained">
                Create an Account
              </Button>
            </form>
          );
        }}
      </Formik>
      <Message open={open} onClose={onClose} message={message} variant={variant} />
    </>
  );
};

export default SignUpForm;
