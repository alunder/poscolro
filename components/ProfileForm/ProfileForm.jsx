import React, { useState } from 'react';
import clsx from 'clsx';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  MuiSwitch,
  MuiTextField,
  Typography,
  colors,
  FormGroup,
  FormControlLabel,
  Box,
  Avatar,
  MenuItem,
} from '@material-ui/core';

import mockData from './data';
import ProfileVerification from '../ProfileVerification';

import { fieldToTextField, TextField, TextFieldProps, Select, Checkbox, Switch } from 'formik-material-ui';

// import SuccessSnackbar from '../SuccessSnackbar';

const useStyles = makeStyles(theme => ({
  root: {},

  companyDetails: {
    marginTop: '30px',
  },
  submitForVerification: {
    marginBottom: theme.spacing(2),
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlgin: 'center',
  },
  name: {
    marginTop: theme.spacing(1),
  },
  avatar: {
    height: 100,
    width: 100,
  },
  removeBotton: {
    width: '100%',
  },
  verificationContainer: {
    marginTop: '25px',
  },
}));

const PForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [user] = useState(mockData);

  const [values, setValues] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    state: '+63',
    country: user.country,
    isPublic: user.isPublic,
    canHire: user.canHire,
  });

  const handleChange = event => {
    event.persist();

    setValues({
      ...values,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const states = ['+63', '+62', '+64'];

  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        firstName: Yup.string().required('Firstname is required'),
        lastName: Yup.string().required('Lastname is required'),
        area: Yup.string().required('Area code is required'),
        jobTitle: Yup.string().required('Job title is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        conpanyPhoneNumber: Yup.string().required('Company Phone number is required'),
        companyAreaCode: Yup.string().required('Area code is required'),
      })}
      onSubmit={(values, actions) => {
        // REQUEST HERE
      }}
      render={({ handleSubmit, errors, dirty, isSubmitting, values, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
          <Card {...rest} className={clsx(classes.root, className)}>
            <CardHeader title="Profile" />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <Field
                    fullWidth
                    label="First name"
                    name="firstName"
                    value={values.firstName}
                    variant="outlined"
                    component={TextField}
                    margin="dense"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field
                    fullWidth
                    label="Last name"
                    name="lastName"
                    component={TextField}
                    value={values.lastName}
                    variant="outlined"
                    margin="dense"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field
                    fullWidth
                    label="Email Address"
                    name="email"
                    component={TextField}
                    value={values.email}
                    variant="outlined"
                    margin="dense"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormGroup>
                    <Grid container spacing={2}>
                      <Grid item m={3} sm={3}>
                        <Field
                          fullWidth
                          label="Area"
                          name="area"
                          select
                          component={TextField}
                          value={values.state}
                          variant="outlined"
                          margin="dense"
                        >
                          {states.map(state => (
                            <MenuItem key={state} value={state}>
                              {state}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>

                      <Grid item m={9} sm={9}>
                        <Field
                          fullWidth
                          label="Phone Number"
                          name="phoneNumber"
                          component={TextField}
                          value={values.phone}
                          variant="outlined"
                          margin="dense"
                        />
                      </Grid>
                    </Grid>
                  </FormGroup>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Field
                    fullWidth
                    label="Job Title"
                    name="jobTitle"
                    component={TextField}
                    value={values.country}
                    variant="outlined"
                    margin="dense"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card {...rest} className={clsx(classes.root, classes.companyDetails, className)}>
            <CardHeader title="Company Details" />

            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <Field
                    fullWidth
                    label="Company Name"
                    name="companyName"
                    component={TextField}
                    value={values.companyName}
                    variant="outlined"
                    margin="dense"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <Field
                    fullWidth
                    label="UEN Number"
                    name="uenNumber"
                    component={TextField}
                    value={values.uenNumber}
                    variant="outlined"
                    margin="dense"
                  />
                </Grid>

                <Grid item md={12} xs={12}>
                  <FormGroup>
                    <Grid container spacing={2}>
                      <Grid item sm={8}>
                        <Field
                          fullWidth
                          label="Company Address"
                          name="companyAddress"
                          component={TextField}
                          value={values.companyAddress}
                          variant="outlined"
                          margin="dense"
                        />
                      </Grid>

                      <Grid item sm={4}>
                        <Field
                          fullWidth
                          label="Postal Code"
                          name="postalCode"
                          component={TextField}
                          value={values.postalCode}
                          variant="outlined"
                          margin="dense"
                        />
                      </Grid>
                    </Grid>
                  </FormGroup>
                </Grid>

                <Grid item md={6} xs={12}>
                  <FormGroup>
                    <Grid container spacing={2}>
                      <Grid item m={3} sm={3}>
                        <Field
                          fullWidth
                          label="Area"
                          name="companyAreaCode"
                          select
                          component={TextField}
                          value={values.state}
                          variant="outlined"
                          margin="dense"
                        >
                          {states.map(state => (
                            <MenuItem key={state} value={state}>
                              {state}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>

                      <Grid item m={9} sm={9}>
                        <Field
                          fullWidth
                          label="Phone Number"
                          name="conpanyPhoneNumber"
                          component={TextField}
                          value={values.phone}
                          variant="outlined"
                          margin="dense"
                        />
                      </Grid>
                    </Grid>
                  </FormGroup>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field
                    fullWidth
                    label="Company Website"
                    name="companyWebsite"
                    helperText="Optional"
                    component={TextField}
                    value={values.country}
                    variant="outlined"
                    margin="dense"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Form>
      )}
    />
  );
};

const ProjectForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [user] = useState(mockData);

  return (
    <React.Fragment>
      <Box component="div" textAlign="right">
        <Button variant="contained" className={classes.submitForVerification} color="primary">
          Submit for verification
        </Button>
      </Box>
      <Grid {...rest} className={clsx(classes.root, className)} container spacing={2}>
        <Grid item lg={3} md={6} xl={3} xs={12}>
          <ProfileVerification className={classes.verificationContainer} />
        </Grid>
        <Grid item lg={9} md={6} xl={9} xs={12}>
          <PForm user={user} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

ProjectForm.propTypes = {
  className: PropTypes.string,
};

export default ProjectForm;
