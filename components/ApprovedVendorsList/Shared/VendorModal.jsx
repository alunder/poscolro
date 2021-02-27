/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Typography, Grid, Button, Menu, MenuItem, Avatar, colors } from '@material-ui/core';

import SearchBar from 'components/SearchBar';
import BaseModal from 'components/Modals';
import FilterSliderContent from './FilterSliderContent';
import ApprovedVendors from '../ApprovedVendors';

import AddManuallyModalContent from '../AddManually/AddManuallyModalContent';
import AddManuallyModalFooter from '../AddManually/AddManuallyModalFooter';

import BatchUploadModalContent from '../BatchUpload/BatchUploadModalContent';
import BatchUploadModalFooter from '../BatchUpload/BatchUploadModalFooter';

import ViewDetailsModalContent from '../ViewDetails/ViewDetailsModalContent';
import ViewDetailsModalTitle from '../ViewDetails/ViewDetailsModalTitle';
import ViewDetailsModalAction from '../ViewDetails/ViewDetailsModalAction';
import ViewDetailsModalAvatar from '../ViewDetails/ViewDetailsModalAvatar';

import EditContactModalContent from '../EditContact/EditContactModalContent';
import EditContactModalFooter from '../EditContact/EditContactModalFooter';

import ManageLabelsModalContent from '../ManageLabels/ManageLabelsModalContent';
import ManageLabelsModalFooter from '../ManageLabels/ManageLabelsModalFooter';

import MoveToBlacklistModalContent from '../MoveToBlacklist/MoveToBlacklistModalContent';
import MoveToBlacklistModalFooter from '../MoveToBlacklist/MoveToBlacklistModalFooter';

import RemoveFromListModalContent from '../RemoveFromList/RemoveFromListModalContent';
import RemoveFromListModalFooter from '../RemoveFromList/RemoveFromListModalFooter';

import modalTypes from './modalTypes';
import { getScrollStyle } from './utils';

const useStyles = makeStyles(theme => ({
  contentPaddingZero: {
    '& .MuiCardContent-root': {
      padding: 0,
    },
  },
  contentPadding: {
    '& .MuiCardContent-root': {
      padding: '24px 36px',
    },

    '& .MuiDialogContent-root': {
      ...getScrollStyle(),
    },
  },
  cardHeaderPadding: {
    '& .MuiCardHeader-root': {
      padding: '36px 36px 12px 36px',
    },
  },
  footerActionsPadding: {
    '& .MuiCardActions-root': {
      padding: 18,
    },
  },
  responsive: {
    [theme.breakpoints.down('xs')]: {
      '& .MuiCardHeader-root': {
        flexDirection: 'column',
      },

      '& .MuiCardHeader-avatar': {
        order: 2,
        margin: '0 0 8px 0',
      },

      '& .MuiCardHeader-content': {
        order: 3,

        '& p': {
          textAlign: 'left',
        },
      },

      '& .MuiCardHeader-action': {
        order: 1,
        width: '100%',
      },
    },
  },
}));

function VendorModal(props) {
  const {
    open,
    files,
    onOpenChange,
    onFileChange,
    onEdit,
    onManage,
    onMove,
    onRemove,
    onClose,
    onSaveContact,
    onApplyManageLabels,
    onRemoveFromList,
    onMoveToBlacklist,
  } = props;
  const classes = useStyles();
  const [isAddManualContentValid, setIsAddManualContentValid] = useState(false);

  return <BaseModal open={Boolean(open)} onClose={onClose} {...getModalProps()} />;

  function getModalProps() {
    switch (open) {
      case modalTypes.massUpload:
        return {
          title: 'Batch Upload',
          contentRenderer: () => <BatchUploadModalContent files={files} onFileChange={onFileChange} />,
          footerRenderer: () => <BatchUploadModalFooter files={files} onClose={onClose} />,
        };
      case modalTypes.addManually:
        return {
          title: 'Add Vendor',
          contentRenderer: () => <AddManuallyModalContent onValid={setIsAddManualContentValid} />,
          footerRenderer: () => <AddManuallyModalFooter isValid={isAddManualContentValid} onClose={onClose} />,
        };
      case modalTypes.viewDetails:
        return {
          width: 960,
          className: clsx(
            classes.contentPaddingZero,
            classes.cardHeaderPadding,
            classes.footerActionsPadding,
            classes.responsive,
          ),
          title: <ViewDetailsModalTitle />,
          avatar: <ViewDetailsModalAvatar />,
          action: (
            <ViewDetailsModalAction
              onManage={onManage}
              onEdit={onEdit}
              onMove={onMove}
              onRemove={onRemove}
              onClose={onClose}
            />
          ),
          contentRenderer: () => <ViewDetailsModalContent />,
          footerRenderer: () => null,
        };
      case modalTypes.editContact:
        return {
          width: 960,
          title: 'Edit Contact',
          contentRenderer: () => <EditContactModalContent />,
          footerRenderer: () => <EditContactModalFooter onSave={onSaveContact} onCancel={onClose} />,
        };
      case modalTypes.manageLabels:
        return {
          width: 960,
          title: 'Manage Labels',
          contentRenderer: () => <ManageLabelsModalContent />,
          footerRenderer: () => (
            <ManageLabelsModalFooter onApply={() => onApplyManageLabels('dialog')} onCancel={onClose} />
          ),
        };
      case modalTypes.moveToBlacklist:
        return {
          width: 646,
          hideFooterDivider: true,
          contentRenderer: () => <MoveToBlacklistModalContent />,
          footerRenderer: () => <MoveToBlacklistModalFooter onMove={onMoveToBlacklist} onCancel={onClose} />,
        };
      case modalTypes.removeFromList:
        return {
          width: 646,
          hideFooterDivider: true,
          contentRenderer: () => <RemoveFromListModalContent />,
          footerRenderer: () => <RemoveFromListModalFooter onRemove={onRemoveFromList} onCancel={onClose} />,
        };
      default:
        return {};
    }
  }
}

export default VendorModal;
