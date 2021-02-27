import React from 'react';
import clsx from 'clsx';
import { get } from 'lodash';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography, Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import SidebarNav from '../SidebarNav';
import Profile from '../Profile';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    top: props => (props.hasAlertMessage ? theme.spacing(6) : 0),
    [theme.breakpoints.up('md')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const dashboard = {
  title: 'Dashboard',
  href: '/dashboard',
  icon: <DashboardIcon />,
};

const openTenders = {
  title: 'Open Tenders',
  href: '/open-tenders',
  icon: <DashboardIcon />,
};

const trackMyBids = {
  title: 'Track My Bids',
  href: '/track-my-bids',
  icon: <CalendarTodayIcon />,
};

const bidsWon = {
  title: 'Bids Won',
  href: '/bids-won',
  icon: <PeopleAltOutlinedIcon />,
};

const projects = {
  title: 'Projects',
  href: '/projects',
  icon: <HomeIcon />,
};

const profile = {
  title: 'Profile',
  href: '/profile',
  icon: <PersonOutlineIcon />,
};
const vendorsList = {
  title: 'Vendors List',
  href: '/vendors/:status',
  icon: <PeopleAltOutlinedIcon />,
  children: [
    {
      title: 'My Approved Vendors',
      href: '/vendors/approved',
    },
    {
      title: 'Pending Vendors',
      href: '/vendors/pending',
    },
    {
      title: 'Blacklisted Vendors',
      href: '/vendors/blacklisted',
    },
  ],
};

const sidebarItems = role =>
  ({
    manager: [
      {
        title: 'Management',
        navItems: [projects],
      },
      {
        title: 'Settings',
        navItems: [profile],
      },
    ],
    vendor: [],
  }[role]);
const Sidebar = props => {
  const { open, variant, onClose, className, currentUser } = props;
  const { role } = currentUser;

  const classes = useStyles(props);
  return (
    <Drawer anchor="left" classes={{ paper: classes.drawer }} onClose={onClose} open={open} variant={variant}>
      <div className={clsx(classes.root, className)}>
        <Profile currentUser={currentUser} />
        <Divider className={classes.divider} />
        {(sidebarItems(role) || []).map(item => {
          return (
            <>
              <Typography variant="overline">{item.title}</Typography>
              <SidebarNav className={classes.nav} pages={item.navItems} />
            </>
          );
        })}
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  hasAlertMessage: PropTypes.bool,
  currentUser: PropTypes.object,
};

export default withRouter(Sidebar);
