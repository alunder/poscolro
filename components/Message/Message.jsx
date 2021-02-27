import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';
import { amber, green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const SnackbarContentWrapper = props => {
  const classes = useStyles();
  const { message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classes[variant]}
      message={
        <span className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
};
const Message = props => {
  const { open, message, onClose, variant } = props;

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
    >
      <SnackbarContentWrapper onClose={onClose} variant={variant} message={message} />
    </Snackbar>
  );
};

const SuccessMessage = props => {
  return <Message variant="success" {...props} />;
};

const InfoMessage = props => {
  return <Message variant="info" {...props} />;
};

const ErrorMessage = props => {
  return <Message variant="error" {...props} />;
};

const WarningMessage = props => {
  return <Message variant="warning" {...props} />;
};

Message.propTypes = {
  message: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  variant: PropTypes.string,
};

SnackbarContentWrapper.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.string,
};

export { SuccessMessage, InfoMessage, ErrorMessage, WarningMessage };
export default Message;
