import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, FormGroup, TextField } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useFormik } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import * as Yup from 'yup';
import { SingleUploader } from 'components/FilesDropzone';
import Alert from 'components/Alert';

const useStyles = makeStyles(theme => ({
  rootForm: {},
  formControl: {
    width: '100%',

    '& .MuiSelect-root': {
      display: 'flex',
    },

    '& .MuiFormLabel-root': {
      background: '#FFF',
      padding: '0 6px',
    },
  },
  reallyVerifiedIcon: {
    width: '12px',
    height: '12px',
    color: '#36b0c9',
  },
  inlineIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  alert: {},
}));

function AddManuallyModalContent({ files, onValid }) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      category: '',
      companyName: '',
      emailAddress: '',
      contactNumber: '',
    },
    validateOnChange: true,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    onValid(formik.isValid);
  }, [formik.isValid, onValid]);

  return (
    <form onSubmit={formik.handleSubmit} className={classes.rootForm}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography color="textPrimary" gutterBottom variant="body2">
            Key in your vendor details.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Vendor Category</InputLabel>
            <Select fullWidth name="category" value={formik.values.category} onChange={formik.handleChange}>
              <MenuItem value={1}>Furniture, Air Conditioning, Heating & Ventilation</MenuItem>
              <MenuItem value={2}>Air Conditioning</MenuItem>
              <MenuItem value={3}>Ventilation</MenuItem>
            </Select>
            <FormHelperText>Manage your vendor category label</FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Company Name</InputLabel>
            <Select fullWidth name="companyName" value={formik.values.companyName} onChange={formik.handleChange}>
              <MenuItem value="A">
                <ListItemAvatar>
                  <Avatar>A</Avatar>
                </ListItemAvatar>
                <ListItemText
                  disableTypography
                  primary="AAA Company Pte Ltd"
                  secondary={
                    <div className={classes.inlineIcon}>
                      <CheckCircleOutlineIcon className={classes.reallyVerifiedIcon} />
                      <Typography variant="body2" component="div">
                        Verified by Really
                      </Typography>
                    </div>
                  }
                />
              </MenuItem>

              <MenuItem value="B">
                <ListItemAvatar>
                  <Avatar>B</Avatar>
                </ListItemAvatar>
                <ListItemText primary="AA Battery Company Inc" secondary="Not verified" />
              </MenuItem>

              <MenuItem value="C">
                <ListItemAvatar>
                  <Avatar>C</Avatar>
                </ListItemAvatar>
                <ListItemText primary="A Inc" secondary="Not verified" />
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            name="emailAddress"
            label="Email address"
            variant="outlined"
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            name="contactNumber"
            label="Contact number"
            variant="outlined"
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
          />
        </Grid>

        {formik.values.companyName && (
          <Grid item xs={12}>
            <Alert
              className={classes.alert}
              message={
                <div>
                  <p>This vendor is registered in REALLY.</p>
                  <p>We will update your Vendors List with their latest contact information.</p>
                </div>
              }
              onClose={() => {}}
            />
          </Grid>
        )}
      </Grid>
    </form>
  );
}

export default AddManuallyModalContent;
