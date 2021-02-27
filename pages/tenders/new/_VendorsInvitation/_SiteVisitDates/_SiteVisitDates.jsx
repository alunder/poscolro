import React, { useCallback } from 'react';

import { FastField } from 'formik';
import {
  Radio,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  Typography,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Box,
} from '@material-ui/core';

import DefaultField from '../../_DefaultField';

import useStyles from '../styles';

const requireVisitOptions = [
  {
    value: true,
    title: 'Site visit is required',
    description: 'Vendors have to head down to site before quoting. A consultation fee may be charged by the vendor.',
  },
  {
    value: false,
    title: 'Site visit is not required',
    description: 'Vendors quote according to tender package specifications provided',
  },
];

const castStringToBoolean = v => v === 'true';

const SiteVisitDates = () => {
  const classes = useStyles();

  const handleChangeVisitRequire = useCallback(
    fieldOnChange => event => {
      fieldOnChange({
        target: {
          name: 'vendorsInvitation.requireVisit',
          value: castStringToBoolean(event.target.value),
        },
      });
    },
    [],
  );

  return (
    <Card className={classes.root}>
      <CardHeader title="Set Site Visit Dates" />
      <Divider />
      <CardContent className={classes.cardPadding}>
        <Box display="flex" marginBottom={1}>
          <FastField name="vendorsInvitation.requireVisit">
            {({ field }) => (
              <RadioGroup
                className={classes.radioGroup}
                name={field.name}
                value={field.value}
                onChange={handleChangeVisitRequire(field.onChange)}
              >
                {requireVisitOptions.map(option => (
                  <div className={classes.option} key={option.value}>
                    <Radio value={option.value} className={classes.optionRadio} />
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
        </Box>

        <FastField name="vendorsInvitation.requireVisit">
          {({ field }) =>
            field.value ? (
              <>
                <Grid container spacing={2}>
                  <Grid item md={12} xs={12}>
                    <DefaultField
                      name="vendorsInvitation.dateTime"
                      label="Site Visit Date and Timing"
                      multiline
                      rows="5"
                    />
                  </Grid>
                </Grid>

                <Box marginY={2}>
                  <Typography className={classes.formControlLabel}>Point of Contact:</Typography>
                </Box>

                <Grid container spacing={2}>
                  <Grid item md={4} xs={12}>
                    <DefaultField className={classes.marginDense} name="vendorsInvitation.name" label="Name" />
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <DefaultField
                      className={classes.marginDense}
                      label="Contact Number"
                      name="vendorsInvitation.phone"
                    />
                  </Grid>

                  <Grid item md={4} xs={12}>
                    <DefaultField
                      className={classes.marginDense}
                      label="Email Address"
                      name="vendorsInvitation.email"
                    />
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <FormControlLabel
                      control={
                        <FastField name="vendorsInvitation.shouldContact">
                          {({ field: fieldShouldContact }) => (
                            <Checkbox
                              value
                              classes={{ root: classes.radio, checked: classes.checked }}
                              name={fieldShouldContact.name}
                              checked={fieldShouldContact.value}
                              onChange={fieldShouldContact.onChange}
                            />
                          )}
                        </FastField>
                      }
                      label="Vendors should make contact to arrange an appointment for site visit before heading down"
                    />
                  </Grid>
                </Grid>
              </>
            ) : null
          }
        </FastField>
      </CardContent>
    </Card>
  );
};

SiteVisitDates.propTypes = {};

export default React.memo(SiteVisitDates);
