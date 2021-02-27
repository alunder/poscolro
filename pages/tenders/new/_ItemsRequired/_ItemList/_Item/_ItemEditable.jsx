import React, { useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Field } from 'formik';
import NewTenderContext from '../../../_TenderCreate/Context';

import ItemForm from '../../_ItemForm';

const ItemEditable = ({ field, data, appState, error }) => {
  const newTenderContext = useContext(NewTenderContext);

  const uid = useMemo(() => data.uid, [data]);

  const itemRequired = useMemo(() => newTenderContext.itemRequired, [newTenderContext]);

  const itemRequiredEditable = useMemo(() => itemRequired.editable, [itemRequired]);

  const onChangeCategory = useCallback(
    ({ lv1, lv2, lv3 }) => {
      itemRequiredEditable.onChange(uid, 'category', {
        lv1,
        lv2,
        lv3,
      });
    },
    [itemRequiredEditable, uid],
  );

  const onCascaderVisibleChange = useCallback(
    visible => {
      itemRequiredEditable.setIsShowCascader(uid, visible);
      if (!visible) {
        itemRequiredEditable.forceValidate(uid, 'description');
      }
    },
    [itemRequiredEditable, uid],
  );

  const onChangeDescription = useCallback(
    html => {
      itemRequiredEditable.onChange(uid, 'description', html);
    },
    [itemRequiredEditable, uid],
  );

  const onChangeForm = useCallback(
    event => {
      itemRequiredEditable.onChange(uid, event.target.name, event.target.value);
    },
    [itemRequiredEditable, uid],
  );

  const onChangeSelect = useCallback(
    event => {
      itemRequiredEditable.onChange(uid, event.target.name, event.target.checked);
    },
    [itemRequiredEditable, uid],
  );

  const cascaderProps = useMemo(
    () => ({
      value: data.category,
      isShowCascader: appState.isShowCascader,
      onChange: onChangeCategory,
      onCascaderVisibleChange,
    }),
    [appState.isShowCascader, data.category, onCascaderVisibleChange, onChangeCategory],
  );

  const itemNameProp = useMemo(
    () => ({
      error: error.name,
      value: data.name,
      onChange: onChangeForm,
    }),
    [error.name, data.name, onChangeForm],
  );

  const itemQuantityProp = useMemo(
    () => ({
      value: data.quantity,
      onChange: onChangeForm,
    }),
    [data.quantity, onChangeForm],
  );

  const itemUnitProp = useMemo(
    () => ({
      value: data.unit,
      onChange: onChangeForm,
    }),
    [data.unit, onChangeForm],
  );

  const itemOtherUnitProp = useMemo(
    () => ({
      value: data.otherUnit,
      onChange: onChangeForm,
    }),
    [data.otherUnit, onChangeForm],
  );

  const itemDescriptionProp = useMemo(
    () => ({
      value: data.description,
      onChange: onChangeDescription,
    }),
    [data.description, onChangeDescription],
  );

  const itemIsMandatoryProp = useMemo(
    () => ({
      value: data.isMandatory,
      onChange: onChangeSelect,
    }),
    [data.isMandatory, onChangeSelect],
  );

  const handleSave = useCallback(
    newItem => {
      itemRequiredEditable.storeItem(newItem.uid, newItem);

      field.onChange({
        target: {
          name: field.name,
          value: field.value.map(it => (it.uid !== newItem.uid ? it : newItem)),
        },
      });
    },
    [field, itemRequiredEditable],
  );

  const handleRemove = useCallback(
    _uid => {
      itemRequiredEditable.removeItem(_uid);
      field.onChange({
        target: {
          name: field.name,
          value: field.value.filter(it => it.uid !== _uid),
        },
      });
    },
    [field, itemRequiredEditable],
  );

  const formProps = useMemo(
    () => ({
      name: itemNameProp,
      quantity: itemQuantityProp,
      unit: itemUnitProp,
      otherUnit: itemOtherUnitProp,
      description: itemDescriptionProp,
      isMandatory: itemIsMandatoryProp,
    }),
    [itemDescriptionProp, itemIsMandatoryProp, itemNameProp, itemOtherUnitProp, itemQuantityProp, itemUnitProp],
  );

  return (
    <ItemForm
      cascader={cascaderProps}
      formProps={formProps}
      uid={data.uid}
      handleSave={handleSave}
      handleRemove={handleRemove}
    />
  );
};

ItemEditable.propTypes = {
  appState: PropTypes.object,
  data: PropTypes.object,
  error: PropTypes.any,
  field: PropTypes.object.isRequired,
};

ItemEditable.defaultProps = {
  appState: {},
  data: {},
  error: {},
};

const WithFieldItemEditable = props => {
  return (
    <Field name="itemRequired.list">
      {({ field }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ItemEditable field={field} {...props} />
      )}
    </Field>
  );
};

export default WithFieldItemEditable;
