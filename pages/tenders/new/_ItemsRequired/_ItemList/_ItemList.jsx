import React from 'react';
import PropTypes from 'prop-types';

import Item from './_Item';

const ItemList = ({ listItem, listError, listAppState, makeItemCanEdit }) => {
  return (
    <>
      {listItem.map((data, i) => (
        <Item
          key={data.uid}
          index={i}
          data={data}
          error={listError[data.uid]}
          appState={listAppState[data.uid]}
          haveActions
          makeItemCanEdit={makeItemCanEdit}
        />
      ))}
    </>
  );
};

ItemList.propTypes = {
  listItem: PropTypes.array,
  listError: PropTypes.object,
  listAppState: PropTypes.object,
  haveActions: PropTypes.bool,
  makeItemCanEdit: PropTypes.func,
};

ItemList.defaultProps = {
  listItem: [],
  listError: {},
  listAppState: {},
  haveActions: true,
  makeItemCanEdit: () => null,
};

export default ItemList;
