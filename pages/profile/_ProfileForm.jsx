import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Formik, Field, Form, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import UserFormFields from './_UserFormFields';
import CompanyFormFields from './_CompanyFormFields';
import UserProperties from './_UserProperties';
import CompanyProperties from './_CompanyProperties';

const UPDATE_PROFILE = gql`
  mutation updateProfile($userAttributes: UserAttributes!, $companyAttributes: CompanyAttributes!) {
    updateUser(attributes: $userAttributes) {
      id
    }
    updateCompany(attributes: $companyAttributes) {
      id
    }
  }
`;

const useStyles = makeStyles(theme => ({
  cardContent: {
    padding: '0px 24px 32px 24px',
  },
  editCardContent: {
    padding: '16px 24px 32px 24px',
  },
  cardTitle: {
    color: '#2d2a26',
    fontSize: '16px',
    lineHeight: 1.25,
    fontWeight: 500,
    '& >span': {
      color: '#90a4ae',
      fontSize: '14px',
      lineHeight: 1.71,
      fontWeight: 'normal',
      marginLeft: theme.spacing(2),
    },
  },
  span: {
    color: '#90a4ae',
    fontSize: '12px',
    lineHeight: 1.71,
    fontWeight: 'normal',
  },
}));

const FormContext = ({ isSubmitClicked }) => {
  // Grab values and submitForm from context
  const { values, submitForm } = useFormikContext();
  React.useEffect(() => {
    if (isSubmitClicked) {
      submitForm();
    }
  }, [isSubmitClicked]);
  return null;
};

