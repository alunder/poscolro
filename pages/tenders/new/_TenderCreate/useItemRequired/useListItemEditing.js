import { useCallback, useReducer } from 'react';
import { fromJS } from 'immutable';
import { required, requiredCategory, checkValidate as checkValidateFactory } from './validation';

const validate = {
  category: [requiredCategory()],
  name: [required()],
  quantity: [required()],
  unit: [required()],
  otherUnit: [required()],
  description: [required()],
};

const checkValidate = checkValidateFactory(validate);

const ITEM_INITIAL_STATE = fromJS({});
const itemReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_NEW_ITEM': {
      return state.merge({
        [payload.newItem.uid]: fromJS(payload.newItem),
      });
    }

    case 'STORE_ITEM': {
      return state.mergeIn([payload.uid], payload.newItem);
    }

    case 'ON_CHANGE': {
      return state.setIn([payload.uid, payload.name], payload.value);
    }

    default:
      throw new Error();
  }
};

const ERROR_INITIAL_STATE = fromJS({});
const errorReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_NEW_ITEM': {
      return state.merge({
        [payload.uid]: fromJS({}),
      });
    }

    case 'HAVE_ERROR': {
      return state.setIn([payload.uid, payload.name], payload.errorText);
    }

    default:
      throw new Error();
  }
};

const ITEM_APP_STATE_INITIAL_STATE = fromJS({});
const appStateReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_NEW_ITEM': {
      return state.merge({
        [payload.uid]: {
          isEditing: false,
          isShowCascader: false,
        },
      });
    }

    case 'STORE_ITEM': {
      return state.setIn([payload.uid, 'isEditing'], false).setIn([payload.uid, 'isShowCascader'], false);
    }

    case 'SET_IS_SHOW_CASCADER': {
      return state.setIn([payload.uid, 'isShowCascader'], payload.visible);
    }

    case 'MAKE_ITEM_CAN_EDIT': {
      return state.setIn([payload.uid, 'isEditing'], true);
    }

    default:
      throw new Error();
  }
};

const useListItemEditing = () => {
  const [listItem, dispatchItem] = useReducer(itemReducer, ITEM_INITIAL_STATE);

  const [listError, dispatchError] = useReducer(errorReducer, ERROR_INITIAL_STATE);

  const [listAppState, dispatchAppState] = useReducer(appStateReducer, ITEM_APP_STATE_INITIAL_STATE);
  // const [listTouched, setListTouched] = useState([]);

  const addNewItem = useCallback(newItem => {
    const { uid } = newItem;

    dispatchItem({
      type: 'ADD_NEW_ITEM',
      payload: {
        newItem,
      },
    });

    dispatchError({
      type: 'ADD_NEW_ITEM',
      payload: {
        uid,
      },
    });

    dispatchAppState({
      type: 'ADD_NEW_ITEM',
      payload: {
        uid,
      },
    });
  }, []);

  const storeItem = useCallback((uid, newItem) => {
    dispatchItem({
      type: 'STORE_ITEM',
      payload: {
        uid,
        newItem,
      },
    });

    dispatchAppState({
      type: 'STORE_ITEM',
      payload: {
        uid,
      },
    });
  }, []);

  const validateItem = (uid, name, value) => {
    const errorText = checkValidate(name, value);
    dispatchError({
      type: 'HAVE_ERROR',
      payload: {
        uid,
        name,
        errorText,
      },
    });
  };

  const onChange = useCallback((uid, name, value) => {
    dispatchItem({
      type: 'ON_CHANGE',
      payload: {
        uid,
        name,
        value,
      },
    });

    validateItem(uid, name, value);
  }, []);

  const setIsShowCascader = useCallback((uid, visible) => {
    dispatchAppState({
      type: 'SET_IS_SHOW_CASCADER',
      payload: {
        uid,
        visible,
      },
    });
  }, []);

  const makeItemCanEdit = useCallback(uid => {
    dispatchAppState({
      type: 'MAKE_ITEM_CAN_EDIT',
      payload: {
        uid,
      },
    });
  }, []);

  const forceValidate = useCallback(
    (uid, name) => {
      validateItem(uid, name, listItem.getIn([uid, name]));
    },
    [listItem],
  );

  return [
    { listItem, listError, listAppState },
    { addNewItem, onChange, setIsShowCascader, makeItemCanEdit, forceValidate, storeItem },
  ];
};

export default useListItemEditing;
