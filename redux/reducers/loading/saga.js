// import { createNewTender } from '../../../api/tenders';

// import { call, put, takeEvery } from 'redux-saga/effects';

// const fetchCounterAPI = (count = 5) =>
//   new Promise(rs => {
//     setTimeout(() => {
//       rs(count);
//     }, 5000);
//   });

// function* fetchCounter(action) {
//   const data = yield call(fetchCounterAPI, action.count);
//   yield put({
//     type: 'SAVE_COUNT',
//     count: data,
//   });
// }

// createNewTender({
//   name: 'abc',
// }).then(console.log);

export default function* loadingSaga() {
  // yield takeEvery('LOAD_COUNT', fetchCounter);
}
