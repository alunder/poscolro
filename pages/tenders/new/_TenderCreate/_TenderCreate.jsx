import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { AppBar, Box } from '@material-ui/core';

import Tabs from 'components/Tabs';
import Tab from 'components/Tab';
import NewTenderContext from './Context';

import TenderForm from '../_TenderForm';
import useSelectInviteFromAvl from './useSelectInviteFromAvl';
import useInviteNotFromAvl from './useInviteNotFromAvl';
import useItemRequired from './useItemRequired';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const TenderCreate = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const [
    {
      selectedAvl: _VendorsInvitationFromAvlSelectedAvl,
      vendorsSelectedByAvl: _VendorsInvitationFromAvlVendorsSelectedByAvl,
    },
    {
      setSelectedAvl: _VendorsInvitationFromAvlSetSelectedAvl,
      pushVendorSelectedByAvl: _VendorsInvitationFromAvlOnSelectVendor,
      setVendorsSelectedByAvl: _VendorsInvitationFromAvlOnSelectAllVendors,
      resetSelectVendor: _VendorsInvitationFromAvlResetSelectVendor,
      removeVendorSelectedByAvl: _VendorsInvitationFromAvlOnRemoveVendor,
    },
  ] = useSelectInviteFromAvl();

  const [
    _VendorsInvitationNotFromAvlListInvite,
    {
      handleAdd: _VendorsInvitationNotFromAvlHandleAdd,
      handleChange: _VendorsInvitationNotFromAvlHandleChange,
      handleRemove: _VendorsInvitationNotFromAvlHandleRemove,
      handleReset: _VendorsInvitationNotFromAvlHandleReset,
    },
  ] = useInviteNotFromAvl();

  const [
    {
      isCreating: _ItemRequiredIsCreating,

      creatableItem: _ItemRequiredCreatableItem,
      creatableAppState: _ItemRequiredCreatableCreatableAppState,
      creatableError: _ItemRequiredCreatableError,

      editableListItem: _ItemRequiredEditableListItem,
      editableListError: _ItemRequiredEditableListError,
      editableListAppState: _ItemRequiredEditableListAppState,
    },
    {
      showCreator: _ItemRequiredShowCreator,
      cancelCreator: _ItemRequiredCancelCreator,
      addNewItem: _ItemRequiredAddNewItem,

      creatableOnChange: _ItemRequiredCreatableOnChange,
      creatableResetItem: _ItemRequiredCreatableResetItem,
      creatableSetIsShowCascader: _ItemRequiredCreatableSetIsShowCascader,
      creatableForceValidate: _ItemRequiredCreatableForceValidate,
      creatableSetFieldError: _ItemRequiredCreatableSetFieldError,
      creatableValidateFields: _ItemRequiredCreatableValidateFields,

      editableOnChange: _ItemRequiredEditableOnChange,
      editableSetIsShowCascader: _ItemRequiredEditableSetIsShowCascader,
      editableStoreItem: _ItemRequiredEditableStoreItem,
      editableMakeItemCanEdit: _ItemRequiredEditableMakeItemCanEdit,
      editableForceValidate: _ItemRequiredEditableForceValidate,
    },
  ] = useItemRequired();

  const vendorsInvitationFromAvlContext = useMemo(
    () => ({
      selectedAvl: _VendorsInvitationFromAvlSelectedAvl,
      vendorsSelectedByAvl: _VendorsInvitationFromAvlVendorsSelectedByAvl,

      setSelectedAvl: _VendorsInvitationFromAvlSetSelectedAvl,
      onSelectVendor: _VendorsInvitationFromAvlOnSelectVendor,
      onSelectAllVendors: _VendorsInvitationFromAvlOnSelectAllVendors,
      resetSelectVendor: _VendorsInvitationFromAvlResetSelectVendor,
      onRemoveVendor: _VendorsInvitationFromAvlOnRemoveVendor,
    }),
    [
      _VendorsInvitationFromAvlOnRemoveVendor,
      _VendorsInvitationFromAvlOnSelectAllVendors,
      _VendorsInvitationFromAvlOnSelectVendor,
      _VendorsInvitationFromAvlResetSelectVendor,
      _VendorsInvitationFromAvlSelectedAvl,
      _VendorsInvitationFromAvlSetSelectedAvl,
      _VendorsInvitationFromAvlVendorsSelectedByAvl,
    ],
  );

  const vendorsInvitationNotFromAvlContext = useMemo(
    () => ({
      listInvite: _VendorsInvitationNotFromAvlListInvite,

      handleAdd: _VendorsInvitationNotFromAvlHandleAdd,
      handleChange: _VendorsInvitationNotFromAvlHandleChange,
      handleRemove: _VendorsInvitationNotFromAvlHandleRemove,
      handleReset: _VendorsInvitationNotFromAvlHandleReset,
    }),
    [
      _VendorsInvitationNotFromAvlHandleAdd,
      _VendorsInvitationNotFromAvlHandleChange,
      _VendorsInvitationNotFromAvlHandleRemove,
      _VendorsInvitationNotFromAvlHandleReset,
      _VendorsInvitationNotFromAvlListInvite,
    ],
  );

  const vendorsInvitationContext = useMemo(
    () => ({
      fromAvl: vendorsInvitationFromAvlContext,
      notFromAvl: vendorsInvitationNotFromAvlContext,
    }),
    [vendorsInvitationFromAvlContext, vendorsInvitationNotFromAvlContext],
  );

  const itemRequiredCommonContext = useMemo(
    () => ({
      isCreating: _ItemRequiredIsCreating,

      showCreator: _ItemRequiredShowCreator,
      cancelCreator: _ItemRequiredCancelCreator,
      addNewItem: _ItemRequiredAddNewItem,
    }),
    [_ItemRequiredAddNewItem, _ItemRequiredCancelCreator, _ItemRequiredIsCreating, _ItemRequiredShowCreator],
  );

  const itemRequiredCreatableContext = useMemo(
    () => ({
      item: _ItemRequiredCreatableItem,
      error: _ItemRequiredCreatableError,
      appState: _ItemRequiredCreatableCreatableAppState,

      onChange: _ItemRequiredCreatableOnChange,
      setIsShowCascader: _ItemRequiredCreatableSetIsShowCascader,
      resetItem: _ItemRequiredCreatableResetItem,
      setFieldError: _ItemRequiredCreatableSetFieldError,
      forceValidate: _ItemRequiredCreatableForceValidate,
      validateFields: _ItemRequiredCreatableValidateFields,
    }),
    [
      _ItemRequiredCreatableItem,
      _ItemRequiredCreatableError,
      _ItemRequiredCreatableCreatableAppState,
      _ItemRequiredCreatableOnChange,
      _ItemRequiredCreatableSetIsShowCascader,
      _ItemRequiredCreatableResetItem,
      _ItemRequiredCreatableSetFieldError,
      _ItemRequiredCreatableForceValidate,
      _ItemRequiredCreatableValidateFields,
    ],
  );

  const itemRequiredEditableContext = useMemo(() => {
    return {
      listItem: _ItemRequiredEditableListItem,
      listError: _ItemRequiredEditableListError,
      listAppState: _ItemRequiredEditableListAppState,

      makeItemCanEdit: _ItemRequiredEditableMakeItemCanEdit,
      onChange: _ItemRequiredEditableOnChange,
      setIsShowCascader: _ItemRequiredEditableSetIsShowCascader,
      storeItem: _ItemRequiredEditableStoreItem,
      forceValidate: _ItemRequiredEditableForceValidate,
    };
  }, [
    _ItemRequiredEditableForceValidate,
    _ItemRequiredEditableListAppState,
    _ItemRequiredEditableListError,
    _ItemRequiredEditableListItem,
    _ItemRequiredEditableMakeItemCanEdit,
    _ItemRequiredEditableOnChange,
    _ItemRequiredEditableSetIsShowCascader,
    _ItemRequiredEditableStoreItem,
  ]);

  const itemRequiredContext = useMemo(
    () => ({
      common: itemRequiredCommonContext,
      creatable: itemRequiredCreatableContext,
      editable: itemRequiredEditableContext,
    }),
    [itemRequiredCommonContext, itemRequiredCreatableContext, itemRequiredEditableContext],
  );

  const contextValues = useMemo(
    () => ({
      vendorsInvitation: vendorsInvitationContext,
      itemRequired: itemRequiredContext,
    }),
    [vendorsInvitationContext, itemRequiredContext],
  );

  const handleChangeTab = useCallback((e, tab) => {
    setCurrentTab(tab);
  }, []);

  return (
    <NewTenderContext.Provider value={contextValues}>
      <Box marginY={3}>
        <AppBar position="static" color="default" style={{ zIndex: 1, boxShadow: 'none' }}>
          <Tabs
            onChange={handleChangeTab}
            value={currentTab}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            {/* eslint-disable react/jsx-props-no-spreading */}
            <Tab label="Tender details" {...a11yProps(0)} />
            <Tab label="Vendors invitation" {...a11yProps(1)} />
            <Tab label="Items required" {...a11yProps(2)} />
            <Tab label="Review & publish" {...a11yProps(3)} />
            {/* eslint-enable react/jsx-props-no-spreading */}
          </Tabs>
        </AppBar>

        <TenderForm currentTab={currentTab} />
      </Box>
    </NewTenderContext.Provider>
  );
};

TenderCreate.propTypes = {
  className: PropTypes.string,
};

export default TenderCreate;
