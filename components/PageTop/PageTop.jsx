import PageHeader from 'components/PageHeader';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  heading: {
    margin: '0px',
    color: '#36b0c9',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '0.2px',
    lineHeight: 1.71,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      // paddingTop: theme.spacing(3),
    },
  },
  svgIcon: {
    verticalAlign: 'middle !important',
  },
}));

export default function PageTop(props) {
  const { link, anchor, title } = props;
  const classes = useStyles();
  const { heading, svgIcon } = classes;
  const router = useRouter();
  return (
    <React.Fragment>
      <p onClick={() => router.push(link)} className={heading}>
        <KeyboardReturnIcon className={svgIcon}></KeyboardReturnIcon> {anchor}
      </p>
      <PageHeader subtitle={title} />
    </React.Fragment>
  );
}
