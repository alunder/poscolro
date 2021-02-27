import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Sidebar from 'components/Sidebar';
import Topbar from 'components/Topbar';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(8),
    height: '100%',
  },
  shiftContent: {
    paddingLeft: 240,
  },
  content: {
    marginTop: props => (props.alertMessage ? '50px' : theme.spacing(1.5)),
    [theme.breakpoints.down('xs')]: {
      // marginTop: props => (props.alertMessage ? theme.spacing(8) : theme.spacing(4)),
    },
    height: '100%',
    // marginTop: props => (props.alertMessage ? theme.spacing(8) : theme.spacing(4)),
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  contentWithAlertMessage: {
    paddingTop: theme.spacing(7),
  },
  box: {
    left: 0,
    right: 0,
    color: '#ffffff',
    backgroundColor: '#eb5757',
    position: 'fixed',
    padding: '15px 14px 13px 14px',
    zIndex: 100,
  },
}));

export default function Main(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const router = useRouter();
  const { children, alertMessage, isShowSignOut, currentUser } = props;
  const { role } = currentUser;

  useEffect(() => {
    setOpenSidebar(false);
  }, [router.pathname]);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <Topbar forWho={role} isShowSignOut={isShowSignOut} onSidebarOpen={handleSidebarOpen} />
      {false && alertMessage && <Box className={classes.box}>{alertMessage}</Box>}
      <Sidebar
        currentUser={currentUser}
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        // hasAlertMessage={!!alertMessage}
        hasAlertMessage={false}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentWithAlertMessage]: alertMessage,
        })}
      >
        {children}
      </main>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.object,
  isShowSignOut: PropTypes.bool,
  alertMessage: PropTypes.object,
  currentUser: PropTypes.object,
};
