import React from 'react';
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
  root: {
    display: 'flex',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  avatar: {
    marginRight: 36,
    width: 114,
    height: 114,
    border: '1px solid #E6E6E6',

    [theme.breakpoints.down('xs')]: {
      alignSelf: 'center',
      margin: '0 0 24px 0',
    },
  },
  form: {},
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
}));

function EditContactModalContent({ files, onFileChange }) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      companyName: 'AAA Company Pte Ltd',
      email: 'johndoe81@company.com',
      area: '+65',
      contactNumber: '97772737',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={classes.root}>
      <Avatar src="https://picsum.photos/200" className={classes.avatar} />

      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography>Key in your vendor details.</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              name="companyName"
              label="Company Name"
              variant="outlined"
              value={formik.values.companyName}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              name="email"
              label="Email Address"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Area</InputLabel>
              <Select fullWidth name="area" value={formik.values.area} onChange={formik.handleChange}>
                <MenuItem value="+65">+65</MenuItem>
                <MenuItem value="+64">+64</MenuItem>
                <MenuItem value="+63">+63</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={10}>
            <TextField
              fullWidth
              name="contactNumber"
              label="Contact Number"
              variant="outlined"
              value={formik.values.contactNumber}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default EditContactModalContent;
