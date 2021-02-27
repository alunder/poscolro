/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Typography, Grid, Button, Menu, MenuItem, Avatar, Drawer, colors, useMediaQuery } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import SearchBar from 'components/SearchBar';
import FilterSliderContent from './Shared/FilterSliderContent';
import ApprovedVendors from './ApprovedVendors';

import VendorModal from './Shared/VendorModal';
import BottomSlider from './Shared/BottomSlider';
import modalTypes from './Shared/modalTypes';
import mockData from './Shared/mockData';
import mockApi from './Shared/mockApi';

const useStyles = makeStyles(theme => ({
  root: {},
  results: {
    marginTop: theme.spacing(3),
  },
  avatar: {
    backgroundColor: colors.red[500],
  },
}));

const ApprovedVendorsList = props => {
  const classes = useStyles();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [files, setFiles] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const [notification, setNotification] = useState('');
  const [filters, setFilters] = useState([
    {
      type: 'category',
      value: 1,
      prefix: 'Cat',
    },
    {
      type: 'category',
      value: 2,
      prefix: 'Cat',
    },
  ]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const projects = mockData;

  return (
    <div className={classes.root}>
      {/* Search & Filter */}
      <Grid container spacing={mdDown ? 2 : 3}>
        <Grid item xs={12} sm={9} md={10}>
          <SearchBar
            placeholder="Search for Vendor names, labels, etc..."
            search={search}
            filters={filters}
            onFilterApply={handleAppyFilters}
            onFilterClear={handleClearFilters}
            onSearch={handleSearch}
            filterSliderRenderer={childProps => <FilterSliderContent {...childProps} />}
          />
        </Grid>

        {/* Add Vendor button */}
        <Grid item xs={12} sm={3} md={2}>
          <Button
            fullWidth
            color="primary"
            size="large"
            variant="contained"
            className={classes.searchButton}
            onClick={handleClick}
          >
            Add Vendor
          </Button>
          <Menu id="add-vendor-menu" keepMounted anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
            <MenuItem onClick={handleClickMassUpload}>Mass upload (from .xls)</MenuItem>
            <MenuItem onClick={handleClickAddManually}>Add manually</MenuItem>
          </Menu>
        </Grid>
      </Grid>

      {/* Grid Table */}
      <div className={classes.results}>
        <ApprovedVendors
          className={classes.results}
          customers={projects}
          filters={filters}
          checkedItems={checkedItems}
          onApplyFilters={handleAppyFilters}
          onRowClick={handleRowClick}
          onCheckItems={setCheckedItems}
        />
      </div>

      {/* Modal */}
      <VendorModal
        open={modalOpen}
        files={files}
        onOpenChange={setModalOpen}
        onFileChange={handleFileChange}
        onEdit={handleEdit}
        onManage={handleMange}
        onMove={handleMove}
        onRemove={handleRemove}
        onClose={handleModalClose}
        onSaveContact={handleSaveContact}
        onApplyManageLabels={handleApplyManageLabels}
        onMoveToBlacklist={handleMoveToBlacklist}
        onRemoveFromList={handleRemoveFromList}
      />

      {/* Drawer at bottom on select multiple */}
      <BottomSlider
        key={checkedItems.length}
        items={checkedItems}
        onMove={handleMove}
        onRemove={handleRemove}
        onApplyManageLabels={handleApplyManageLabels}
      />

      <Snackbar
        open={Boolean(notification)}
        message={notification}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      />
    </div>
  );

  function handleEdit() {
    setModalOpen(modalTypes.editContact);
  }

  function handleMange() {
    setModalOpen(modalTypes.manageLabels);
  }

  function handleMove() {
    setModalOpen(modalTypes.moveToBlacklist);
    setCheckedItems([]);
  }

  function handleRemove() {
    setModalOpen(modalTypes.removeFromList);
    setCheckedItems([]);
  }

  function handleSaveContact() {
    setModalOpen(modalTypes.viewDetails);
    setNotification('Saving...');
    mockApi().then(() => {
      setNotification('Contact Details updated.');
    });
  }

  function handleApplyManageLabels(source) {
    // dialog | bottomSlider
    if (source === 'dialog') {
      setModalOpen(modalTypes.viewDetails);
    }
    setNotification('Saving...');
    mockApi().then(() => {
      setNotification('AAA Company Pte Ltd has been added to Financial Services and removed from 2 labels.');
    });
    setCheckedItems([]);
  }

  function handleMoveToBlacklist() {
    setModalOpen(null);
    mockApi().then(() => {
      setNotification('AAA Company Pte Ltd has been moved to Blacklist.');
    });
  }

  function handleRemoveFromList() {
    setModalOpen(null);
    mockApi().then(() => {
      setNotification('AAA Company Pte Ltd has been removed from My Approved Vendors.');
    });
  }

  function handleCloseSnackbar() {
    setNotification('');
  }

  function handleRowClick(row) {
    setSelectedRow(row);
    setModalOpen(modalTypes.viewDetails);
  }

  function handleAppyFilters(applyFilters) {
    setFilters(applyFilters);
  }

  function handleClearFilters() {
    setFilters([]);
  }

  function handleFileChange(changeFiles) {
    setFiles(changeFiles);
  }

  function handleClickMassUpload() {
    setModalOpen(modalTypes.massUpload);
    handleCloseMenu();
  }

  function handleClickAddManually() {
    setModalOpen(modalTypes.addManually);
    handleCloseMenu();
  }

  function handleModalClose() {
    setModalOpen(null);
  }

  function handleSearch(evtOrValue) {
    const value = evtOrValue.target ? evtOrValue.target.value : evtOrValue;
    setSearch(value);
  }
};

export default ApprovedVendorsList;
