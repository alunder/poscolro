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

const CompanyProperties = ({ company, ...props }) => {
  const classes = useStyles(props);
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell className={classes.property}>Company Name</TableCell>
          <TableCell className={classes.value}>{company.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.property}>UEN Number</TableCell>
          <TableCell className={classes.value}>{company.uen}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.property}>Company Address</TableCell>
          <TableCell className={classes.value}>
            {company.address} {company.postal}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.property}>Company Telephone</TableCell>
          <TableCell className={classes.value}>
            {company.countryCode} {company.telephone}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.property}>Company Website</TableCell>
          <TableCell className={classes.value}>{company.website ? company.website : '-'}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CompanyProperties;
