import { useCallback, useState } from 'react';
import useListItemEditing from './useListItemEditing';
import useItemCreating from './useItemCreating';

const useItemRequired = () => {
  const [isCreating, setIsCreating] = useState(true);

  const [
    { item: creatableItem, error: creatableError, appState: creatableAppState },
    {
      onChange: creatableOnChange,
      setIsShowCascader: creatableSetIsShowCascader,
      forceValidate: creatableForceValidate,
      setFieldError: creatableSetFieldError,
      resetItem: creatableResetItem,
      validateFields: creatableValidateFields,
    },
  ] = useItemCreating();

  const [
    { listItem: editableListItem, listError: editableListError, listAppState: editableListAppState },
    {
      addNewItem: editableAddNewItem,
      onChange: editableOnChange,
      setIsShowCascader: editableSetIsShowCascader,
      makeItemCanEdit: editableMakeItemCanEdit,
      forceValidate: editableForceValidate,
      storeItem: editableStoreItem,
    },
  ] = useListItemEditing();

  const showCreator = useCallback(() => {
    setIsCreating(true);
  }, []);

  const cancelCreator = useCallback(() => {
    setIsCreating(false);
  }, []);

  const addNewItem = useCallback(
    item => {
      editableAddNewItem(item);
      creatableResetItem();
      cancelCreator();
    },
    [cancelCreator, creatableResetItem, editableAddNewItem],
  );

  return [
    {
      isCreating,

      creatableItem,
      creatableError,
      creatableAppState,

      editableListItem,
      editableListError,
      editableListAppState,
    },
    {
      showCreator,
      cancelCreator,
      addNewItem,

      creatableOnChange,
      creatableSetIsShowCascader,
      creatableForceValidate,
      creatableSetFieldError,
      creatableResetItem,
      creatableValidateFields,

      editableStoreItem,
      editableOnChange,
      editableSetIsShowCascader,
      editableMakeItemCanEdit,
      editableForceValidate,
    },
  ];
};

export default useItemRequired;
