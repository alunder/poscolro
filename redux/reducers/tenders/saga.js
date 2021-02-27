import { takeEvery, put, call } from 'redux-saga/effects';
import * as Types from './types';
import * as TenderActions from './actions';
import * as TenderItemActions from '../tenderItems/actions';
import { normalizeCreteTender, normalizeUpdateTender } from './normalize';

// apis
import {
  createNewTender as createNewTenderApi,
  updateTender as updateTenderApi,
} from '../../../api/tenders/tenders.api';

function* createNewTender(action) {
  yield put(TenderActions.createTenderPending());

  try {
    const res = yield call(createNewTenderApi, action.data);
    const tender = normalizeCreteTender(res);
    const tenderItems = res.tenderItems;

    yield put(TenderActions.createTender(tender));
    yield put(
      TenderItemActions.createTenderItems({
        tender,
        tenderItems,
      }),
    );
  } catch (err) {
    yield put(TenderActions.createTenderError(err));
  }
}

function* updateTender(action) {
  const { id, data } = action;
  yield put(TenderActions.updateTenderPending());

  try {
    const res = yield call(updateTenderApi, id, data);
    const tender = normalizeUpdateTender(res);
    const newTenderItems = res.tenderItems.filter(item => !item.id);
    const tenderItems = res.tenderItems.filter(item => item.id);

    yield put(TenderActions.updateTender(id, tender));
    yield put(
      TenderItemActions.updateTenderItems({
        tenderItems,
      }),
    );
    yield put(
      TenderItemActions.createTenderItems({
        tender,
        tenderItems: newTenderItems,
      }),
    );
  } catch (err) {
    yield put(TenderActions.updateTenderError(err));
  }
}

export default function* tenderSaga() {
  yield takeEvery(Types.CREATE_TENDER, createNewTender);
  yield takeEvery(Types.UPDATE_TENDER, updateTender);
}

// EX create new tender

// store.dispatch({
//   type: 'actions.tenders.CREATE_TENDER',
//   data: {
//     name: 'new tender',
//     tenderItemsAttributes: [
//       {
//         name: 'item1',
//       },
//       {
//         name: 'item2',
//       },
//     ],
//   },
// });

// EX update tender

// store.dispatch({
//   type: 'actions.tenders.UPDATE_TENDER',
//   data: {
//     name: 'tender updated',
//     tenderItemsAttributes: [
//       {
//         id: '10',
//         name: 'item1',
//       },
//       {
//         name: 'item2',
//       },
//     ],
//   },
// });
