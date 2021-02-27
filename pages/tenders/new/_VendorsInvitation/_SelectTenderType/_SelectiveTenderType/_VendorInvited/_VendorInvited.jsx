import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

import { FastField } from 'formik';
import { Grid, Box, Divider, Typography, List } from '@material-ui/core';

import EmptySvg from '../../../../../../../public/images/empty.svg';

import InviteItem from './_InviteItem';

import useStyles from './styles';

const VendorInvited = ({ vendorEntities, inviteVendorsFromAvl, inviteVendorsNotFromAvl, setFieldValue }) => {
  const classes = useStyles();

  const listVendorsFromAvl = useMemo(() => {
    return Object.entries(inviteVendorsFromAvl).reduce(
      (acc, [avlId, listVendors]) => [
        ...acc,
        ...listVendors.map(id => ({
          ...vendorEntities[id],
          avlId,
        })),
      ],
      [],
    );
  }, [inviteVendorsFromAvl, vendorEntities]);

  const listVendorsNotFromAvl = useMemo(() => {
    return inviteVendorsNotFromAvl.map(vendor => (typeof vendor === 'string' ? vendorEntities[vendor] : vendor));
  }, [inviteVendorsNotFromAvl, vendorEntities]);

  const removeInviteVendorFromAvl = useCallback(
    vendor => {
      setFieldValue('vendorsInvitation.inviteVendorsFromAvl', {
        ...inviteVendorsFromAvl,
        [vendor.avlId]: inviteVendorsFromAvl[vendor.avlId].filter(id => id !== vendor.id),
      });
    },
    [inviteVendorsFromAvl, setFieldValue],
  );

  const removeInviteVendorNotFromAvl = useCallback(
    vendor => {
      setFieldValue(
        'vendorsInvitation.inviteVendorsNotFromAvl',
        inviteVendorsNotFromAvl.filter(item => (typeof item === 'string' ? item !== vendor.id : item.id !== vendor.id)),
      );
    },
    [inviteVendorsNotFromAvl, setFieldValue],
  );

  return (
    <Grid container className={classes.vendorInvited}>
      <Box display="flex" justifyContent="space-between" width="100%" paddingBottom={1}>
        <Typography variant="body1">Selected vendors:</Typography>
        <Typography variant="body1" color="textSecondary">
          {listVendorsFromAvl.length + listVendorsNotFromAvl.length} Vendors Selected
        </Typography>
      </Box>
      <Divider width="100%" />

      {!listVendorsFromAvl.length && !listVendorsNotFromAvl.length && (
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" marginY={2}>
          <EmptySvg />
          <Box marginLeft={1}>No invited vendors</Box>
        </Box>
      )}

      {(Boolean(listVendorsFromAvl.length) || Boolean(listVendorsNotFromAvl.length)) && (
        <div className={classes.listOverflow}>
          <List className={classes.list}>
            {listVendorsFromAvl.map(vendor => (
              <InviteItem key={vendor.id} vendor={vendor} onRemove={removeInviteVendorFromAvl} />
            ))}

            {listVendorsNotFromAvl.map(vendor => (
              <InviteItem key={vendor.id} vendor={vendor} onRemove={removeInviteVendorNotFromAvl} />
            ))}
          </List>
        </div>
      )}
    </Grid>
  );
};

VendorInvited.propTypes = {
  inviteVendorsFromAvl: PropTypes.object,
  inviteVendorsNotFromAvl: PropTypes.array,
  setFieldValue: PropTypes.func,
  vendorEntities: PropTypes.object,
};

VendorInvited.defaultProps = {
  inviteVendorsFromAvl: {},
  inviteVendorsNotFromAvl: [],
  setFieldValue: () => null,
  vendorEntities: {},
};

const WithFieldVendorInvited = props => {
  return (
    <FastField>
      {({ form }) => (
        <VendorInvited
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          inviteVendorsFromAvl={form.values.vendorsInvitation.inviteVendorsFromAvl}
          inviteVendorsNotFromAvl={form.values.vendorsInvitation.inviteVendorsNotFromAvl}
          setFieldValue={form.setFieldValue}
        />
      )}
    </FastField>
  );
};

// eslint-disable-next-line import/first
import { MockDataContext } from '../../../_MockData';

const VendorInvitedMockData = props => (
  <MockDataContext.Consumer>
    {({ store }) => {
      const mapStateToProps = {
        // eslint-disable-next-line react/prop-types
        vendorEntities: store.vendor.entities,
      };

      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WithFieldVendorInvited {...props} {...mapStateToProps} />;
    }}
  </MockDataContext.Consumer>
);

export default VendorInvitedMockData;
