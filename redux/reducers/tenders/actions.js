import { successAction, errorAction, pendingAction } from '../../actions';
import * as Types from './types';

export const createTenderPending = () => ({
  type: pendingAction(Types.CREATE_TENDER),
});

export const createTender = tender => ({
  type: successAction(Types.CREATE_TENDER),
  payload: tender,
});

export const createTenderError = error => ({
  type: errorAction(Types.CREATE_TENDER),
  errors: error instanceof Error ? error.message : error,
});

export const updateTenderPending = () => ({
  type: pendingAction(Types.UPDATE_TENDER),
});

export const updateTender = (id, tender) => ({
  type: successAction(Types.UPDATE_TENDER),
  payload: {
    id,
    tender,
  },
});

export const updateTenderError = error => ({
  type: errorAction(Types.UPDATE_TENDER),
  errors: error instanceof Error ? error.message : error,
});
