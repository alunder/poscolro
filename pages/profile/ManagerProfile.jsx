import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import ProfileVerification from 'components/ProfileVerification';

import ProfileForm from './_ProfileForm';
import AvatarEditor from './_AvatarEditor';

const useStyles = makeStyles(theme => ({
  padding: {
    // padding: '12px !important'
  },
}));

const ManagerProfile = ({ user, company, props }) => {
  const classes = useStyles();
  const [editing, setEditing] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const submit = () => {
    setIsSubmitClicked(!isSubmitClicked);
  };

  const handleUserEdit = editMode => {
    setEditing(editMode);
  };

  return (
    <>
      {(company.status === 'New' || editing) && (
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          spacing={4}
          style={{ marginTop: -72, marginBottom: 0 }}
        >
          <Grid item>
            {company.status === 'New' && (
              <Button variant="contained" color="primary" onClick={submit}>
                Submit for verification
              </Button>
            )}

            {editing && (
              <Button variant="contained" color="primary" onClick={submit}>
                Save Changes
              </Button>
            )}
          </Grid>
        </Grid>
      )}

      <Grid container direction="row" spacing={3}>
        <Grid item lg={3} md={3} xl={3} xs={12}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <AvatarEditor user={user} />
            </Grid>
            <Grid item>
              <ProfileVerification
                emailVerified={user.confirmed}
                companyStatus={company.status === 'New' ? 'Not Verified' : company.status}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={9} md={9} xl={9} xs={12}>
          <ProfileForm
            isSubmitClicked={isSubmitClicked}
            user={user}
            company={company}
            handleUserEdit={handleUserEdit}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ManagerProfile;
