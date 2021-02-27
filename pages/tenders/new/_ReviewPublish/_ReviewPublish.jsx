import React from 'react';
import PropTypes from 'prop-types';

import { FastField } from 'formik';
import { Button } from '@material-ui/core';

import TotalTenderBudget from './_TotalTenderBudget';
import TenderDescription from './_TenderDescription';
import TenderTermsAndConditions from './_TenderTermsAndConditions';
import RequireVisit from './_RequireVisit';
import UploadFile from './_UploadFile';
import SupportingDocuments from './_SupportingDocuments';

import useStyles from './styles';
import ItemRequirements from './_ItemRequirements/_ItemRequirements';

const ReviewPublish = ({ tender, prevStep }) => {
  const classes = useStyles();

  const { tenderDetails, vendorsInvitation, itemRequired } = tender;

  const {
    budget,
    requestType,
    closingDate,
    description,
    quotationFor,
    periodTypes,
    warrantyNum,
    warranty,
    paymentNum,
    payment,
    deliveryStart,
    deliveryComplete,
  } = tenderDetails;

  const { tenderType, dateTime, name, phone, email, requireVisit, shouldContact } = vendorsInvitation;

  const { list: items } = itemRequired;

  return (
    <>
      <TotalTenderBudget budget={budget} />
      <TenderDescription
        description={description}
        closingDate={closingDate}
        requestType={requestType}
        tenderType={tenderType}
      />
      <TenderTermsAndConditions
        deliveryComplete={deliveryComplete}
        deliveryStart={deliveryStart}
        payment={payment}
        paymentNum={paymentNum}
        periodTypes={periodTypes}
        quotationFor={quotationFor}
        warranty={warranty}
        warrantyNum={warrantyNum}
      />
      <RequireVisit
        dateTime={dateTime}
        email={email}
        name={name}
        phone={phone}
        requireVisit={requireVisit}
        shouldContact={shouldContact}
      />
      <UploadFile />
      <SupportingDocuments />
      <ItemRequirements items={items} />

      <div style={{ textAlign: 'center', fontWeight: 500, fontSize: '16px', marginTop: '32px' }}>
        <p>By clicking ‘Publish Tender Package’,</p>
        <p>you will be putting up your tender for bidding.</p>
      </div>

      <div className={classes.bottom}>
        <Button
          onClick={prevStep}
          style={{
            lineHeight: '24px',
            backgroundColor: '#FAFAFA',
            boxShadow: '1px 2px 3px rgba(0, 0, 0, 0.5)',
            margin: '16px',
            minWidth: '270px',
          }}
        >
          GO BACK AND EDIT
        </Button>
        <Button
          style={{
            lineHeight: '24px',
            color: 'white',
            backgroundColor: '#36B0C9',
            boxShadow: '1px 2px 3px rgba(0, 0, 0, 0.5)',
            margin: '16px',
            minWidth: '270px',
          }}
        >
          PUBLISH TENDER PACKAGE
        </Button>
      </div>
    </>
  );
};

const WithFieldReviewPublish = props => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FastField>{({ form }) => <ReviewPublish {...props} tender={form.values} />}</FastField>;
};

export default WithFieldReviewPublish;

ReviewPublish.propTypes = {
  prevStep: PropTypes.func,
  tender: PropTypes.object,
};

ReviewPublish.defaultProps = {
  prevStep: () => null,
  tender: {},
};
