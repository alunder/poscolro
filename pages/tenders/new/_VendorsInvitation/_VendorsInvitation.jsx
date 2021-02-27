import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

import ButtonForm from 'components/ButtonForm';

import SiteVisitDates from './_SiteVisitDates';
import SelectTenderType from './_SelectTenderType';

const VendorsInvitation = props => {
  const { prevStep, nextStep } = props;

  return (
    <Box>
      <SiteVisitDates />
      <SelectTenderType />

      <ButtonForm text="TENDER PACKAGE DETAILS" handleClick={() => prevStep(props)} />
      <ButtonForm arrow="right" text="ITEMS REQUIRED" handleClick={() => nextStep(props)} />
    </Box>
  );
};

VendorsInvitation.propTypes = {
  values: PropTypes.object,
  prevStep: PropTypes.func,
  setFieldValue: PropTypes.func,
  nextStep: PropTypes.func,
};

// eslint-disable-next-line import/first
import MockData from './_MockData';

const VendorsInvitationMockData = props => (
  <MockData>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <VendorsInvitation {...props} />
  </MockData>
);

export default VendorsInvitationMockData;
