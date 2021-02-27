/* eslint-disable */
import React, { useState } from 'react';
import clsx from 'clsx';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Formik, Field, Form, useFormikContext } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import MomentUtils from '@date-io/moment';
import * as moment from 'moment';
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
  MenuItem,
} from '@material-ui/core';

import FilesDropzone from 'components/FilesDropzone';
import AvatarEditor from './_AvatarEditor';
import ProfileVerification from 'components/ProfileVerification';
import DatePicker from 'components/DatePicker';
import DocumentUpload from 'components/DocumentUpload';

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

const CREATE_PROJECT = gql`
  mutation createProject($projectAttributes: ProjectAttributes!) {
    createProject(attributes: $projectAttributes) {
      id
    }
  }
`;

const DatePickerField = ({ form: { setFieldValue }, field, ...props }) => {
  return (
    <KeyboardDatePicker
      margin="dense"
      disableToolbar
      format="dd/MM/yyyy"
      inputVariant="outlined"
      onChange={value => {
        const formattedValue = moment(value, 'DD/MM/YYYY');
        setFieldValue(field.name, formattedValue);
      }}
      {...props}
    />
  );
};
const DefaultField = props => <Field fullWidth variant="outlined" margin="dense" {...props} />;

const ProjectForm = props => {
  const classes = useStyles();
  const states = ['+65'];
  const unitMetrics = ['Sqft', 'Sqm'];
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [avatarData, setAvatarData] = useState();
  const [submitClicked, setSubmitClicked] = useState(false);
  const [documentsData, setDocumentsData] = useState([]);
  const project = {
    name: '',
    size: '',
    unitMetric: '',
    address: '',
    postal: '',
    startDate: '',
    endDate: '',
    description: '',
    avatarData: '',
  };

  const FormContext = () => {
    // Grab values and submitForm from context
    const { submitForm } = useFormikContext();
    React.useEffect(() => {
      if (submitClicked) {
        submitForm();
        setSubmitClicked(false);
      }
    }, [submitClicked]);
    return null;
  };

  const onCompleted = () => {
    window.location = '/projects';
  };
  const onError = (error, data) => {
    console.log('error');
  };
  const [createProject, { loading, data, error }] = useMutation(CREATE_PROJECT, {
    onCompleted,
    onError,
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  const handleSubmit = (values, actions) => {
    const { project } = values;
    console.log(avatarData);
    createProject({
      variables: {
        projectAttributes: {
          name: project.name,
          size: project.size,
          unitMetric: project.unitMetric,
          address: project.address,
          postal: project.postal,
          startDate: moment(project.startDate).format('YYYY-MM-DD'),
          endDate: moment(project.endDate).format('YYYY-MM-DD'),
          description: project.description,
          avatarData: avatarData,
        },
      },
    });
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const submit = () => {
    setSubmitClicked(!submitClicked);
    console.log('Submit');
    // if (formikRef.current) {
    //   formikRef.current.submitForm();
    // }
  };

  const updateAvatar = avatar => {
    setAvatarData(avatar);
  };

  return (
    <React.Fragment>
      <Grid className={classes.root} container spacing={2}>
        <Grid item lg={3} md={6} xl={3} xs={12}>
          <AvatarEditor project={project} updateAvatar={updateAvatar} />
        </Grid>
        <Grid item lg={9} md={6} xl={9} xs={12}>
          <Formik
            initialValues={{ project: project }}
            validationSchema={Yup.object().shape({
              project: Yup.object().shape({
                name: Yup.string().required('Project name is required'),
                size: Yup.string().required('Project size is required'),
                unitMetric: Yup.string()
                  .required('Unit metric is required')
                  .nullable(),
                address: Yup.string().required('Project address is required'),
                postal: Yup.string().required('Postal code is required'),
                startDate: Yup.string().required('Project start date is required'),
                endDate: Yup.string().required('Project end date is required'),
                description: Yup.string().required('Description is required'),
              }),
            })}
            onSubmit={handleSubmit}
            submitForm={handleSubmit}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <FormContext />
                <Card className={classes.root}>
                  <CardHeader
                    title="Project Details"
                    subheader="All fields are compulsory. This information can edited"
                  />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item md={6} xs={12}>
                        <DefaultField label="Project Name" name="project.name" component={TextField} />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormGroup>
                          <Grid container spacing={2}>
                            <Grid item m={7} sm={7}>
                              <DefaultField label="Project Size" name="project.size" component={TextField} />
                            </Grid>

                            <Grid item m={5} sm={5}>
                              <DefaultField label="Unit Metrics" name="project.unitMetric" select component={TextField}>
                                {unitMetrics.map(unit => (
                                  <MenuItem key={unit} value={unit}>
                                    {unit}
                                  </MenuItem>
                                ))}
                              </DefaultField>
                            </Grid>
                          </Grid>
                        </FormGroup>
                      </Grid>
                      <Grid item md={8} xs={12}>
                        <DefaultField label="Project Address" name="project.address" component={TextField} />
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <DefaultField label="Postal Code" name="project.postal" component={TextField} />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                          <Field
                            label="Project Start Date"
                            name="project.startDate"
                            component={DatePicker}
                            disableToolbar
                            fullWidth
                            format="DD/MM/YYYY"
                            inputVariant="outlined"
                            margin="dense"
                          />
                        </MuiPickersUtilsProvider>
                      </Grid>

                      <Grid item md={6} xs={12}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                          <DefaultField
                            label="Project End Date"
                            name="project.endDate"
                            component={DatePicker}
                            disableToolbar
                            fullWidth
                            format="DD/MM/YYYY"
                            inputVariant="outlined"
                            inputVariant="outlined"
                            margin="dense"
                          />
                        </MuiPickersUtilsProvider>
                      </Grid>
                      <Grid item md={12} xs={12}>
                        <DefaultField
                          label="Project Description"
                          name="project.description"
                          component={TextField}
                          multiline
                          rows="5"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>

                <Card className={clsx(classes.root, classes.companyDetails)}>
                  <CardHeader title="Supporting Documents" />

                  <Divider />

                  <CardContent>
                    <FilesDropzone
                      uploadUrl={`${process.env.API_ROOT}/s3/params`}
                      onFileChange={handleDocumentsUpload}
                    />
                  </CardContent>
                </Card>
              </Form>
            )}
          </Formik>
          <Box component="div">
            <Button variant="contained" className={classes.actionButton} color="primary" onClick={submit}>
              Create Project
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

ProjectForm.propTypes = {};

export default ProjectForm;
