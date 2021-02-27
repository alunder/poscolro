/* eslint-disable */
import React, { useState, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Item from './_Item';

const CREATE_tender = gql`
  mutation createTender($tenderAttributes: TenderAttributes!) {
    createTender(attributes: $tenderAttributes) {
      id
    }
  }
`;
const useStyles = makeStyles({
  root: {
    margin: 0,
  },
  tabpanel: {
    width: '100%',
    '& >div': {
      padding: '0 !important',
      marginTop: '24px',
    },
  },
  form: {
    display: 'flex',
  },
});

const ProductForm = () => {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const maxIndex = 3;
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  const formikRef = useRef();
  const product = {
    type: 'product',
    // For product
    name: '',
    brand: '',
    model: '',
    sku: '',
    description: '',
    warrantyperiodTypes: 'Years',
    leadperiodTypes: 'Years',
    warrenty: '1',
    warrantyNum: 0,
    leadTime: null,
    // For service
    serviceName: '',
    serviceScope: '',
  };

  const ItemValidation = Yup.object().shape({
    product: Yup.object().shape({
      // For Product.
      type: Yup.string().required(),
      name: Yup.string().required('Please fill in the name of your product here.'),
      description: Yup.string().required('Description is required'),
      warrantyperiodTypes: Yup.string().required('Please choose'),
      leadperiodTypes: Yup.string().required('Please choose'),

      // For service
      serviceName: Yup.string().required('Please fill in the service name here.'),
      serviceScrope: Yup.string().required('Please fill in the scope of service here.'),

    }),
  });

  const schemaArray = [ItemValidation];

  const onCompleted = () => {
    window.location = '/tenders';
  };
  const onError = (error, data) => {
    console.log('error');
  };
  const [createTender, { loading, data, error }] = useMutation(CREATE_tender, {
    onCompleted,
    onError,
  });
  const submit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };

  const prevStep = props => {
    // Prev Step isn't under 0
    setTabIndex(Math.max(tabIndex - 1, 0));
    props.setSubmitting(false);
    props.setTouched({});
  };

  const addProduct = props => {
    // Prev Step isn't under 0
    console.log(' am here', props)
  };

  const handleSubmit = (values, actions) => {
    console.log('handle submit');
    return;
    if (tabIndex !== maxIndex) return false;
    const { product } = values;
    createTender({
      variables: {
        tenderAttributes: {
          type: product.type,
          name: product.name,
          brand: product.brand,
          model: product.model,
          sku: product.sku,
          description: product.description,
          warrantyperiodTypes: product.warrantyperiodTypes,
          leadperiodTypes: product.leadperiodTypes,
          warrenty: product.warrenty,
          warrantyNum: product.warrantyNum,
          leadTime: product.leadTime
        },
      },
    });
  };

  return (
    <React.Fragment>
      <Formik
        ref={formikRef}
        initialValues={{ product: product }}
        validationSchema={schemaArray[tabIndex]}
        onSubmit={handleSubmit}
        render={props => {
          const { handleSubmit } = props;
          return (
            <Form onSubmit={handleSubmit} className={classes.form}>
              <Grid className={classes.root} container spacing={2}>
                <Grid  className={classes.tabpanel}>
                  <Item {...props} addProduct={addProduct}/>
                </Grid>

               </Grid>
            </Form>
          );
        }}
      />
    </React.Fragment>
  );
};

export default ProductForm;
