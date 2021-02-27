import React from 'react';

const NewTenderContext = React.createContext({
  // step 1
  requestType: 'single',
  quotationFor: '',
  closingDate: '',
  budget: null,
  description: '',
  validityOfQuotation: null,
  periodTypes: 'Days',
  warranty: 'Contractor to Propose',
  warrantyNum: null,
  payment: 'Progressive',
  paymentNum: null,
  deliveryStart: '',
  deliveryComplete: '',
  // step 2
  requireVisit: true,
  dateTime: '',
  name: '',
  phone: '',
  email: '',
  shouldContact: true,
  tenderType: 'open',
  verdorList: [],
  // step 3
  items: [],
});
NewTenderContext.displayName = 'NewTenderContext';

export default NewTenderContext;
