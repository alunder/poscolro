import { createReducer } from '../../actions/utils';
import { pendingAction, successAction, errorAction } from '../../actions';
import * as Types from './types';

const INIT_STATE = {
  byId: {},
  allIds: [],
  appState: {
    isLoading: false,
    errors: null,
  },
};

const createTender = (state, action) => ({
  ...state,
  byId: {
    ...state.byId,
    [action.payload.id]: action.payload,
  },
  allIds: [...state.allIds, action.payload.id],
});

const setIsLoadingCreateTender = state => ({
  ...state,
  appState: {
    ...state.appState,
    isLoading: true,
    errors: null,
  },
});

const setErrorCreateTender = (state, action) => ({
  ...state,
  appState: {
    ...state.appState,
    isLoading: false,
    errors: action.errors,
  },
});

export default createReducer(INIT_STATE, {
  [pendingAction(Types.CREATE_TENDER)]: setIsLoadingCreateTender,
  [successAction(Types.CREATE_TENDER)]: createTender,
  [errorAction(Types.CREATE_TENDER)]: setErrorCreateTender,
});
