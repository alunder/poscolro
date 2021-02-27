import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import RouterLink from 'next/link';
import validate from 'validate.js';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { makeStyles, styled } from '@material-ui/styles';
import { Mutation } from 'react-apollo';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import axios from 'axios';

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
import { fieldToTextField, TextField, TextFieldProps, Select, Checkbox, Switch } from 'formik-material-ui';
import Successful from './_Successful';

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
  registrationButton: {
    marginTop: theme.spacing(12),
    width: '100%',
  },
  description: {
    marginBottom: '45px',
  },
}));

const RecoverPasswordForm = props => {
  const { className, description, ...rest } = props;

  const classes = useStyles();

  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <>
      {success ? (
        <div>
          <br />
          <br />
          <Typography>Your password has been reset. Please check your email.</Typography>
          <Typography variant="h3">{email}</Typography>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      ) : (
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
          })}
          onSubmit={async (values, actions) => {
            const email = values.email;
            const url = 'https://really-staging.herokuapp.com/users/password.json';

            actions.setSubmitting(true);
            // const url = 'http://localhost:3000/users/password.json';
            await axios
              .post(url, {
                user: {
                  email,
                },
              })
              .then(data => {})
              .catch(error => {});
            actions.setSubmitting(false);
            setSuccess(true);
            setEmail(email);
          }}
          render={({ handleSubmit, errors, dirty, isSubmitting, values, setFieldValue }) => (
            <Form {...rest} className={clsx(classes.root, className)} onSubmit={handleSubmit}>
              <Typography
                fontWeight="fontWeightMedium"
                color="textSecondary"
                variant="body1"
                className={classes.description}
              >
                {description}
              </Typography>
              <div className={classes.fields}>
                <Field name="email" type="email" label="Email" component={TextField} fullWidth variant="outlined" />
              </div>
              <Button
                color="primary"
                size="large"
                type="submit"
                fullWidth
                variant="contained"
                className={classes.registrationButton}
              >
                Recover Password
              </Button>
            </Form>
          )}
        />
      )}
    </>
  );
};

RecoverPasswordForm.propTypes = {
  className: PropTypes.string,
};

export default RecoverPasswordForm;
