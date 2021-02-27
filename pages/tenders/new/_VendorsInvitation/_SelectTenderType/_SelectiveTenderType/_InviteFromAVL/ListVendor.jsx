import React, { useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import {
  Divider,
  Typography,
  Card,
  CardContent,
  Input,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import NewTenderContext from '../../../../_TenderCreate/Context';

import useStyles from './styles';

const ListVendor = ({ vendors, setInviteVendorsFromAvl }) => {
  const classes = useStyles();
  const newTenderContext = useContext(NewTenderContext);

  const vendorsInvitation = useMemo(() => newTenderContext.vendorsInvitation, [newTenderContext.vendorsInvitation]);
  const fromAvl = useMemo(() => vendorsInvitation.fromAvl, [vendorsInvitation.fromAvl]);
  const vendorsSelectedByAvl = useMemo(() => fromAvl.vendorsSelectedByAvl, [fromAvl.vendorsSelectedByAvl]);
  const selectedAvl = useMemo(() => fromAvl.selectedAvl, [fromAvl]);
  const selectedVendors = useMemo(() => vendorsSelectedByAvl[selectedAvl] || [], [vendorsSelectedByAvl, selectedAvl]);
  const isSelectAllVendors = useMemo(() => vendors.length === selectedVendors.length, [selectedVendors, vendors]);

  const handleSelectVendor = useCallback(
    vendorId => event => {
      if (event.target.checked) {
        fromAvl.onSelectVendor(selectedAvl, [vendorId]);
      } else {
        fromAvl.onRemoveVendor(selectedAvl, [vendorId]);
      }
    },
    [fromAvl, selectedAvl],
  );

  const handleSelectAllVendors = useCallback(() => {
    if (isSelectAllVendors) {
      fromAvl.resetSelectVendor(selectedAvl);
    } else if (vendors.length) {
      fromAvl.onSelectAllVendors(selectedAvl, vendors.map(vendor => vendor.id));
    }
  }, [isSelectAllVendors, fromAvl, selectedAvl, vendors]);

  const handleAddVendor = useCallback(() => {
    setInviteVendorsFromAvl(selectedAvl, selectedVendors);
    fromAvl.resetSelectVendor(selectedAvl);
  }, [fromAvl, selectedAvl, selectedVendors, setInviteVendorsFromAvl]);

  return (
    <Card className={classes.avlRight}>
      <div className={classes.seachAvl}>
        <SearchIcon className={classes.searchIcon} />
        <Input
          disableUnderline
          placeholder="Search for a Vendor on your AVL"
          fullWidth
          className={classes.searchInput}
        />
      </div>

      <Divider />

      <CardContent className={classes.p0}>
        <div className={classes.listVendor}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isSelectAllVendors}
                    color="primary"
                    indeterminate={Boolean(selectedVendors.length && !isSelectAllVendors)}
                    disabled={!vendors.length}
                    onChange={handleSelectAllVendors}
                  />
                </TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>Contact Person</TableCell>
                <TableCell>Email Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vendors.map(vendor => (
                <TableRow hover selected={selectedVendors.includes(vendor.id)} key={vendor.id}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedVendors.includes(vendor.id)}
                      color="primary"
                      value={vendor.id}
                      onChange={handleSelectVendor(vendor.id)}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography variant="body2">{vendor.companyName}</Typography>
                    {vendor.isVerified && (
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        className={clsx(classes.displayFlex, classes.alignItemsCenter)}
                      >
                        <CheckCircleOutlineIcon color="primary" fontSize="small" />
                        <span>Verified by Really</span>
                      </Typography>
                    )}
                  </TableCell>

                  <TableCell>{vendor.contactPerson}</TableCell>
                  <TableCell>{vendor.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className={classes.inviteAvlActions}>
          <Typography variant="body2">
            {selectedVendors.length} out of {vendors.length} vendors selected
          </Typography>
          <Button variant="contained" onClick={handleAddVendor}>
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

ListVendor.propTypes = {
  vendors: PropTypes.array,
  setInviteVendorsFromAvl: PropTypes.func,
};

ListVendor.defaultProps = {
  vendors: [],
  setInviteVendorsFromAvl: () => null,
};

export default ListVendor;
