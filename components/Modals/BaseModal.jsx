import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Modal,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Button,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import { getScrollStyle } from '../ApprovedVendorsList/Shared/utils';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: ({ width = 768 }) => width,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%',
  },
  cardHeader: {
    padding: '20px 36px',
  },
  cardContent: {
    padding: '24px 36px',
    minHeight: 150,
  },
  dialogContent: {
    ...getScrollStyle(),
  },
  paddingZero: {
    padding: 0,
    overflowX: 'hidden',
    maxHeight: 420,
  },
  actions: {
    width: '100%',
    justifyContent: 'center',
    padding: '24px 36px',

    '& button': {
      minWidth: '174px',
    },
  },
}));

function BaseModal(props) {
  const {
    open,
    onClose,
    title,
    avatar,
    action,
    className,
    contentRenderer,
    footerRenderer,
    hideFooterDivider,
    ...rest
  } = props;
  const classes = useStyles(props);

  if (!open) {
    return null;
  }

  return (
    <Modal onClose={onClose} open={open}>
      <Card {...rest} className={clsx(classes.root, className)}>
        {title && (
          <DialogTitle className={classes.paddingZero}>
            <CardHeader
              title={title}
              avatar={avatar}
              className={classes.cardHeader}
              action={
                action || (
                  <IconButton aria-label="close" onClick={onClose}>
                    <CloseIcon />
                  </IconButton>
                )
              }
            />
          </DialogTitle>
        )}

        {title && <Divider />}

        {contentRenderer && (
          <DialogContent className={clsx(classes.dialogContent, classes.paddingZero)}>
            <CardContent className={classes.cardContent}>{contentRenderer(props)}</CardContent>
          </DialogContent>
        )}

        {!hideFooterDivider && <Divider />}

        {footerRenderer && (
          <DialogActions className={classes.paddingZero}>
            <CardActions className={classes.actions}>{footerRenderer(props)}</CardActions>
          </DialogActions>
        )}
      </Card>
    </Modal>
  );
}

BaseModal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

BaseModal.defaultProps = {
  open: false,
  onClose: () => {},
};

export default BaseModal;
