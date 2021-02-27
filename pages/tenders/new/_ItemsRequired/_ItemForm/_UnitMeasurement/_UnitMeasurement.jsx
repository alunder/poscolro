import React from 'react';
import PropTypes from 'prop-types';
import { Grid, MenuItem, TextField } from '@material-ui/core';

import useStyles from '../styles';

const units = ['PCS', 'PAX', 'Jobs', 'Others'];

const UnitMeasurement = ({ unit, otherUnit }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item md={3} xs={7}>
        <Grid item md={12} xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            margin="dense"
            className={classes.marginDense}
            label="Unit of measurement"
            name="unit"
            select
            InputProps={{
              className: classes.svgColor,
            }}
            InputLabelProps={{
              shrink: true,
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
            value={unit.value}
            onChange={unit.onChange}
            error={Boolean(unit.error)}
            helperText={unit.error}
          >
            {units.map(u => (
              <MenuItem key={u} value={u}>
                {u}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      {unit.value && unit.value === 'Others' && (
        <Grid item md={12} xs={12}>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              margin="dense"
              label="Please type the unit"
              name="otherUnit"
              className={classes.marginDense}
              value={otherUnit.value}
              onChange={otherUnit.onChange}
              error={Boolean(otherUnit.error)}
              helperText={otherUnit.error}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

UnitMeasurement.propTypes = {
  otherUnit: PropTypes.object,
  unit: PropTypes.object,
};

UnitMeasurement.defaultProps = {
  otherUnit: {},
  unit: {},
};

export default UnitMeasurement;
