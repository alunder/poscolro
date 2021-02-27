// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import loading from './loading';
import tenders from './tenders';
import tenderItems from './tenderItems';

export default combineReducers({
  loading,
  tenders,
  tenderItems,
});
