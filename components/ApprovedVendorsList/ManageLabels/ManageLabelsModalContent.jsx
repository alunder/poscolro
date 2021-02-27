/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button, Menu, MenuItem, Avatar, colors } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LabelItem from '../Shared/LabelItem';
import { categories } from '../Shared/FilterSliderContent';

const useStyles = makeStyles(theme => ({
  label: {
    marginBottom: 16,
    fontWeight: 500,
    fontSize: 11,
    lineHeight: '16px',
    textTransform: 'uppercase',
    color: '#90A4AE',
  },
}));

function ManageLabelsModalContent() {
  const classes = useStyles();
  const [selectedList, setSelectedList] = useState([{ id: 3 }]);

  return (
    <div>
      <Typography className={classes.label}>Select Labels</Typography>
      <List component="nav">
        <Grid container spacing={2}>
          {categories.map(item => {
            const isCategorySelected = selectedList.some(s => s.id === item.id);
            const handleClick = isCategorySelected ? handleRemoveCategory : handleAddCategory;

            return (
              <Grid key={item.id} item xs={12} sm={3}>
                <LabelItem primary={item.name} selected={isCategorySelected} onClick={() => handleClick(item)} />
              </Grid>
            );
          })}
        </Grid>
      </List>
    </div>
  );

  function handleAddCategory(category) {
    setSelectedList(prevList => [...prevList, category]);
  }

  function handleRemoveCategory(category) {
    setSelectedList(prevList => prevList.filter(({ id }) => id !== category.id));
  }
}

export default ManageLabelsModalContent;
