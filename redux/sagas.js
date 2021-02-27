import { all } from 'redux-saga/effects';
import loadingSaga from './reducers/loading/saga';
import tendersSaga from './reducers/tenders/saga';

export default function* rootSaga() {
  yield all([loadingSaga(), tendersSaga()]);
}
