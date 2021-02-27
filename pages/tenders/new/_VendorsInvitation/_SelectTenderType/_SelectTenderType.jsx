import React from 'react';

import clsx from 'clsx';

import { FastField } from 'formik';
import { RadioGroup, Radio, Card, CardContent, CardHeader, Grid, Divider, Typography } from '@material-ui/core';

import SelectiveTenderType from './_SelectiveTenderType';

import useStyles from '../styles';

const tenderTypeOptions = [
  {
    value: 'open',
    title: 'Open',
    description: 'Any vendor can view and bid',
  },
  {
    value: 'selective',
    title: 'Selective',
    description: 'Only invited vendors can view and bid',
  },
];

const SelectTenderType = () => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, classes.marginTop30, classes.overflowVisible)}>
      <CardHeader title="Select Tender Type" />
      <Divider />
      <CardContent className={classes.cardPadding}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <FastField name="vendorsInvitation.tenderType">
              {({ field }) => (
                <>
                  <RadioGroup
                    className={classes.radioGroup}
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                  >
                    {tenderTypeOptions.map(option => (
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

                  {field.value === 'selective' && <SelectiveTenderType />}
                </>
              )}
            </FastField>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

SelectTenderType.propTypes = {};

export default React.memo(SelectTenderType);
