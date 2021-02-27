/* eslint-disable react/no-multi-comp */
import React from 'react';
import { withRouter } from 'next/router';
import pathToRegexp from 'path-to-regexp';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List } from '@material-ui/core';

import SidebarNavItem from '../SidebarNavItem';

const useStyles = makeStyles(() => ({
  root: {},
}));

function renderItems(props) {
  // eslint-disable-next-line react/prop-types
  const { pages, ...rest } = props;

  return <List>{pages.reduce((items, page) => reduceChildRoutes({ items, page, ...rest }), [])}</List>;
}

const reduceChildRoutes = props => {
  const { router, items, page, depth, disableIcons } = props;

  if (page.children) {
    // TODO: Fixed issue regarding matchPath as next/router doesn't have this function
    // const open = matchPath(router.pathname, {
    //   path: page.href
    // });

    const regexp = pathToRegexp(router.pathname, [], { strict: true, sensitive: true });
    const open = regexp.exec(page.href);

    items.push(
      <SidebarNavItem
        depth={depth}
        disableIcon={disableIcons}
        icon={page.icon}
        key={page.title}
        label={page.label}
        open={open}
        title={page.title}
        serverRoute={page.serverRoute}
      >
        {renderItems({
          router,
          pages: page.children,
          depth: depth + 1,
          disableIcons,
        })}
      </SidebarNavItem>,
    );
  } else {
    items.push(
      <SidebarNavItem
        depth={depth}
        disableIcon={disableIcons}
        href={page.href}
        icon={page.icon}
        key={page.title}
        label={page.label}
        title={page.title}
        serverRoute={page.serverRoute}
      />,
    );
  }

  return items;
};

const SidebarNav = props => {
  const { router, pages, disableIcons, className, ...rest } = props;

  const classes = useStyles();

  return (
    <nav {...rest} className={clsx(classes.root, className)}>
      {renderItems({ router, pages, depth: 0, disableIcons })}
    </nav>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  disableIcons: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired,
};

SidebarNav.defaultProps = {
  disableIcons: false,
};

export default withRouter(SidebarNav);
