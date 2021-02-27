import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardContent, Grid, List, ListItem, ListItemText, ListItemIcon, makeStyles, Paper } from '@material-ui/core';
import clsx from 'clsx';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '14px',
  },
  categoryTable: {
    display: 'flex',
    padding: '10px 0 !important',
    border: '16px solid #ebf8fa',
    '& > div': {
      borderRight: '1px solid #cbcbcb',
    },
    '& ul': {
      padding: 0,
      '& > div': {
        padding: '0 15px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      padding: '5px 10px !important',
      '& > div': {
        borderRight: 0,
        borderTop: '1px solid #cbcbcb',
      },
      '& ul': {
        '& > div': {
          padding: '0 !important',
        },
      },
    },
  },
  noBorderRight: {
    borderRight: 'none !important',
  },
  noBorderTop: {
    borderTop: 'none !important',
  },
  selected: {
    display: 'flex !important',
    '& > div': {
      color: '#36B0C9',
      '& > span': {
        color: '#36B0C9',
      },
    },
  },
  itemIcon: {
    minWidth: 0,
  },
  displayNone: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  btnReset: {
    display: 'none',
    fontSize: '14px',
    fontFamily: 'Poppins',
    cursor: 'pointer',
    backgroundColor: 'white',
    border: 'none',

    '&:focus': {
      outline: `1px solid ${theme.palette.primary.main}`,
    },

    [theme.breakpoints.down('xs')]: {
      display: 'inline-block'
    },
  },
}));

const Cascader = props => {
  const { level1, level2, level3, onChangeCategory, selected, getCompleteStatus, completeStatus } = props;
  const categories = { level1, level2, level3 };
  const classes = useStyles();
  const [completeSelect, setCompleteSelect] = useState(completeStatus);
  const [lv1, changeLv1] = useState(selected.lv1 || {});
  const [lv2, changeLv2] = useState(selected.lv2 || {});
  const [lv3, changeLv3] = useState(selected.lv3 || {});

  useEffect(() => {
    onChangeCategory({
      lv1,
      lv2,
      lv3,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lv1, lv2, lv3]);

  useEffect(() => {
    getCompleteStatus(completeSelect);
  }, [completeSelect, getCompleteStatus]);

  const hasChild = parent => {
    if (parent.level === 3) {
      return false;
    }
    return categories[`level${parent.level + 1}`].find(item => item.parent === parent.id);
  };

  const handleListItemClick = (event, c, level) => {
    switch (level) {
      case 1: {
        changeLv1(c);
        changeLv2({});
        changeLv3({});
        break;
      }
      case 2: {
        changeLv2(c);
        changeLv3({});
        break;
      }
      default: {
        changeLv3(c);
        break;
      }
    }
    if (!hasChild(c)) {
      setCompleteSelect(true);
    } else {
      setCompleteSelect(false);
    }
  };

  return (
    <CardContent className={classes.categoryTable}>
      <Grid item md={4} xs={12} className={classes.noBorderTop}>
        <Paper style={{ maxHeight: 200, overflow: 'auto', boxShadow: 'none' }}>
          <List>
            {level1.map((c, i) => (
              <ListItem
                key={i.toString()}
                onClick={event => handleListItemClick(event, c, 1)}
                button
                className={clsx({
                  [classes.displayNone]: lv1.name,
                  [classes.selected]: c.id === lv1.id,
                })}
              >
                <ListItemText primary={c.name} />
                {hasChild(c) && (
                  <ListItemIcon className={classes.itemIcon}>
                    <NavigateNextIcon fontSize="small" />
                  </ListItemIcon>
                )}
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>

      {!!lv1.id && (
        <Grid item md={4} xs={12}>
          <Paper style={{ maxHeight: 200, overflow: 'auto', boxShadow: 'none' }}>
            <List>
              {level2
                .filter(c => c.parent === lv1.id)
                .map((c, i) => (
                  <ListItem
                    key={i.toString()}
                    onClick={event => handleListItemClick(event, c, 2)}
                    button
                    className={clsx(lv2.name ? classes.displayNone : null, c.id === lv2.id && classes.selected)}
                  >
                    <ListItemText primary={c.name} />
                    {hasChild(c) && (
                      <ListItemIcon className={classes.itemIcon}>
                        <NavigateNextIcon fontSize="small" />
                      </ListItemIcon>
                    )}
                  </ListItem>
                ))}
            </List>
          </Paper>
        </Grid>
      )}
      {!!lv2.id && (
        <Grid item md={4} xs={12} className={classes.noBorderRight}>
          <Paper style={{ maxHeight: 200, overflow: 'auto', boxShadow: 'none' }}>
            <List>
              {level3
                .filter(c => c.parent === lv2.id)
                .map((c, i) => (
                  <ListItem
                    key={i.toString()}
                    onClick={event => handleListItemClick(event, c, 3)}
                    button
                    className={clsx(lv3.name ? classes.displayNone : null, c.id === lv3.id && classes.selected)}
                  >
                    <ListItemText primary={c.name} />
                    {hasChild(c) && (
                      <ListItemIcon className={classes.itemIcon}>
                        <NavigateNextIcon fontSize="small" />
                      </ListItemIcon>
                    )}
                  </ListItem>
                ))}
            </List>
          </Paper>
        </Grid>
      )}
      <button
        type="button"
        className={classes.btnReset}
        onClick={() => {
          changeLv1({});
          changeLv2({});
          changeLv3({});
        }}
      >
        Reset
      </button>
    </CardContent>
  );
};

Cascader.propTypes = {
  completeStatus: PropTypes.bool,
  getCompleteStatus: PropTypes.func,
  level1: PropTypes.array.isRequired,
  level2: PropTypes.array.isRequired,
  level3: PropTypes.array.isRequired,
  onChangeCategory: PropTypes.func,
  selected: PropTypes.object,
};

Cascader.defaultProps = {
  completeStatus: false,
  getCompleteStatus: () => null,
  onChangeCategory: () => null,
  selected: {},
};

export default Cascader;