const ProfileForm = forwardRef(({ isSubmitClicked, user, company, handleUserEdit, ...props }, ref) => {
  const [editing, setEditing] = useState(false);
  const classes = useStyles(props);

  const handleEdit = () => {
    setEditing(true);
    handleUserEdit(true);
  };

  // const submit = () => {
  // };

  const onCompleted = () => {
    window.location = '/profile';
  };

  const onError = (error, data) => {
    console.log('error');
  };

  const [updateProfile, { loading, data, error }] = useMutation(UPDATE_PROFILE, {
    onCompleted,
    onError,
  });

  const shouldOpenEditCompanyForm = status => status === 'New';
  const shouldOpenEditProfileForm = status => status === 'New' || editing;

  const handleSubmit = (values, actions) => {
    updateProfile({
      variables: {
        userAttributes: {
          salutation: values.user.salutation,
          firstName: values.user.firstName,
          lastName: values.user.lastName,
          email: values.user.email,
          countryCode: values.user.countryCode,
          telephone: values.user.telephone,
          position: values.user.position,
        },
        companyAttributes: {
          name: values.company.name,
          uen: values.company.uen,
          address: values.company.address,
          postal: values.company.postal,
          countryCode: values.company.countryCode,
          telephone: values.company.telephone,
          website: values.company.website,
        },
      },
    });
  };
  return (
    <>
      <Formik
        initialValues={{ user: user, company: company }}
        validationSchema={Yup.object().shape({
          user: Yup.object().shape({
            email: Yup.string()
              .email('Email is invalid')
              .required('Email Address is required')
              .nullable(),
            firstName: Yup.string()
              .required('First Name is required')
              .nullable(),
            lastName: Yup.string()
              .required('Last Name is required')
              .nullable(),
            countryCode: Yup.string()
              .required('Area code is required')
              .nullable(),
            position: Yup.string()
              .required('Job Title is required')
              .nullable(),
            telephone: Yup.string()
              .required('Phone Number is required')
              .nullable(),
          }),
          company: Yup.object().shape({
            name: Yup.string()
              .required('Company Name is required')
              .nullable(),
            uen: Yup.string()
              .required('UEN Number is required')
              .nullable(),
            address: Yup.string()
              .required('Company Address is required')
              .nullable(),
            postal: Yup.string()
              .required('Postal Code is required')
              .nullable(),
            countryCode: Yup.string()
              .required('Country code is required')
              .nullable(),
            telephone: Yup.string()
              .required('Phone Number is required')
              .nullable(),
          }),
        })}
        onSubmit={handleSubmit}
        submitForm={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormContext isSubmitClicked={isSubmitClicked} />
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Card>
                  <CardHeader
                    title={
                      <>
                        <Typography className={classes.cardTitle}>
                          Contact Details
                          <Hidden smDown>
                            <span>All fields are compulsory </span>
                          </Hidden>
                        </Typography>
                        <Hidden mdUp>
                          <span className={classes.span}>All fields are compulsory</span>
                        </Hidden>
                      </>
                    }
                    action={company.status !== 'New' && !editing && <Button onClick={handleEdit}>Edit</Button>}
                  />
                  <Divider />
                  <CardContent
                    className={
                      shouldOpenEditProfileForm(company.status) ? classes.editCardContent : classes.cardContent
                    }
                  >
                    {shouldOpenEditProfileForm(company.status) ? (
                      <UserFormFields user={user} />
                    ) : (
                      <UserProperties user={user} />
                    )}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card>
                  <CardHeader
                    title={
                      <>
                        <Typography className={classes.cardTitle}>
                          Company Details
                          <Hidden smDown>
                            <span>
                              {shouldOpenEditCompanyForm(company.status)
                                ? 'Please ensure that details are correct.'
                                : ''}
                            </span>
                          </Hidden>
                        </Typography>
                        <Hidden mdUp>
                          <span className={classes.span}>
                            {shouldOpenEditCompanyForm(company.status) ? 'Please ensure that details are correct.' : ''}
                          </span>
                        </Hidden>
                      </>
                    }
                  />
                  <Divider />
                  <CardContent
                    className={
                      shouldOpenEditCompanyForm(company.status) ? classes.editCardContent : classes.cardContent
                    }
                  >
                    {shouldOpenEditCompanyForm(company.status) ? (
                      <CompanyFormFields company={company} />
                    ) : (
                      <CompanyProperties company={company} />
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
});

export default ProfileForm;

/*
*
*
*        <Formik
            ref={formikRef}
            initialValues={{ user: user, company: company }}
            validationSchema={Yup.object().shape({
              user: Yup.object().shape({
                email: Yup.string()
                  .email('Email is invalid')
                  .required('Email is required')
                  .nullable(),
                firstName: Yup.string()
                  .required('Firstname is required')
                  .nullable(),
                lastName: Yup.string()
                  .required('Lastname is required')
                  .nullable(),
                countryCode: Yup.string()
                  .required('Area code is required')
                  .nullable(),
                position: Yup.string()
                  .required('Job title is required')
                  .nullable(),
                telephone: Yup.string()
                  .required('Phone number is required')
                  .nullable(),
              }),
              company: Yup.object().shape({
                name: Yup.string()
                  .required('Company Name is required')
                  .nullable(),
                uen: Yup.string()
                  .required('UEN is required')
                  .nullable(),
                address: Yup.string()
                  .required('Address is required')
                  .nullable(),
                postal: Yup.string()
                  .required('Postal code is required')
                  .nullable(),
                countryCode: Yup.string()
                  .required('Country code is required')
                  .nullable(),
                telephone: Yup.string()
                  .required('Phone number is required')
                  .nullable(),
              }),
            })}
            onSubmit={handleSubmit}
            submitForm={handleSubmit}
            render={({ handleSubmit, errors, dirty, isSubmitting, values, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Card>
                      <CardHeader title="Contact Details" subheader="All fields are compulsory" />
                      <Divider />
                      <CardContent>
                        <UserFormFields />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item>
                    <Card>
                      <CardHeader title="Company Details" subheader="Please ensure that details are correct." />
                      <Divider />
                      <CardContent>
                        <CompanyFormFields />
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Form>
            )}
          />

  */
