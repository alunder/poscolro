import React, { useState, forwardRef } from 'react';
import RouterLink from 'next/link';
import { withRouter } from 'next/router';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { ListItem, Button, colors } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import ButtonLink from '../ButtonLink';

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

CustomRouterLink.displayName = 'CustomRouterLink';

const useStyles = makeStyles(theme => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
  },
  buttonLeaf: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  expandIcon: {
    marginLeft: 'auto',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
}));

const SidebarNavItem = props => {
  const {
    title,
    serverRoute,
    href,
    depth,
    children,
    icon,
    className,
    open: openProp,
    label,
    disableIcon,
    ...rest
  } = props;

  const classes = useStyles();

  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen(open => !open);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 8 * depth + 24 * depth + 8; // 24 is for icon, 8 for icon margin right
  }

  const style = {
    paddingLeft,
  };

  if (children) {
    return (
      <ListItem {...rest} className={clsx(classes.item, className)} disableGutters>
        <Button className={classes.button} disableRipple onClick={handleToggle} style={style}>
          {!disableIcon && icon && <div className={classes.icon}>{icon}</div>}
          {title}
          {open ? (
            <ExpandLessIcon className={classes.expandIcon} color="inherit" />
          ) : (
            <ExpandMoreIcon className={classes.expandIcon} color="inherit" />
          )}
        </Button>
        {open && children}
      </ListItem>
    );
  }
  return (
    <ListItem {...rest} className={clsx(classes.itemLeaf, className)} disableGutters>
      <Button
        activeclassname={classes.active}
        className={clsx(classes.buttonLeaf, `depth-${depth}`)}
        component={ButtonLink}
        style={style}
        href={href}
        as={serverRoute}
      >
        {!disableIcon && icon && <div className={classes.icon}>{icon}</div>}
        {title}
        {label && <div className={classes.label}>{label}</div>}
      </Button>
    </ListItem>
  );
};

SidebarNavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
  // serverRoute: PropTypes.string.isRequired,
};

SidebarNavItem.defaultProps = {
  depth: 0,
  open: false,
};

export default SidebarNavItem;
