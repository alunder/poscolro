export const pendingAction = type => `${type}_PENDING`;
export const errorAction = type => `${type}_ERROR`;
export const successAction = type => `${type}_SUCCESS`;

export const createReducer = (initState, handlers = {}) => (state = initState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};
