import React, { useCallback, useMemo, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FastField } from 'formik';
import { Grid } from '@material-ui/core';

import NewTenderContext from '../../../../_TenderCreate/Context';

import ListAVL from './ListAVL';
import ListVendor from './ListVendor';

import useStyles from './styles';

const InviteFromAVL = ({ avl, field }) => {
  const classes = useStyles();
  const newTenderContext = useContext(NewTenderContext);

  const vendorsInvitation = useMemo(() => newTenderContext.vendorsInvitation, [newTenderContext.vendorsInvitation]);
  const fromAvl = useMemo(() => vendorsInvitation.fromAvl, [vendorsInvitation.fromAvl]);

  const selectedAvl = useMemo(() => fromAvl.selectedAvl, [fromAvl]);

  const vendorsByAvl = useMemo(() => {
    const item = avl.find(a => a.id === selectedAvl);
    const vendors = item ? item.vendors : [];

    return vendors.filter(vendor => {
      const selectedVendors = field.value[selectedAvl] || [];
      return !selectedVendors.includes(vendor.id);
    });
  }, [avl, field.value, selectedAvl]);

  useEffect(() => {
    if (avl.length) {
      fromAvl.setSelectedAvl(avl[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectAvl = useCallback(id => fromAvl.setSelectedAvl(id), [fromAvl]);

  const setInviteVendorsFromAvl = useCallback(
    (avlId, listVendors) => {
      field.onChange({
        target: {
          name: 'vendorsInvitation.inviteVendorsFromAvl',
          value: {
            ...field.value,
            [avlId]: [...(field.value[avlId] || []), ...listVendors],
          },
        },
      });
    },
    [field],
  );

  if (!avl.length) {
    return <div>No data</div>;
  }

  return (
    <Grid container className={classes.avlWrapper}>
      <Grid item md={4} sm={12} className={classes.left}>
        <ListAVL
          avl={avl}
          selectedAvl={vendorsInvitation.selectedAvl}
          handleSelectAvl={handleSelectAvl}
          inviteVendorsFromAvl={field.value}
        />
      </Grid>

      <Grid item md={8} sm={12}>
        <ListVendor vendors={vendorsByAvl} setInviteVendorsFromAvl={setInviteVendorsFromAvl} />
      </Grid>
    </Grid>
  );
};

InviteFromAVL.propTypes = {
  avl: PropTypes.array,
  field: PropTypes.object.isRequired,
  mergeVendorList: PropTypes.func,
};

InviteFromAVL.defaultProps = {
  avl: [],
};

const WithFieldInviteFromAVL = props => {
  return (
    <FastField name="vendorsInvitation.inviteVendorsFromAvl">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {({ field }) => <InviteFromAVL field={field} {...props} />}
    </FastField>
  );
};

// eslint-disable-next-line import/first
import { MockDataContext } from '../../../_MockData';

const InviteFromAVLMockData = props => (
  <MockDataContext.Consumer>
    {({ store }) => {
      const mapStateToProps = {
        avl: store.avl.listIds.map(id => ({
          ...store.avl.entities[id],
          vendors: store.avl.entities[id].vendors.map(v => store.vendor.entities[v]),
        })),
      };

      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WithFieldInviteFromAVL {...mapStateToProps} {...props} />;
    }}
  </MockDataContext.Consumer>
);

export default InviteFromAVLMockData;
