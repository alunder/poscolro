import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { FormControlLabel, RadioGroup, Typography, Grid, Checkbox } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formGroup: {
    padding: theme.spacing(2, 0),
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  groupTitle: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '24px',
    color: '#607D8B',
    margin: '1rem 0',
  },
  radioGroup: {
    '& .MuiIconButton-colorPrimary': {
      color: theme.palette.primary.main,
    },
  },
}));

const initialValues = {
  projectStatus: 'ended',
};

function FilterSliderContent({ open, onClose, onFilter, className, ...rest }) {
  const classes = useStyles();
  const [values, setValues] = useState({ ...initialValues });

  const handleFieldChange = (event, field, value) => {
    if (event) {
      event.persist();
    }

    setValues(prevValues => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <div className={classes.contentSectionContent}>
      <div className={classes.formGroup}>
        <Typography component="p" className={classes.groupTitle}>
          LOCATION
        </Typography>
        <div className={classes.fieldGroup}>
          <RadioGroup
            className={classes.radioGroup}
            name="projectStatus"
            onChange={event => handleFieldChange(event, 'projectStatus', event.target.value)}
            value={values.projectStatus}
          >
            <Grid container>
              <Grid item xs={12}>
                <FormControlLabel control={<Checkbox color="primary" />} label="All" value="all" />
              </Grid>
              {[
                'Central',
                'North East',
                'East',
                'South East',
                'West',
                'North West',
                'South',
                'South West',
                'North',
              ].map(option => (
                <Grid key={option} item xs={12} sm={6}>
                  <FormControlLabel control={<Checkbox color="primary" />} label={option} value={option} />
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </div>
      </div>

      <div className={classes.formGroup}>
        <Typography component="p" className={classes.groupTitle}>
          TENDER DEADLINE
        </Typography>
        <div className={classes.fieldGroup}>
          <RadioGroup
            className={classes.radioGroup}
            name="projectStatus"
            onChange={event => handleFieldChange(event, 'projectStatus', event.target.value)}
            value={values.projectStatus}
          >
            <Grid container>
              <Grid item xs={12}>
                <FormControlLabel control={<Checkbox color="primary" />} label="All" value="all" />
              </Grid>
              {['in 1 Day', 'in 3 Days', 'in 7 Days', 'in 30 Days'].map(option => (
                <Grid key={option} item xs={12}>
                  <FormControlLabel control={<Checkbox color="primary" />} label={option} value={option} />
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </div>
      </div>

      <div className={classes.formGroup}>
        <Typography component="p" className={classes.groupTitle}>
          ITEMS
        </Typography>
        <div className={classes.fieldGroup}>
          <RadioGroup
            className={classes.radioGroup}
            name="projectStatus"
            onChange={event => handleFieldChange(event, 'projectStatus', event.target.value)}
            value={values.projectStatus}
          >
            <Grid container>
              <Grid item xs={12}>
                <FormControlLabel control={<Checkbox color="primary" />} label="All" value="all" />
              </Grid>
              {['1 Item', '2 Items', '3 Items', 'More than 5 Items'].map(option => (
                <Grid key={option} item xs={12}>
                  <FormControlLabel control={<Checkbox color="primary" />} label={option} value={option} />
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

export default FilterSliderContent;
