import { gql } from 'apollo-boost';

const tenderResponse = `
  closingDate
  companyId
  description
  estimatedBudget
  expectedDeliveryCompletionDate
  expectedDeliveryStartDate
  id
  invitationType
  name
  paymentTerms
  paymentTermsNumber
  paymentTermsUnit
  pocContact
  pocEmail
  pocName
  requestType
  siteVisitDateAndTiming
  siteVisitRequired
  status
  tenderItems {
    id
    isMandatory
    name
    notesToVendor
    quantity
    tenderId
    unitOfMeasurement
  }
  validityOfQuotation
  validityOfQuotationUnit
  warranty
  warrantyNumber
  warrantyUnit
`;

export const CREATE_TENDER = gql`
  mutation CreateTender($data: TenderCreateAttributes) {
    createTender(attributes: $data) {
      ${tenderResponse}
    }
  }
`;

export const UPDATE_TENDER = gql`
  mutation UpdateTender($id: ID!, $data: TenderUpdateAttributes) {
    updateTender(id: $id, attributes: $data) {
      ${tenderResponse}
    }
  }
`;

// See all in here: https://really-staging.herokuapp.com/graphiql
