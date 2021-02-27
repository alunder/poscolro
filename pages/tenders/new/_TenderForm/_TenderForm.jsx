import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Formik, Form } from 'formik';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import TabPanel from 'components/TabPanel';
import TenderDetails from '../_TenderDetails';
import VendorsInvitation from '../_VendorsInvitation';

import ItemsRequired from '../_ItemsRequired';
import ReviewPublish from '../_ReviewPublish';

import { tenderDetailsValidation, vendorInvitationValidation, itemsRequiredValidation } from './validate';

// eslint-disable-next-line camelcase
const CREATE_tender = gql`
  mutation createTender($tenderAttributes: TenderAttributes!) {
    createTender(attributes: $tenderAttributes) {
      id
    }
  }
`;

const useStyles = makeStyles({
  root: {},
  tabpanel: {
    width: '100%',
    '& >div': {
      padding: '0 !important',
      marginTop: '30px',
    },
  },
});

const validationSchema = [tenderDetailsValidation, vendorInvitationValidation, itemsRequiredValidation];

const TenderForm = ({ currentTab }) => {
  const theme = useTheme();
  const classes = useStyles();

  const tender = useMemo(
    () => ({
      tenderDetails: {
        requestType: 'single',
        quotationFor: '',
        closingDate: null,
        budget: '',
        description: '',
        validityOfQuotation: '',
        periodTypes: 'Days',
        warranty: 'Contractor to Propose',
        warrantyNum: '',
        payment: 'Progressive',
        paymentNum: '',
        deliveryStart: null,
        deliveryComplete: null,
      },
      vendorsInvitation: {
        requireVisit: true,
        dateTime: '',
        name: '',
        phone: '',
        email: '',
        shouldContact: true,
        tenderType: 'open',
        inviteVendorsFromAvl: {},
        inviteVendorsNotFromAvl: [],
      },
      itemRequired: {
        list: [],
      },
    }),
    [],
  );

  const onCompleted = () => {
    window.location = '/tenders';
  };

  const onError = error => {
    // eslint-disable-next-line no-console
    console.log('error: ', error);
  };

  // eslint-disable-next-line no-unused-vars
  const [createTender] = useMutation(CREATE_tender, {
    onCompleted,
    onError,
  });

  // const submit = () => {
  //   if (formikRef.current) {
  //     formikRef.current.submitForm();
  //   }
  // };

  const prevStep = () => {};

  const nextStep = () => {};

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (values, actions) => {
    // console.log('handleSubmit');
    // if (tabIndex !== maxIndex) return false;
    // const { tender } = values;
    // createTender({
    //   variables: {
    //     tenderAttributes: {
    //       // step 1
    //       requestType: tender.requestType,
    //       quotationFor: tender.quotationFor,
    //       closingDate: tender.closingDate,
    //       budget: tender.budget,
    //       description: tender.description,
    //       validityOfQuotation: tender.validityOfQuotation,
    //       periodTypes: tender.periodTypes,
    //       warranty: tender.warranty,
    //       warrantyNum: tender.warrantyNum,
    //       payment: tender.payment,
    //       paymentNum: tender.paymentNum,
    //       deliveryStart: tender.deliveryStart,
    //       deliveryComplete: tender.deliveryComplete,
    //       // step 2
    //       requireVisit: tender.requireVisit,
    //       dateTime: tender.dateTime,
    //       name: tender.name,
    //       phone: tender.phone,
    //       email: tender.email,
    //       shouldContact: tender.shouldContact,
    //       tenderType: tender.tenderType,
    //       verdorList: tender.verdorList,
    //     },
    //   },
    // });
  };

  return (
    <Formik enableReinitialize initialValues={tender} validationSchema={validationSchema[currentTab]}>
      {() => {
        return (
          <Form>
            <TabPanel value={currentTab} index={0} dir={theme.direction} className={classes.tabpanel}>
              <TenderDetails nextStep={nextStep} />
            </TabPanel>

            <TabPanel value={currentTab} index={1} dir={theme.direction} className={classes.tabpanel}>
              <VendorsInvitation prevStep={prevStep} nextStep={nextStep} />
            </TabPanel>

            <TabPanel value={currentTab} index={2} dir={theme.direction} className={classes.tabpanel}>
              <ItemsRequired prevStep={prevStep} nextStep={nextStep} />
            </TabPanel>
            <TabPanel value={currentTab} index={3} dir={theme.direction} className={classes.tabpanel}>
              <ReviewPublish prevStep={prevStep} nextStep={nextStep} />
            </TabPanel>
          </Form>
        );
      }}
    </Formik>
  );
};

TenderForm.propTypes = {
  currentTab: PropTypes.number.isRequired,
};

export default TenderForm;
