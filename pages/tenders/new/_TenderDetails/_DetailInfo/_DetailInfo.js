import React from 'react';
import { Card, CardContent, CardHeader, Divider, Grid, RadioGroup, Radio, Typography } from '@material-ui/core';
import { FastField } from 'formik';
import InputAdornment from '@material-ui/core/InputAdornment';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import DatePicker from '../../../../../components/DatePicker/DatePicker';

import DefaultField from '../../_DefaultField';

import tenderDetailStyles from '../styles';
import useStyles from './styles';

const requestTypeOptions = [
  {
    value: 'single',
    title: 'Single Request',
    description: 'I’m looking for a one-time job',
  },
  {
    value: 'term',
    title: 'Term Request',
    description: 'I’m looking for fixed period contract',
  },
];

const DetailInfo = () => {
  const tenderDetailsClasses = tenderDetailStyles();
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title="Tender Details" />
      <Divider />
      <CardContent className={tenderDetailsClasses.cardPadding}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <FastField name="tenderDetails.requestType">
              {({ field }) => (
                <RadioGroup
                  value={field.value}
                  onChange={field.onChange}
                  name={field.name}
                  className={classes.radioGroup}
                >
                  {requestTypeOptions.map(option => (
                    <div className={classes.option} key={option.value}>
                      <Radio className={classes.optionRadio} value={option.value} />
                      <div className={classes.optionDetails}>
                        <Typography gutterBottom variant="h5">
                          {option.title}
                        </Typography>
                        <Typography variant="body1">{option.description}</Typography>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              )}
            </FastField>
          </Grid>

          <Grid item md={12} xs={12}>
            <DefaultField
              label="Request Quotation For...."
              name="tenderDetails.quotationFor"
              helperText="Please fill in the name of your tender package here. "
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FastField name="tenderDetails.closingDate">
              {field => (
                <DatePicker
                  label="Tender Closing Date"
                  format="dd/MM/yyyy"
                  inputVariant="outlined"
                  margin="dense"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CalendarTodayOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  disableToolbar
                  fullWidth
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...field}
                />
              )}
            </FastField>
          </Grid>

          <Grid item md={6} xs={12}>
            <DefaultField
              label="Estimated Total Budget"
              name="tenderDetails.budget"
              type="number"
              helperText="Only you can see this. This will not be shown to vendors."
              InputProps={{
                endAdornment: <InputAdornment position="end">SGD</InputAdornment>,
                startAdornment: (
                  <InputAdornment position="end" style={{ marginRight: '5px' }}>
                    $
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <DefaultField label="Tender Description" name="tenderDetails.description" multiline rows="5" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

DetailInfo.propTypes = {};

DetailInfo.defaultProps = {};

export default DetailInfo;
