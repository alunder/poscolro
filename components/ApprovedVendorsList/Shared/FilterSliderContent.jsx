/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { FormControlLabel, RadioGroup, Typography, Grid, Button, Collapse, Divider } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LabelItem from './LabelItem';
import { getScrollStyle } from './utils';

const useStyles = makeStyles(theme => ({
  formGroup: {
    padding: theme.spacing(2, 0),
  },
  listGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  navList: {
    width: '100%',
    maxHeight: '385px',
    overflowY: 'auto',
    overflowX: 'hidden',
    ...getScrollStyle(),
  },
  expandableTitle: {
    display: 'flex',
    cursor: 'pointer',

    '& .title': {
      marginLeft: '1rem',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '20px',
      color: '#2D2A26',
    },
  },
  divider: {
    marginTop: '1rem',
    marginBottom: '12px',
  },
  gridContainer: {
    width: 'calc(98% + 8px) !important',
  },
  radioGroup: {
    '& .MuiIconButton-colorPrimary': {
      color: theme.palette.primary.main,
    },
  },
  buttonDiv: {
    width: '100%',
    marginTop: '10px',
    textAlign: 'center',
  },
}));

function FilterSliderContent({ open, sliderFilters, onClose, onAddFilter, onRemoveFilter, className, ...rest }) {
  const classes = useStyles();
  const limitCategories = 12;
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandLabels, setExpandLabels] = useState(true);
  const [expandStatuses, setExpandStatuses] = useState(true);

  const limitedCategories = isExpanded ? categories : categories.slice(0, limitCategories);

  return (
    <div className={classes.contentSectionContent}>
      <div className={classes.formGroup}>
        <div className={classes.expandableTitle} onClick={handleToggleLabels}>
          {expandLabels ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          <Typography component="p" className="title">
            Filter by AVL Labels
          </Typography>
        </div>

        <Divider className={classes.divider} />

        <Collapse in={expandLabels}>
          <div className={classes.listGroup}>
            <List component="nav" className={classes.navList}>
              <Grid container spacing={1} className={classes.gridContainer}>
                {limitedCategories.map(item => {
                  const selectedItem = sliderFilters.some(s => s.value === item.id);
                  const handleClick = selectedItem ? handleRemoveCategory : handleAddCategory;

                  return (
                    <Grid key={item.id} item xs={6}>
                      <LabelItem
                        primary={item.name}
                        secondary={`(${item.count})`}
                        selected={selectedItem}
                        onClick={() => handleClick(item)}
                      />
                    </Grid>
                  );
                })}

                {categories.length > limitCategories && (
                  <div className={classes.buttonDiv}>
                    <Button
                      color="primary"
                      endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      onClick={handleClickExpandCollapse}
                    >
                      {`Show ${isExpanded ? 'Less' : 'More'}`}
                    </Button>
                  </div>
                )}
              </Grid>
            </List>
          </div>
        </Collapse>
      </div>

      <div className={classes.formGroup}>
        <div className={classes.expandableTitle} onClick={handleToggleStatuses}>
          {expandStatuses ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          <Typography component="p" className="title">
            Verified Status
          </Typography>
        </div>

        <Divider className={classes.divider} />

        <Collapse in={expandStatuses}>
          <div className={classes.listGroup}>
            <List component="nav" className={classes.navList}>
              <Grid container spacing={1}>
                {statuses.map(item => {
                  const selectedItem = selectedStatuses.some(s => s.id === item.id);
                  const handleClick = selectedItem ? handleRemoveStatus : handleAddStatus;

                  return (
                    <Grid key={item.id} item xs={6}>
                      <LabelItem primary={item.name} selected={selectedItem} onClick={() => handleClick(item)} />
                    </Grid>
                  );
                })}
              </Grid>
            </List>
          </div>
        </Collapse>
      </div>
    </div>
  );

  function handleToggleLabels() {
    setExpandLabels(prevExpand => !prevExpand);
  }

  function handleToggleStatuses() {
    setExpandStatuses(prevExpand => !prevExpand);
  }

  function handleAddCategory(category) {
    onAddFilter({ value: category.id, prefix: 'Cat', type: 'category' });
  }

  function handleRemoveCategory(category) {
    onRemoveFilter(category.id);
  }

  function handleAddStatus(status) {
    setSelectedStatuses(prevStatuses => [...prevStatuses, status]);
  }

  function handleRemoveStatus(status) {
    setSelectedStatuses(prevStatuses => prevStatuses.filter(({ id }) => status.id !== id));
  }

  function handleClickExpandCollapse() {
    setIsExpanded(!isExpanded);
  }
}

export const categories = [
  {
    id: 1,
    name: 'Aircon and Conditioner',
    count: 100,
  },
  {
    id: 2,
    name: 'Building Materials',
    count: 2,
  },
  {
    id: 3,
    name: 'Carpentry',
    count: 2,
  },
  {
    id: 4,
    name: 'Electrical Services',
    count: 1,
  },
  {
    id: 5,
    name: 'Financial Services',
    count: 100,
  },
  {
    id: 6,
    name: 'Events',
    count: 1,
  },
  {
    id: 7,
    name: 'Floring Services',
    count: 1,
  },
  {
    id: 8,
    name: 'Gas Services',
    count: 2,
  },
  {
    id: 9,
    name: 'Lift and Escalator Services',
    count: 5,
  },
  {
    id: 10,
    name: 'Loading Dock and Materials',
    count: 3,
  },
  {
    id: 11,
    name: 'Metalwork',
    count: 3,
  },
  {
    id: 12,
    name: 'Office Suppliers & IT',
    count: 4,
  },
  {
    id: 13,
    name: 'Painting Services',
    count: 2,
  },
  {
    id: 14,
    name: 'Plumbing',
    count: 4,
  },
  {
    id: 15,
    name: 'Roofing Services',
    count: 2,
  },
  {
    id: 16,
    name: 'Signage',
    count: 4,
  },
  {
    id: 17,
    name: 'Category 17',
    count: 4,
  },
  {
    id: 18,
    name: 'Category 18',
    count: 4,
  },
  {
    id: 19,
    name: 'Category 19',
    count: 4,
  },
  {
    id: 20,
    name: 'Category 20',
    count: 4,
  },
  {
    id: 21,
    name: 'Category 21',
    count: 4,
  },
  {
    id: 22,
    name: 'Category 22',
    count: 4,
  },
  {
    id: 23,
    name: 'Category 23',
    count: 4,
  },
  {
    id: 24,
    name: 'Category 24',
    count: 4,
  },
];

export const statuses = [
  {
    id: 1,
    name: 'Verified by Really',
  },
  {
    id: 2,
    name: 'Not Verified',
  },
];

export default FilterSliderContent;
