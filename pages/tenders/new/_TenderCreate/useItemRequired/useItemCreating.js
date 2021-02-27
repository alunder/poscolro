import { useCallback, useReducer } from 'react';
import { fromJS, Iterable } from 'immutable';
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

const ITEM_INITIAL_STATE = fromJS({
  category: {},
  name: '',
  quantity: '',
  unit: 'PCS',
  otherUnit: '',
  description: '',
  isMandatory: false,
});
const itemReducer = (state, { type, payload }) => {
  switch (type) {
    case 'ON_CHANGE': {
      return state.set(payload.name, payload.value);
    }

    case 'RESET': {
      return ITEM_INITIAL_STATE;
    }

    default:
      throw new Error();
  }
};

const ERROR_INITIAL_STATE = fromJS({
  category: null,
  name: null,
  quantity: null,
  unit: null,
  otherUnit: null,
  description: null,
  isMandatory: null,
});
const errorReducer = (state, { type, payload }) => {
  switch (type) {
    case 'HAVE_ERROR': {
      return state.set(payload.name, payload.errorText);
    }

    case 'RESET': {
      return ERROR_INITIAL_STATE;
    }

    default:
      throw new Error();
  }
};

const ITEM_APP_STATE_INITIAL_STATE = fromJS({
  isShowCascader: false,
});
const appStateReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_IS_SHOW_CASCADER': {
      return state.set('isShowCascader', payload.visible);
    }

    case 'RESET': {
      return ITEM_APP_STATE_INITIAL_STATE;
    }

    default:
      throw new Error();
  }
};

const useItemCreating = () => {
  const [item, dispatchItem] = useReducer(itemReducer, ITEM_INITIAL_STATE);

  const [error, dispatchError] = useReducer(errorReducer, ERROR_INITIAL_STATE);

  const [appState, dispatchAppState] = useReducer(appStateReducer, ITEM_APP_STATE_INITIAL_STATE);
  // const [listTouched, setListTouched] = useState([]);

  const validateItem = (name, value) => {
    const errorText = checkValidate(name, value);
    dispatchError({
      type: 'HAVE_ERROR',
      payload: {
        name,
        errorText,
      },
    });
    return errorText;
  };

  const onChange = useCallback((name, value) => {
    dispatchItem({
      type: 'ON_CHANGE',
      payload: {
        name,
        value,
      },
    });

    validateItem(name, value);
  }, []);

  const setIsShowCascader = useCallback(visible => {
    dispatchAppState({
      type: 'SET_IS_SHOW_CASCADER',
      payload: {
        visible,
      },
    });
  }, []);

  const forceValidate = useCallback(
    name => {
      validateItem(name, item.get(name));
    },
    [item],
  );

  const resetItem = useCallback(() => {
    dispatchItem({
      type: 'RESET',
      payload: {},
    });

    dispatchError({
      type: 'RESET',
      payload: {},
    });

    dispatchAppState({
      type: 'RESET',
      payload: {},
    });
  }, []);

  const setFieldError = useCallback((name, errorText) => {
    dispatchError({
      type: 'HAVE_ERROR',
      payload: {
        name,
        errorText,
      },
    });
  }, []);

  const validateFields = useCallback(() => {
    const errors = item.reduce((acc, value, key) => {
      const err = validateItem(key, Iterable.isIterable(value) ? value.toJS() : value);
      return err ? { ...acc, [key]: err } : acc;
    }, {});
    return Object.keys(errors).length ? Promise.reject(errors) : Promise.resolve();
  }, [item]);

  return [
    { item, error, appState },
    { onChange, setIsShowCascader, forceValidate, resetItem, setFieldError, validateFields },
  ];
};

export default useItemCreating;
