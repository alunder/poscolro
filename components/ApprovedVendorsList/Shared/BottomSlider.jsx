/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Drawer, Grid, Button, Typography, Divider, useMediaQuery } from '@material-ui/core';
import List from '@material-ui/core/List';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LabelItem from './LabelItem';
import { categories } from './FilterSliderContent';

const useStyles = makeStyles(theme => ({
  drawer: {
    '& .MuiPaper-root': {
      maxHeight: 'calc(100% - 64px)',
    },
  },
  gridContainer: {
    padding: '16px 0 16px 264px',

    '& button': {
      textTransform: 'none',
    },

    [theme.breakpoints.down('md')]: {
      padding: '16px 10%',
    },

    [theme.breakpoints.down('xs')]: {
      padding: '16px 24px',

      flexDirection: 'column',
      alignItems: 'flex-start',

      '&.manageLabels': {
        alignItems: 'center',
      },
    },
  },
  textSelected: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '24px',
    color: '#2D2A26',

    [theme.breakpoints.down('sm')]: {
      margin: '0px 8px',
      padding: '6px 6px',
    },
  },
  gridItemFull: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  buttonApply: {
    minWidth: 190,
  },
  buttonManage: {
    background: 'rgba(54, 176, 201, .1)',
    color: '#36b0c9',

    [theme.breakpoints.down('xs')]: {
      marginBottom: 8,
    },
  },
  navList: {
    padding: '24px 24px 24px 264px',

    [theme.breakpoints.down('lg')]: {
      paddingLeft: '24px',

      '& .MuiButtonBase-root': {
        minHeight: 60,
      },
    },
  },
}));

function BottomSlider(props) {
  const { items = [], onApplyManageLabels, onMove, onRemove } = props;
  const classes = useStyles();
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const [selectedList, setSelectedList] = useState([{ id: 3 }]);
  const [viewMode, setViewMode] = useState(null);
  const isOpen = Boolean(items.length);

  return (
    <Drawer variant="persistent" anchor="bottom" open={isOpen} className={classes.drawer}>
      <Grid container alignItems="center" className={clsx(classes.gridContainer, viewMode)}>
        {viewMode === 'manageLabels' ? (
          <>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.textSelected}>2 contacts selected</Typography>
            </Grid>

            <Grid item xs={12} sm={8} md={6} lg={4} className={classes.gridItemFull}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    color="primary"
                    startIcon={<LabelOutlinedIcon />}
                    onClick={handleManageLabel}
                    className={classes.buttonManage}
                  >
                    Manage Labels
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    onClick={() => onApplyManageLabels('bottomSlider')}
                    className={classes.buttonApply}
                  >
                    APPLY
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={8} sm={3} lg={4}>
              <Typography className={classes.textSelected}>2 contacts selected</Typography>
            </Grid>

            <Grid item xs={8} sm={3} lg={2}>
              <Button startIcon={<LabelOutlinedIcon />} onClick={handleManageLabel}>
                Manage Labels
              </Button>
            </Grid>

            <Grid item xs={8} sm={3} lg={2}>
              <Button startIcon={<NotInterestedIcon />} onClick={onMove}>
                Move to Blacklist
              </Button>
            </Grid>

            <Grid item xs={8} sm={1} lg={2}>
              <Button startIcon={<DeleteOutlineIcon />} onClick={onRemove}>
                Remove
              </Button>
            </Grid>
          </>
        )}
      </Grid>

      {viewMode === 'manageLabels' && (
        <div>
          <Divider />

          <List component="nav" className={classes.navList}>
            <Grid container spacing={xsDown ? 2 : 1}>
              {categories.map(item => {
                const isCategorySelected = selectedList.some(s => s.id === item.id);
                const handleClick = isCategorySelected ? handleRemoveCategory : handleAddCategory;

                return (
                  <Grid key={item.id} item xs={12} sm={6} md={2} lg={2}>
                    <LabelItem primary={item.name} selected={isCategorySelected} onClick={() => handleClick(item)} />
                  </Grid>
                );
              })}
            </Grid>
          </List>
        </div>
      )}
    </Drawer>
  );

  function handleManageLabel() {
    if (viewMode === 'manageLabels') {
      setViewMode(null);
      return;
    }
    setViewMode('manageLabels');
  }

  function handleAddCategory(category) {
    setSelectedList(prevList => [...prevList, category]);
  }

  function handleRemoveCategory(category) {
    setSelectedList(prevList => prevList.filter(({ id }) => id !== category.id));
  }
}

export default BottomSlider;
