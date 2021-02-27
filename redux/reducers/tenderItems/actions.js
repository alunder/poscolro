import { successAction } from '../../actions/utils';
import { CREATE_TENDER_ITEM, CREATE_TENDER_ITEMS, UPDATE_TENDER_ITEMS } from './types';

export const createTenderItem = payload => ({
  type: successAction(CREATE_TENDER_ITEM),
  payload,
});

export const createTenderItems = payload => ({
  type: successAction(CREATE_TENDER_ITEMS),
  payload,
});

export const updateTenderItems = payload => ({
  type: successAction(UPDATE_TENDER_ITEMS),
  payload,
});
