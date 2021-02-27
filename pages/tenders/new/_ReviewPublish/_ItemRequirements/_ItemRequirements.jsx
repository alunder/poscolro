import React from 'react';
import PropTypes from 'prop-types';
import ItemList from '../../_ItemsRequired/_ItemList';
import useStyles from '../styles';

const ItemRequirements = ({ items }) => {
  const classes = useStyles();

  if (!items.length) return null;

  return (
    <>
      <span className={classes.bigSpan} style={{ display: 'block', marginBottom: '24px', marginTop: '24px' }}>
        Item Requirements
      </span>
      <ItemList showActionButtons={false} items={items} />
    </>
  );
};

ItemRequirements.propTypes = {
  items: PropTypes.array,
};

ItemRequirements.defaultProps = {
  items: [],
};

export default ItemRequirements;
