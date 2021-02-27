import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { convertFromRaw, Editor, EditorState } from 'draft-js';
import { Avatar, Grid } from '@material-ui/core';

import useStyles from '../styles';

const ItemViewable = ({ index, data }) => {
  const classes = useStyles();

  const unit = useMemo(() => (data.unit !== 'Others' ? data.unit : data.otherUnit), [data.otherUnit, data.unit]);

  // TODO: Move this to utils, use in ItemForm too
  const categoryToString = useMemo(() => {
    const pad = str => (str ? ` > ${str}` : '');
    const value = data.category;
    const nameLevel1 = value.lv1 ? value.lv1.name : '';
    const nameLevel2 = value.lv2 ? value.lv2.name : '';
    const nameLevel3 = value.lv3 ? value.lv3.name : '';
    return `${nameLevel1 || ''}${pad(nameLevel2)}${pad(nameLevel3)}`;
  }, [data.category]);

  const description = useMemo(() => {
    try {
      return JSON.parse(data.description);
    } catch {
      return '';
    }
  }, [data.description]);

  return (
    <Grid container spacing={2}>
      <Grid container style={{ alignItems: 'flex-start', padding: '8px' }}>
        <Avatar alt="" className={classes.avatar}>
          {index + 1}
        </Avatar>

        <div style={{ flexGrow: 2 }} className={classes.itemInfo}>
          <p>{data.name}</p>
          <p>
            <span className={classes.category}>Category</span>
            <span>
              {` `}
              {categoryToString}
            </span>
          </p>
        </div>

        <div style={{ flexGrow: 1 }} className={clsx(classes.itemInfo, classes.alignRight)}>
          <p>
            {data.quanity}
            {` `}
            {unit}
          </p>
          {data.isMandatory && <span className={classes.mandotary}>MANDATORY TO BID</span>}
        </div>
      </Grid>

      <Grid item md={12} xs={12}>
        {data.description && (
          <Editor readOnly editorState={EditorState.createWithContent(convertFromRaw(description))} />
        )}
      </Grid>
    </Grid>
  );
};

ItemViewable.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

ItemViewable.defaultProps = {};

export default ItemViewable;
