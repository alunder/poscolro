import { createReducer } from '../../actions/utils';
import { pendingAction, successAction, errorAction } from '../../actions';
import * as Types from './types';

const INIT_STATE = {
  byId: {},
  byTender: {},
  allIds: [],
  appState: {},
};

const createTenderItems = (state, action) => {
  const { tender, tenderItems } = action.payload;
  const tenderItemsIds = tenderItems ? tenderItems.map(item => item.id) : [];

  return {
    ...state,
    byId: {
      ...state.byId,
      ...tenderItems.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.id]: cur,
        }),
        {},
      ),
    },
    byTender: {
      ...state.byTender,
      [tender.id]: [...(state.byTender[tender.id] ? state.byTender[tender.id].concat(tenderItemsIds) : tenderItemsIds)],
    },
    allIds: [...state.allIds, ...tenderItemsIds],
  };
};

const updateTenderItems = (state, action) => {
  const { tenderItems } = action.payload;

  return {
    ...state,
    byId: {
      ...state.byId,
      ...tenderItems.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.id]: cur,
        }),
        {},
      ),
    },
  };
};

export default createReducer(INIT_STATE, {
  [pendingAction(Types.CREATE_TENDER_ITEMS)]: state => state,
  [successAction(Types.CREATE_TENDER_ITEMS)]: createTenderItems,
  [successAction(Types.UPDATE_TENDER_ITEMS)]: updateTenderItems,
  [errorAction(Types.CREATE_TENDER_ITEMS)]: state => state,
});
