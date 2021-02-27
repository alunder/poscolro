/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import { useRouter } from 'next/router';
// import { Link, Router } from '../../routes';

import { useRouter } from 'next/router'
import Link from 'next/link'
// import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import { ListItem, Button, colors } from '@material-ui/core';

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const { as, href, prefetch, ...other } = props;

  return (
    <Link href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </Link>
  );
});

NextComposed.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string,
  prefetch: PropTypes.bool,
};

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const ButtonLink = props => {
  //   const useStyles = makeStyles(theme => ({
  //     item: {
  //       display: 'block',
  //       paddingTop: 0,
  //       paddingBottom: 0
  //     },
  //     itemLeaf: {
  //       display: 'flex',
  //       paddingTop: 0,
  //       paddingBottom: 0
  //     },
  //     button: {
  //       color: colors.blueGrey[800],
  //       padding: '10px 8px',
  //       justifyContent: 'flex-start',
  //       textTransform: 'none',
  //       letterSpacing: 0,
  //       width: '100%'
  //     },
  //     buttonLeaf: {
  //       color: colors.blueGrey[800],
  //       padding: '10px 8px',
  //       justifyContent: 'flex-start',
  //       textTransform: 'none',
  //       letterSpacing: 0,
  //       width: '100%',
  //       fontWeight: theme.typography.fontWeightRegular,
  //       '&.depth-0': {
  //         fontWeight: theme.typography.fontWeightMedium
  //       }
  //     },
  //     icon: {
  //       color: theme.palette.icon,
  //       width: 24,
  //       height: 24,
  //       display: 'flex',
  //       alignItems: 'center',
  //       marginRight: theme.spacing(1)
  //     },
  //     expandIcon: {
  //       marginLeft: 'auto'
  //     },
  //     label: {
  //       display: 'flex',
  //       alignItems: 'center',
  //       marginLeft: 'auto'
  //     },
  //     active: {
  //       color: theme.palette.primary.main,
  //       fontWeight: theme.typography.fontWeightMedium,
  //       '& $icon': {
  //         color: theme.palette.primary.main
  //       }
  //     }
  //   }));

  const { activeclassname = 'active', className: classNameProps, innerRef, naked, ...other } = props;
  const router = useRouter();

  const className = clsx(classNameProps, {
    [activeclassname]: router.pathname === props.href && activeclassname,
  });

  {
    /*
  if (naked) {
    return <NextComposed className={className} ref={innerRef} {...other} />;
  }
*/
  }

  return <MuiLink component={NextComposed} className={className} ref={innerRef} {...other} />;
};

ButtonLink.propTypes = {
  activeclassname: PropTypes.string,
  as: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
};

export default React.forwardRef((props, ref) => <ButtonLink {...props} innerRef={ref} />);
