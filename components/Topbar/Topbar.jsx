import React from 'react';
import RouterLink from 'next/link';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Button, IconButton, Toolbar, Hidden } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import { logout } from 'lib/auth';
import { palette } from 'components/theme';
import Logo from '../Logo';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    borderBottomStyle: 'solid',
    borderBottomWidth: 3,
    borderBottomColor: props => {
      const { forWho } = props;

      if (props.borderColor !== undefined) {
        return props.borderColor;
      }

      if (forWho === 'vendor') {
        return theme.palette.really.yellow;
      }

      if (forWho === 'manager') {
        return theme.palette.really.secondary.c285;
      }
      return theme.palette.really.blue;
    },
  },
  logo: {
    marginTop: theme.spacing(2),
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Topbar = props => {
  const { onSidebarOpen, className, isShowSignOut } = props;

  const classes = useStyles(props);

  const handleSignOut = () => {
    logout();
  };

  return (
    <AppBar className={clsx(classes.root, className)} position="fixed" color="primary">
      <Toolbar>
        <RouterLink href="/">
          <Logo />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdUp>
          <IconButton color={palette.really.bodyText} onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>

        {isShowSignOut && (
          <Button className={classes.signOutButton} color="default" onClick={handleSignOut}>
            <InputIcon className={classes.signOutIcon} />
            Sign out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  forWho: PropTypes.string,
  isShowSignOut: PropTypes.bool,
};

Topbar.defaultProps = {
  onSidebarOpen: () => {},
  forWho: 'default',
};

export default Topbar;
