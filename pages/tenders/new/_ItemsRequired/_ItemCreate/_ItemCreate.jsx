import React, { useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import uuid from 'uuid/v4';

import { FastField } from 'formik';

import NewTenderContext from '../../_TenderCreate/Context';
import ItemForm from '../_ItemForm';

const useTransformItemImmutable = () => {
  const newTenderContext = useContext(NewTenderContext);

  const itemRequired = useMemo(() => newTenderContext.itemRequired, [newTenderContext.itemRequired]);

  const itemRequiredCommon = useMemo(() => itemRequired.common, [itemRequired.common]);

  const itemRequiredEditable = useMemo(() => itemRequired.editable, [itemRequired]);

  const itemRequiredCreatable = useMemo(() => itemRequired.creatable, [itemRequired]);

  const itemError = useMemo(() => itemRequiredCreatable.error.toJS(), [itemRequiredCreatable]);

  const itemCreating = useMemo(() => itemRequiredCreatable.item.toJS(), [itemRequiredCreatable.item]);

  const itemAppState = useMemo(() => itemRequiredCreatable.appState.toJS(), [itemRequiredCreatable.appState]);

  const isShowCascader = useMemo(() => itemAppState.isShowCascader, [itemAppState.isShowCascader]);

  const listItem = useMemo(() => itemRequiredEditable.listItem, [itemRequiredEditable.listItem]);

  // Method
  const addNewItem = useMemo(() => itemRequiredCommon.addNewItem, [itemRequiredCommon.addNewItem]);

  const cancelCreator = useMemo(() => itemRequiredCommon.cancelCreator, [itemRequiredCommon.cancelCreator]);

  const onChange = useMemo(() => itemRequiredCreatable.onChange, [itemRequiredCreatable.onChange]);

  const resetItem = useMemo(() => itemRequiredCreatable.resetItem, [itemRequiredCreatable.resetItem]);

  const setIsShowCascader = useMemo(() => itemRequiredCreatable.setIsShowCascader, [
    itemRequiredCreatable.setIsShowCascader,
  ]);

  const forceValidate = useMemo(() => itemRequiredCreatable.forceValidate, [itemRequiredCreatable.forceValidate]);

  const validateFields = useMemo(() => itemRequiredCreatable.validateFields, [itemRequiredCreatable.validateFields]);

  const setFieldError = useMemo(() => itemRequiredCreatable.setFieldError, [itemRequiredCreatable.setFieldError]);

  return [
    { itemCreating, itemError, isShowCascader, listItem },
    { cancelCreator, addNewItem, onChange, resetItem, setIsShowCascader, forceValidate, setFieldError, validateFields },
  ];
};

const ItemCreate = ({ field }) => {
  const [
    { itemCreating, itemError, isShowCascader, listItem },
    { cancelCreator, addNewItem, onChange, resetItem, setIsShowCascader, forceValidate, setFieldError, validateFields },
  ] = useTransformItemImmutable();

  const setCategoryError = useCallback(
    error => {
      setFieldError('category', error);
    },
    [setFieldError],
  );

  const onChangeCategory = useCallback(
    ({ lv1, lv2, lv3 }) => {
      onChange('category', {
        lv1,
        lv2,
        lv3,
      });
    },
    [onChange],
  );

  const onCascaderVisibleChange = useCallback(
    visible => {
      setIsShowCascader(visible);
      if (!visible) {
        forceValidate('category');
      }
    },
    [forceValidate, setIsShowCascader],
  );

  const onChangeDescription = useCallback(
    html => {
      onChange('description', html);
    },
    [onChange],
  );

  const onChangeForm = useCallback(
    event => {
      onChange(event.target.name, event.target.value);
    },
    [onChange],
  );

  const onChangeSelect = useCallback(
    event => {
      onChange(event.target.name, event.target.checked);
    },
    [onChange],
  );

  const cascaderProps = useMemo(
    () => ({
      error: itemError.category,
      value: itemCreating.category,
      isShowCascader,
      onChange: onChangeCategory,
      onCascaderVisibleChange,
      setError: setCategoryError,
    }),
    [
      itemError.category,
      itemCreating.category,
      isShowCascader,
      onChangeCategory,
      onCascaderVisibleChange,
      setCategoryError,
    ],
  );

  const itemNameProp = useMemo(
    () => ({
      error: itemError.name,
      value: itemCreating.name,
      onChange: onChangeForm,
    }),
    [itemCreating.name, itemError.name, onChangeForm],
  );

  const itemQuantityProp = useMemo(
    () => ({
      error: itemError.quantity,
      value: itemCreating.quantity,
      onChange: onChangeForm,
    }),
    [itemCreating.quantity, itemError.quantity, onChangeForm],
  );

  const itemUnitProp = useMemo(
    () => ({
      error: itemError.unit,
      value: itemCreating.unit,
      onChange: onChangeForm,
    }),
    [itemCreating.unit, itemError.unit, onChangeForm],
  );

  const itemOtherUnitProp = useMemo(
    () => ({
      error: itemError.otherUnit,
      value: itemCreating.otherUnit,
      onChange: onChangeForm,
    }),
    [itemCreating.otherUnit, itemError.otherUnit, onChangeForm],
  );

  const itemDescriptionProp = useMemo(
    () => ({
      error: itemError.description,
      value: itemCreating.description,
      onChange: onChangeDescription,
    }),
    [itemCreating.description, itemError.description, onChangeDescription],
  );

  const itemIsMandatoryProp = useMemo(
    () => ({
      value: itemCreating.isMandatory,
      onChange: onChangeSelect,
    }),
    [itemCreating.isMandatory, onChangeSelect],
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

  const handleSave = useCallback(
    _item => {
      validateFields().then(() => {
        const item = {
          ..._item,
          uid: uuid(),
        };

        addNewItem(item);
        field.onChange({
          target: {
            name: field.name,
            value: [...field.value, item],
          },
        });
      });
    },
    [addNewItem, field, validateFields],
  );

  const handleRemove = useCallback(() => {
    resetItem();
    cancelCreator();
  }, [cancelCreator, resetItem]);

  return (
    <ItemForm
      cascader={cascaderProps}
      formProps={formProps}
      handleSave={handleSave}
      handleRemove={handleRemove}
      canRemove={listItem.length > 1}
    />
  );
};

ItemCreate.propTypes = {
  field: PropTypes.object,
};

ItemCreate.defaultProps = {
  field: {},
};

const WithFieldItemCreate = props => {
  return (
    <FastField name="itemRequired.list">
      {({ field }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ItemCreate field={field} {...props} />
      )}
    </FastField>
  );
};

export default WithFieldItemCreate;
