import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: '24px',
    color: '#2D2A26',
  },
  formControl: {
    width: '100%',
    marginTop: 20,

    '& .MuiFormLabel-root': {
      background: '#FFF',
      padding: '0 6px',
    },
  },
}));

function MoveToBlacklistModalContent({ files, onFileChange }) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      reason: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.rootForm}>
      <Typography className={classes.title}>Move this contact to blacklist?</Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Please select reason...</InputLabel>
        <Select fullWidth name="reason" value={formik.values.reason} onChange={formik.handleChange}>
          <MenuItem value={1}>Valid reason</MenuItem>
          <MenuItem value={2}>Invalid reason</MenuItem>
          <MenuItem value={3}>Excuses</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

export default MoveToBlacklistModalContent;
