import React, { useReducer } from 'react';

export const MockDataContext = React.createContext();

const randomIn = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const avl = Array(10)
  .fill()
  .map((_, i) => ({
    id: `avl-${i}`,
    name: `Metalwork${Math.random()
      .toString(16)
      .slice(2)}`,
    vendors: Array(randomIn(1, 6))
      .fill()
      .map((__, index) => `vendor-${index}`),
  }));

const vendor = Array(10)
  .fill()
  .map((_, i) => ({
    id: `vendor-${i}`,
    companyName: `AAA Company Pte Ltd${Math.random()
      .toString(16)
      .slice(2)}`,
    contactPerson: `Ms Jenny Long${Math.random()
      .toString(16)
      .slice(2)}`,
    email: `jenny.long.adeli@company.sg${Math.random()
      .toString(16)
      .slice(2)}`,
    isVerified: Math.random() >= 0.5,
  }));

const INITIAL_STATE = {
  avl: {
    entities: avl.reduce(
      (acc, val) => ({
        ...acc,
        [val.id]: val,
      }),
      {},
    ),
    listIds: avl.map(a => a.id),
  },

  vendor: {
    entities: vendor.reduce(
      (acc, val) => ({
        ...acc,
        [val.id]: val,
      }),
      {},
    ),
    listIds: vendor.map(a => a.id),
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

// eslint-disable-next-line react/prop-types
const MockData = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, INITIAL_STATE);

  return <MockDataContext.Provider value={{ store, dispatch }}>{children}</MockDataContext.Provider>;
};

export default MockData;
