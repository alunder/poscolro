// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import rootReducer from './reducers';

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  /* eslint-disable no-underscore-dangle */
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  // NOTE: Uncomment the code below to restore support for Redux Saga
  // Dev Tools once it supports redux-saga version 1.x.x
  // if (window.__SAGA_MONITOR_EXTENSION__)
  //   reduxSagaMonitorOptions = {
  //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
  //   };
  /* eslint-enable */
}

function getStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);

  // store.dispatch({
  //   type: 'actions.tenders.UPDATE_TENDER',
  //   id: 12,
  //   data: {
  //     name: 'tender updated',
  //     tenderItemsAttributes: [
  //       {
  //         id: 10,
  //         name: 'item1',
  //       },
  //       {
  //         name: 'item2',
  //       },
  //     ],
  //   },
  // });

  return store;
}

export default getStore();
