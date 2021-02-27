import React, { useCallback, useMemo, useState } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import Cascader from 'components/Cascader';
import { Grid, InputAdornment, ClickAwayListener, TextField } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import useStyles from '../styles';

import data from '../../../categories.json';

const level1 = data.filter(c => c.level === 1);
const level2 = data.filter(c => c.level === 2);
const level3 = data.filter(c => c.level === 3);

const CascaderCategories = ({ value, onChange, isShowCascader, onCascaderVisibleChange, error, setError }) => {
  const classes = useStyles();

  const [completeSelect, setCompleteSelect] = useState(false);

  const categoryToString = useMemo(() => {
    const pad = str => (str ? ` > ${str}` : '');
    const nameLevel1 = get(value, ['lv1', 'name'], '');
    const nameLevel2 = get(value, ['lv2', 'name'], '');
    const nameLevel3 = get(value, ['lv3', 'name'], '');
    return `${nameLevel1 || ''}${pad(nameLevel2)}${pad(nameLevel3)}`;
  }, [value]);

  const showCascader = useCallback(() => {
    onCascaderVisibleChange(true);
  }, [onCascaderVisibleChange]);

  const closeCascader = useCallback(() => {
    onCascaderVisibleChange(false);
  }, [onCascaderVisibleChange]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickAway = useCallback(() => {
    if (completeSelect) {
      closeCascader();
      setError(null);
    } else {
      setError('Please complete selecting the category');
    }
  });

  const onChangeCategory = useCallback(({ lv1, lv2, lv3 }) => {
    onChange({
      lv1,
      lv2,
      lv3,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid item md={12} xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          margin="dense"
          onClick={!isShowCascader ? showCascader : handleClickAway}
          className={classes.marginDense}
          label="Select Category"
          autoComplete="off"
          value={categoryToString}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ArrowDropDownIcon />
              </InputAdornment>
            ),
            className: classes.hideBlinking,
          }}
          error={Boolean(error)}
          helperText={error}
        />
      </Grid>

      {isShowCascader && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Grid item md={12} xs={12}>
            <Cascader
              level1={level1}
              level2={level2}
              level3={level3}
              onChangeCategory={onChangeCategory}
              selected={value}
              getCompleteStatus={setCompleteSelect}
            />
          </Grid>
        </ClickAwayListener>
      )}
    </>
  );
};

CascaderCategories.propTypes = {
  isShowCascader: PropTypes.bool,
  error: PropTypes.any,
  onCascaderVisibleChange: PropTypes.func,
  onChange: PropTypes.func,
  setError: PropTypes.func,
  value: PropTypes.object,
};

CascaderCategories.defaultProps = {
  isShowCascader: false,
  onCascaderVisibleChange: () => null,
  onChange: () => null,
  setError: () => null,
  value: {},
};

export default CascaderCategories;
