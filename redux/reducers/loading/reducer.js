import * as Types from './actionTypes';

const INIT_STATE = {
  count: 0,
  isLoading: false,
};

export default function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case Types.ON_LOADING: {
      return {
        ...state,
        count: state.count + 1,
        isLoading: state.count + 1 > 0,
      };
    }

    case Types.OFF_LOADING: {
      return {
        ...state,
        count: state.count - 1,
        isLoading: state.count + 1 > 0,
      };
    }
    default:
      return state;
  }
}
