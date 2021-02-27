import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  property: {
    width: theme.spacing(24),
    padding: '0px',
  },
  value: {
    color: '#37474f',
    paddingRight: '0px',
    paddingLeft: '24px',
  },
}));

const UserProperties = ({ user, ...props }) => {
  const classes = useStyles(props);
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell className={classes.property}>Salutation</TableCell>
          <TableCell className={classes.value}>{user.salutation ? user.salutation : '-'}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.property}>Name</TableCell>
          <TableCell className={classes.value}>{user.firstName} {user.lastName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.property}>Email</TableCell>
          <TableCell className={classes.value}>{user.email}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.property}>Contact Number</TableCell>
          <TableCell className={classes.value}>{user.countryCode} {user.telephone}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.property}>Job Title</TableCell>
          <TableCell className={classes.value}>{user.position}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default UserProperties;
