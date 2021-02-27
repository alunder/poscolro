import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import RichEditor from 'components/RichEditor';

import UnitMeasurement from './_UnitMeasurement';
import CascaderCategories from './_CascaderCategories';

import useStyles from './styles';

const ItemForm = ({ uid, canRemove, cascader, formProps, handleSave, handleRemove }) => {
  const classes = useStyles();

  const handleRemoveItem = useCallback(() => {
    handleRemove(uid);
  }, [handleRemove, uid]);

  const handleSaveItem = useCallback(() => {
    handleSave({
      uid,
      category: cascader.value,
      name: formProps.name.value,
      quantity: formProps.quantity.value,
      description: formProps.description.value,
      isMandatory: formProps.isMandatory.value,
      unit: formProps.unit.value,
      otherUnit: formProps.otherUnit.value,
    });
  }, [
    cascader.value,
    formProps.description.value,
    formProps.isMandatory.value,
    formProps.name.value,
    formProps.otherUnit.value,
    formProps.quantity.value,
    formProps.unit.value,
    handleSave,
    uid,
  ]);

  return (
    <Card className={classes.root}>
      <CardHeader title="Item Details" />
      <Divider />
      <CardContent className={classes.cardPadding}>
        <Grid container spacing={2}>
          <CascaderCategories
            value={cascader.value}
            error={cascader.error}
            setError={cascader.setError}
            onChange={cascader.onChange}
            onBlur={cascader.onBlur}
            isShowCascader={cascader.isShowCascader}
            onCascaderVisibleChange={cascader.onCascaderVisibleChange}
          />

          <Grid item md={7} xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              margin="dense"
              className={classes.marginDense}
              label="Item name"
              name="name"
              value={formProps.name.value}
              onChange={formProps.name.onChange}
              error={Boolean(formProps.name.error)}
              helperText={formProps.name.error}
            />
          </Grid>

          <Grid item md={2} xs={5}>
            <TextField
              fullWidth
              variant="outlined"
              margin="dense"
              className={classes.marginDense}
              label="Quantity"
              name="quantity"
              type="number"
              value={formProps.quantity.value}
              onChange={formProps.quantity.onChange}
              error={Boolean(formProps.quantity.error)}
              helperText={formProps.quantity.error}
            />
          </Grid>

          <UnitMeasurement unit={formProps.unit} otherUnit={formProps.otherUnit} />

          <Grid item md={12} xs={12}>
            <RichEditor
              placeholder={
                <span style={{ fontSize: '14px', color: '#2D2A26' }}>
                  Enter your item objective or description to vendors
                </span>
              }
              initialContent={formProps.description.value}
              updateContent={formProps.description.onChange}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  classes={{ root: classes.radio, checked: classes.checked }}
                  name="isMandatory"
                  checked={formProps.isMandatory.value}
                  onChange={formProps.isMandatory.onChange}
                />
              }
              label={
                <Typography className={classes.colorGrey}>
                  This item is mandatory to bid. Vendors cannot opt out of bidding on this item
                </Typography>
              }
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <Button
              style={{ float: 'right', marginLeft: '16px' }}
              variant="contained"
              color="primary"
              onClick={handleSaveItem}
            >
              SAVE
            </Button>

            {canRemove && (
              <Button
                style={{ color: '#36b0c9', float: 'right', marginRight: '16px' }}
                startIcon={<DeleteOutlineIcon />}
                onClick={handleRemoveItem}
              >
                REMOVE
              </Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ItemForm.propTypes = {
  canRemove: PropTypes.bool,
  cascader: PropTypes.object,
  formProps: PropTypes.object,
  handleRemove: PropTypes.func,
  handleSave: PropTypes.func,
  uid: PropTypes.string,
};

ItemForm.defaultProps = {
  canRemove: true,
  cascader: {},
  formProps: {},
  handleRemove: () => null,
  handleSave: () => null,
  uid: null,
};

export default ItemForm;
