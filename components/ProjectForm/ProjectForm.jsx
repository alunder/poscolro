import React, { useState } from 'react';
import clsx from 'clsx';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';

import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

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
import ProjectAvatar from '../ProjectAvatar';
import ProfileVerification from '../ProfileVerification';
import DocumentUpload from '../DocumentUpload';

import { fieldToTextField, TextField, TextFieldProps, Select, Checkbox, Switch } from 'formik-material-ui';

// import SuccessSnackbar from '../SuccessSnackbar';

const useStyles = makeStyles(theme => ({
  root: {},
  saveButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
  companyDetails: {
    marginTop: '30px',
  },
  actionButton: {
    marginTop: theme.spacing(2),
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
  avatarButton: {
    width: '100%',
    marginTop: '7px',
    marginBottom: '-4px',
  },
}));

const PForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [openSnackbar, setOpenSnackbar] = useState(false);

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
  const unitMetrics = ['Sqft'];
  const projectLocations = ['Singapore', 'Thailand', 'Philippines'];

  return (
    <Formik
      initialValues={{
        projectName: '',
        projectSize: '',
        unitMetric: '',
        projectDescription: '',
        projectAddress: '',
        projectLocation: '',
        projectStartDate: '',
        projectEndDate: '',
      }}
      validationSchema={Yup.object().shape({
        projectName: Yup.string().required('Project name is required'),
        projectSize: Yup.string().required('Project size is required'),
        unitMetric: Yup.string().required('Unit metric is required'),
        projectAddress: Yup.string().required('Project address is required'),
        projectLocation: Yup.string().required('Project location is required'),
        projectStartDate: Yup.string().required('Project start date is required'),
        projectEndDate: Yup.string().required('Project end date is required'),
        projectDescription: Yup.string().required('Description is required'),
      })}
      onSubmit={(values, actions) => {
        // REQUEST HERE
      }}
      render={({ handleSubmit, errors, dirty, isSubmitting, values, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
          <Card {...rest} className={clsx(classes.root, className)}>
            <CardHeader title="Project Details" />
            <Divider />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                  <Field
                    fullWidth
                    label="Project Name"
                    name="projectName"
                    value={values.name}
                    variant="outlined"
                    component={TextField}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormGroup>
                    <Grid container spacing={2}>
                      <Grid item m={7} sm={7}>
                        <Field
                          fullWidth
                          label="Project Size"
                          name="projectSize"
                          component={TextField}
                          value={values.size}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item m={5} sm={5}>
                        <Field
                          fullWidth
                          label="Unit Metrics"
                          name="unitMetric"
                          select
                          component={TextField}
                          value={values.unitMetric}
                          variant="outlined"
                        >
                          {unitMetrics.map(unit => (
                            <MenuItem key={unit} value={unit}>
                              {unit}
                            </MenuItem>
                          ))}
                        </Field>
                      </Grid>
                    </Grid>
                  </FormGroup>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field
                    fullWidth
                    label="Project Address"
                    name="projectAddress"
                    component={TextField}
                    value={values.address}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Field
                    fullWidth
                    label="Project Location"
                    name="projectLocation"
                    select
                    component={TextField}
                    value={values.location}
                    variant="outlined"
                  >
                    {projectLocations.map(location => (
                      <MenuItem key={location} value={location}>
                        {location}
                      </MenuItem>
                    ))}
                  </Field>
                </Grid>

                <Grid item md={6} xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Field
                      fullWidth
                      format="MM/dd/yyyy"
                      label="Project Start Date"
                      variant="inline"
                      name="projectStartDate"
                      inputVariant="outlined"
                      value={values.startDate}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                      component={KeyboardDatePicker}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>

                <Grid item md={6} xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Field
                      fullWidth
                      format="MM/dd/yyyy"
                      label="Project End Date"
                      variant="inline"
                      name="projectEndDate"
                      value={values.endDate}
                      inputVariant="outlined"
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                      component={KeyboardDatePicker}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>

                <Grid item md={12} xs={12}>
                  <Field
                    fullWidth
                    label="Project Description"
                    name="projectDescription"
                    component={TextField}
                    value={values.description}
                    variant="outlined"
                    multiline="true"
                    rows="5"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card {...rest} className={clsx(classes.root, classes.companyDetails, className)}>
            <CardHeader title="Supporting Documents" />

            <Divider />

            <CardContent>
              <DocumentUpload />
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
      <Grid {...rest} className={clsx(classes.root, className)} container spacing={2}>
        <Grid item lg={3} md={6} xl={3} xs={12}>
          <ProjectAvatar
            action={
              <Button className={classes.avatarButton} variant="text">
                Add Image
              </Button>
            }
          />
        </Grid>
        <Grid item lg={9} md={6} xl={9} xs={12}>
          <PForm user={user} />

          <Box component="div">
            <Button variant="contained" className={classes.actionButton} color="primary">
              Create Project
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

ProjectForm.propTypes = {
  className: PropTypes.string,
};

export default ProjectForm;
