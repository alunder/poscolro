import React, { useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import { FastField } from 'formik';
import { Grid, Typography, Button, Card, Box } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import NewTenderContext from '../../../../_TenderCreate/Context';

import InviteItem from './_InviteItem';

import useStyles from './styles';

const InviteNotFromAVL = ({ vendors, field }) => {
  const classes = useStyles();
  const newTenderContext = useContext(NewTenderContext);

  const vendorsInvitation = useMemo(() => newTenderContext.vendorsInvitation, [newTenderContext.vendorsInvitation]);
  const notFromAvl = useMemo(() => vendorsInvitation.notFromAvl, [vendorsInvitation.notFromAvl]);
  const listInvite = useMemo(() => notFromAvl.listInvite, [notFromAvl]);
  const handleAddAnotherVendorInvited = useMemo(() => notFromAvl.handleAdd, [notFromAvl]);
  const handleChange = useMemo(() => notFromAvl.handleChange, [notFromAvl]);
  const handleRemove = useMemo(() => notFromAvl.handleRemove, [notFromAvl]);
  const handleReset = useMemo(() => notFromAvl.handleReset, [notFromAvl]);

  const handleAddVendors = useCallback(() => {
    const filteredList = listInvite.map(
      item =>
        item.id || {
          id: item.uid,
          companyName: item.companyName,
          email: item.email,
        },
    );

    field.onChange({
      target: {
        name: 'vendorsInvitation.inviteVendorsNotFromAvl',
        value: [...(field.value || []), ...filteredList],
      },
    });
    handleReset();
  }, [field, handleReset, listInvite]);

  return (
    <Grid container>
      <Card className={classes.inviteNotFromAvl}>
        <Box display="flex" flexWrap="wrap" marginBottom={2}>
          <Box component="span" marginRight={5}>
            <Typography display="inline" variant="h5">
              Invite Vendors not on your AVL
            </Typography>
          </Box>

          <Typography display="inline" variant="body2">
            These vendors will be added to your vendors list under “pending” so that you can easily add them into your
            AVL at a later date.
          </Typography>
        </Box>

        {listInvite.map(item => (
          <InviteItem
            vendors={vendors}
            handleRemove={handleRemove}
            companyName={item.companyName}
            email={item.email}
            uid={item.uid}
            key={item.uid}
            onChange={handleChange}
          />
        ))}

        <Box marginTop={1}>
          <Button color="primary" onClick={handleAddAnotherVendorInvited}>
            <AddCircleOutlineIcon />
            <Box component="span" marginLeft={0.5}>
              ADD ANOTHER VENDOR
            </Box>
          </Button>
        </Box>

        <Grid container justify="flex-end">
          <Button variant="contained" onClick={handleAddVendors}>
            ADD
          </Button>
        </Grid>
      </Card>
    </Grid>
  );
};

InviteNotFromAVL.propTypes = {
  addVendorList: PropTypes.func,
  field: PropTypes.object.isRequired,
  vendors: PropTypes.array,
};

InviteNotFromAVL.defaultProsp = {
  vendors: [],
};

const WithFieldInviteNotFromAVL = props => {
  return (
    <FastField name="vendorsInvitation.inviteVendorsNotFromAvl">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {({ field }) => <InviteNotFromAVL field={field} {...props} />}
    </FastField>
  );
};

// eslint-disable-next-line import/first
import { MockDataContext } from '../../../_MockData';

const InviteNotFromAVLMockData = props => (
  <MockDataContext.Consumer>
    {({ store }) => {
      const mapStateToProps = {
        vendors: store.vendor.listIds.map(id => store.vendor.entities[id]),
      };

      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WithFieldInviteNotFromAVL {...mapStateToProps} {...props} />;
    }}
  </MockDataContext.Consumer>
);

export default InviteNotFromAVLMockData;
