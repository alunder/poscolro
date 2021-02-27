import React from 'react';
import PropTypes from 'prop-types';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import ButtonForm from 'components/ButtonForm';

import DetailInfo from './_DetailInfo';
import QuotationTermAndConditions from './_QuotationTermAndConditions';
import UploadSupportingDocument from './_UploadSupportingDocument';
import UploadImages from './_UploadImages';

const TenderDetails = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DetailInfo />
      <QuotationTermAndConditions />
      <UploadSupportingDocument />
      <UploadImages />

      <ButtonForm type="submit" arrow="right" text="VENDORS INVITATION" />
    </MuiPickersUtilsProvider>
  );
};

TenderDetails.propTypes = {
  nextStep: PropTypes.func,
};

export default React.memo(TenderDetails);
