import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import FormSelect from 'components/FormSelect';

const DefaultField = props => <Field fullWidth variant="outlined" margin="dense" {...props} />;

const states = [
  {
    value: '+65',
    key: ' +65 (Singapore)',
  },
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

const CompanyFormFields = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <DefaultField label="Company Name" name="company.name" component={TextField} />
        </Grid>

        <Grid item md={4} xs={12}>
          <DefaultField label="UEN Number" name="company.uen" component={TextField} />
        </Grid>

        <Grid item md={12} xs={12}>
          <FormGroup>
            <Grid container spacing={2}>
              <Grid item sm={8} xs={12}>
                <DefaultField label="Company Address" name="company.address" component={TextField} />
              </Grid>

              <Grid item sm={4} xs={12}>
                <DefaultField label="Postal Code" name="company.postal" component={TextField} />
              </Grid>
            </Grid>
          </FormGroup>
        </Grid>

        <Grid item md={6} xs={12}>
          <FormGroup>
            <Grid container spacing={2}>
              <Grid item m={3} sm={3} xs={12}>
                <FormSelect label="Area" placeholder="Area" name="user.countryCode" options={states} />
              </Grid>

              <Grid item m={9} sm={9} xs={12}>
                <DefaultField label="Phone Number" name="company.telephone" component={TextField} />
              </Grid>
            </Grid>
          </FormGroup>
        </Grid>
        <Grid item md={6} xs={12}>
          <DefaultField label="Company Website" name="company.website" helperText="Optional" component={TextField} />
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyFormFields;
