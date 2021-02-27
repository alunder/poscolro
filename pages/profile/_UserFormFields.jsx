import React from 'react';
import { Field } from 'formik';
import { makeStyles } from '@material-ui/styles';
import { TextField } from 'formik-material-ui';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import FormSelect from 'components/FormSelect';

const DefaultField = props => <Field fullWidth variant="outlined" margin="dense" {...props} />;

const useStyles = makeStyles(() => ({
  option: {
    padding: '10px',
    borderRadius: '4px !important',
    margin: '0px 12px',
    '&:hover': {
      background: 'linear-gradient(0deg, rgba(54, 176, 201, 0.1), rgba(54, 176, 201, 0.1)) !important',
    },
  },
}));

const states = [
  { value: '+65', key: '+65 (Singapore)' },
  { value: '+62', key: '+62 (Indonesia)' },
  {
    value: '+63',
    key: '+63 (Philipines)',
  },
  {
    value: '+83',
    key: '+83 (Vietnam)',
  },
  {
    value: '+60',
    key: '+60 (Malaysia)',
  },
];

const statusOptions = [
  { value: 'Mr', key: 'Mr' },
  { value: 'Mrs', key: 'Mrs' },
  { value: 'Ms', key: 'Ms' },
  { value: 'Mdm', key: 'Mdm' },
  { value: 'Dr', key: 'Dr' },
];

const UserFormFields = props => {
  const classes = useStyles(props);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={9} xs={12} spacing={3}>
          <Grid item md={3} xs={12} spacing={3}>
            <FormSelect label="Salutation" placeholder="Salutation" name="user.salutation" options={statusOptions} />
          </Grid>
        </Grid>

        <Grid item md={6} xs={12}>
          <DefaultField label="First Name" name="user.firstName" component={TextField} />
        </Grid>
        <Grid item md={6} xs={12}>
          <DefaultField label="Last Name" name="user.lastName" component={TextField} />
        </Grid>
        <Grid item md={6} xs={12}>
          <DefaultField label="Email Address" name="user.email" component={TextField} />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormGroup>
            <Grid container spacing={2}>
              <Grid item md={3} sm={3} xs={12}>
                <FormSelect label="Area" placeholder="Area" name="user.countryCode" options={states} />
              </Grid>
              <Grid item md={9} sm={9} xs={12}>
                <DefaultField label="Phone Number" name="user.telephone" component={TextField} />
              </Grid>
            </Grid>
          </FormGroup>
        </Grid>
        <Grid item md={6} xs={12}>
          <DefaultField label="Job Title" name="user.position" component={TextField} />
        </Grid>
      </Grid>
    </>
  );
};

export default UserFormFields;
