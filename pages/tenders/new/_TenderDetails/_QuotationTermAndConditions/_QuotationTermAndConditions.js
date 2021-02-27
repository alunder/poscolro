import React from 'react';

import clsx from 'clsx';

import { Field, FastField } from 'formik';
import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  Grid,
  MenuItem,
  InputAdornment,
  TextField,
  Box,
} from '@material-ui/core';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

import DatePicker from '../../../../../components/DatePicker/DatePicker';
import DefaultField from '../../_DefaultField';

import tenderDetailStyles from '../styles';
import useStyles from './styles';

const periodTypes = ['Days', 'Months'];
const warranties = ['Contractor to Propose', 'Months', 'Years'];
const payments = ['Progressive', 'Days'];

const QuotationTermAndConditions = () => {
  const tenderDetailsClasses = tenderDetailStyles();
  const classes = useStyles();

  return (
    <Grid className={classes.quotationTermAndConditions}>
      <Card>
        <CardHeader title="Set Quotation Terms & Conditions" />
        <Divider />
        <CardContent className={tenderDetailsClasses.cardPadding}>
          <Box marginY={1}>
            <Grid container spacing={2}>
              <Grid item xs={8} md={4} className={tenderDetailsClasses.noPaddingRight}>
                <DefaultField
                  type="number"
                  label="Validity of Quotation"
                  name="tenderDetails.validityOfQuotation"
                  InputProps={{
                    className: clsx(tenderDetailsClasses.noRightRadius, tenderDetailsClasses.thinRightBorder),
                  }}
                />
              </Grid>

              <Grid item xs={4} md={2} className={tenderDetailsClasses.noPaddingLeft}>
                <DefaultField
                  label="Period"
                  name="tenderDetails.periodTypes"
                  select
                  InputProps={{
                    className: clsx(
                      tenderDetailsClasses.noLeftRadius,
                      tenderDetailsClasses.svgColor,
                      tenderDetailsClasses.thinLeftBorder,
                    ),
                  }}
                  SelectProps={{
                    MenuProps: {
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                      },
                      transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                      },
                      getContentAnchorEl: null,
                    },
                  }}
                >
                  {periodTypes.map(month => (
                    <MenuItem key={month} value={month}>
                      {month}
                    </MenuItem>
                  ))}
                </DefaultField>
              </Grid>
            </Grid>
          </Box>

          <Box marginY={1}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <DefaultField
                  className={tenderDetailsClasses.marginDense}
                  label="Warranty"
                  name="tenderDetails.warranty"
                  select
                  InputProps={{
                    className: tenderDetailsClasses.svgColor,
                  }}
                  SelectProps={{
                    MenuProps: {
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                      },
                      transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                      },
                      getContentAnchorEl: null,
                    },
                  }}
                >
                  {warranties.map(warranty => (
                    <MenuItem key={warranty} value={warranty}>
                      {warranty}
                    </MenuItem>
                  ))}
                </DefaultField>
              </Grid>
            </Grid>
          </Box>

          <Box marginY={1}>
            <Field name="tenderDetails.warrantyNum">
              {({ field, form }) =>
                form.values.warranty && form.values.warranty !== 'Contractor to Propose' ? (
                  <Grid container spacing={2}>
                    <Grid item md={4} xs={6}>
                      <TextField
                        type="number"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        className={tenderDetailsClasses.marginDense}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">{form.values.warranty}</InputAdornment>,
                        }}
                        /* eslint-disable-next-line react/jsx-props-no-spreading */
                        {...field}
                      />
                    </Grid>
                  </Grid>
                ) : null
              }
            </Field>
          </Box>

          <Box marginY={1}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <DefaultField
                  className={clsx(tenderDetailsClasses.marginDense, tenderDetailsClasses.marginTop)}
                  label="Payment Terms"
                  name="tenderDetails.payment"
                  select
                  InputProps={{
                    className: tenderDetailsClasses.svgColor,
                  }}
                  SelectProps={{
                    MenuProps: {
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                      },
                      transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                      },
                      getContentAnchorEl: null,
                    },
                  }}
                >
                  {payments.map(p => (
                    <MenuItem key={p} value={p}>
                      {p}
                    </MenuItem>
                  ))}
                </DefaultField>
              </Grid>
            </Grid>
          </Box>

          <Box marginY={1}>
            <FastField name="tenderDetails.paymentNum">
              {({ field, form }) =>
                form.values.payment && form.values.payment !== 'Progressive' ? (
                  <Grid container spacing={2}>
                    <Grid item md={4} xs={6}>
                      <TextField
                        type="number"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        InputProps={{
                          endAdornment: <InputAdornment position="end">{form.values.payment}</InputAdornment>,
                        }}
                        /* eslint-disable-next-line react/jsx-props-no-spreading */
                        {...field}
                      />
                    </Grid>
                  </Grid>
                ) : null
              }
            </FastField>
          </Box>

          <Box marginY={1}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <FastField name="tenderDetails.deliveryStart">
                  {field => (
                    <DatePicker
                      label="Expected Delivery Start date"
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
                <FastField name="tenderDetails.deliveryComplete">
                  {field => (
                    <DatePicker
                      label="Expected Delivery Completion Date"
                      disableToolbar
                      fullWidth
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
                      /* eslint-disable-next-line react/jsx-props-no-spreading */
                      {...field}
                    />
                  )}
                </FastField>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

QuotationTermAndConditions.propTypes = {};
QuotationTermAndConditions.defaultProps = {};

export default QuotationTermAndConditions;
