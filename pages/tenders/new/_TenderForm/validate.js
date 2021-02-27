import * as Yup from 'yup';

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

Yup.addMethod(Yup.object, 'uniqueProperty', function(propertyName, message) {
  return this.test('unique', message, function(value) {
    if (!value || !value[propertyName]) {
      return true;
    }

    if (
      this.parent
        .filter(v => v !== value)
        .some(v => v[propertyName].toLowerCase() === value[propertyName].toLowerCase())
    ) {
      throw this.createError({
        path: `${this.path}.${propertyName}`,
      });
    }

    return true;
  });
});

export const tenderDetailsValidation = Yup.object().shape({
  tenderDetails: Yup.object().shape({
    requestType: Yup.string().required(),
    quotationFor: Yup.string().required('Please fill in the name of your tender package here.'),
    closingDate: Yup.string().required('Tender closing date is required'),
    budget: Yup.number()
      .required('Tender budget date is required')
      .nullable(),
    description: Yup.string().required('Description is required'),
    validityOfQuotation: Yup.number()
      .required('Validity of Quotation is required')
      .nullable(),
    periodTypes: Yup.string().required('Please choose'),
    warranty: Yup.string().required('Warranty is required'),
    warrantyNum: Yup.number()
      .nullable()
      .when('warranty', val => {
        return val === 'Months' || val === 'Years'
          ? Yup.number()
              .required('Required!')
              .nullable()
          : Yup.number().nullable();
      }),
    payment: Yup.string().required('Payment Terms is required'),
    paymentNum: Yup.number()
      .nullable()
      .when('payment', val => {
        return val === 'Days'
          ? Yup.number()
              .required('Required!')
              .nullable()
          : Yup.number().nullable();
      }),
    deliveryStart: Yup.string().required('Delivery Start date is required'),
    deliveryComplete: Yup.string().required('Delivery Complete date is required'),
  }),
});

export const vendorInvitationValidation = Yup.object().shape({
  vendorsInvitation: Yup.object().shape({
    requireVisit: Yup.boolean().required('Required'),
    dateTime: Yup.string().when('requireVisit', {
      is: true,
      then: Yup.string().required('Required.'),
    }),
    name: Yup.string().when('requireVisit', {
      is: true,
      then: Yup.string().required('Required.'),
    }),
    phone: Yup.string().when('requireVisit', {
      is: true,
      then: Yup.string()
        .matches(phoneRegExp, 'Invalid phone number')
        .required('Required.'),
    }),
    email: Yup.string()
      .email('Invalid email')
      .when('requireVisit', {
        is: true,
        then: Yup.string().required('Required.'),
      }),
    tenderType: Yup.string().required(),
  }),
  other: Yup.object().shape({
    companyEmail: Yup.string().email('Invalid email'),
  }),
});

export const itemsRequiredValidation = Yup.object().shape({
  item: Yup.object().shape({
    category: Yup.string(),
    name: Yup.string().required('Required.'),
    quanity: Yup.number()
      .required('Required.')
      .nullable(),
    unit: Yup.string().required('Required.'),
    note: Yup.string(),
    isMandatory: Yup.boolean(),
    // specifications: Yup.array().of(Yup.object().shape({
    //   id: Yup.string().required('Required.'),
    //   key: Yup.string().required('Required.'),
    //   value: Yup.string().required('Required.')
    // }).uniqueProperty('key', 'Duplicate.'))
    specifications: Yup.array().of(
      Yup.object()
        .shape(
          {
            id: Yup.string().required('Required.'),
            key: Yup.string().when('value', {
              is: '',
              then: Yup.string(),
              otherwise: Yup.string().required('Required.'),
            }),
            value: Yup.string().when('key', {
              is: '',
              then: Yup.string(),
              otherwise: Yup.string().required('Required.'),
            }),
          },
          ['key', 'value'],
        )
        .uniqueProperty('key', 'Duplicate.'),
    ),
  }),
});

export default () => null;
