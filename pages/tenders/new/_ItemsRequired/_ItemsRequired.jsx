import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Grid, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import ButtonForm from 'components/ButtonForm';
import NewTenderContext from '../_TenderCreate/Context';

import ItemCreate from './_ItemCreate';
import ItemList from './_ItemList';

const useTransformListItemImmutable = () => {
  const newTenderContext = useContext(NewTenderContext);

  const itemRequired = useMemo(() => newTenderContext.itemRequired, [newTenderContext.itemRequired]);

  const itemRequiredCommon = useMemo(() => itemRequired.common, [itemRequired.common]);

  const isCreating = useMemo(() => itemRequiredCommon.isCreating, [itemRequiredCommon.isCreating]);

  const showCreator = useMemo(() => itemRequiredCommon.showCreator, [itemRequiredCommon.showCreator]);

  const itemRequiredEditable = useMemo(() => itemRequired.editable, [itemRequired]);

  const makeItemEditingCanEdit = useMemo(() => itemRequiredEditable.makeItemCanEdit, [
    itemRequiredEditable.makeItemCanEdit,
  ]);

  const listItem = useMemo(() => {
    return itemRequiredEditable.listItem.valueSeq().toJS();
  }, [itemRequiredEditable.listItem]);

  const listError = useMemo(() => {
    return itemRequiredEditable.listError.toJS();
  }, [itemRequiredEditable.listError]);

  const listAppState = useMemo(() => {
    return itemRequiredEditable.listAppState.toJS();
  }, [itemRequiredEditable.listAppState]);

  return [{ isCreating, listItem, listError, listAppState }, { makeItemEditingCanEdit, showCreator }];
};

const ItemsRequired = ({ prevStep, nextStep }) => {
  const [
    { listItem, isCreating, listError, listAppState },
    { makeItemEditingCanEdit, showCreator },
  ] = useTransformListItemImmutable();

  return (
    <>
      <ItemList
        listItem={listItem}
        listError={listError}
        listAppState={listAppState}
        makeItemCanEdit={makeItemEditingCanEdit}
      />

      {isCreating ? (
        <ItemCreate />
      ) : (
        <>
          <Grid style={{ textAlign: 'center' }} item md={12} xs={12}>
            <Button
              style={{ width: '100%' }}
              onClick={showCreator}
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
            >
              ADD ANOTHER ITEM
            </Button>
          </Grid>
          <ButtonForm text="VENDORS INVITATION" handleClick={prevStep} />
          <ButtonForm arrow="right" text="REVIEW & PUBLISH" handleClick={nextStep} />
        </>
      )}
    </>
  );
};

ItemsRequired.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

ItemsRequired.defaultProps = {};

export default ItemsRequired;
