/* eslint-disable */
import React, {useState} from 'react';
import clsx from 'clsx';
import uuid from 'uuid/v4';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from 'formik-material-ui';
import { Field } from 'formik';
import FormField from 'components/FormField';
import FormFieldWithSelect from 'components/FormFieldWithSelect';
import AddIcon from '@material-ui/icons/Add';
import RichEditor from 'components/RichEditor';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Card, CardContent, CardHeader, Grid, Divider, Typography, FormGroup, MenuItem, Button } from '@material-ui/core';

const DefaultField = props => <Field fullWidth variant="outlined" margin="dense" {...props} />;

const useStyles = makeStyles(theme => ({
  root:{
    '@global .MuiCardContent-root:last-child': {
      paddingBottom: '21px',
    }
  },
  marginTop30: {
    marginTop: '30px',
  },
  cardPadding: {
    padding: `15px ${theme.spacing(3)}px 21px ${theme.spacing(3)}px`,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  padding: {
    marginTop: '4px',
    marginBottom: '4px',
  },
  serviceDescription:{
    fontSize: '12px',
    color: '#66788a',
    paddingLeft: theme.spacing(2),
  },
  noRightBorder: {
    [`& fieldset`]: {
      borderRight: 0,
    },
  },
  noRightRadius: {
    [`& fieldset`]: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  noLeftRadius: {
    [`& fieldset`]: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
  formControlLabel: {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: 1.71,
    color: '#263238',
    borderBottom: "1px solid #E6E6E6",
  },
  svgColor: {
    '& >svg': {
      color: '#484542',
    },
  },
  cardTitle: {
    color: '#2d2a26',
    fontWeight: 500,
    '& >span': {
      color: '#90a4ae',
      fontSize: '12px',
      lineHeight: 1.71,
      fontWeight: 'normal',
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      '& >span': {
        display: 'block',
        marginLeft: 0
      }
    },
  },
  specValue: {
    maxWidth: '95%',
    [theme.breakpoints.only('sm')]: {
      maxWidth: '90%',
    },
    [theme.breakpoints.only('xs')]: {
      maxWidth: '83%',
    },
  },
  specField: {
    '& > p': {
      color: '#e53935',
    }
  },
  editorWrapper:{
    margin: '18px 0px'
  },
  iconDelete: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    float: 'right',
    // '&:hover': {
    //   backgroundColor: 'red',
    //   color: 'yellow'
    // }
  },
  marginDense: {
    marginTop: 0,
    marginBottom: 0,
  },
}));



const Item = props => {
  const { values, nextStep, setFieldValue, errors } = props;
  const periodTypes = ['Days', 'Weeks', 'Months', 'Years'];
  const [specifications, setSpecifications] = useState([
    {
      id: uuid(),
      key: '',
      value: ''
    }
  ]);

  const classes = useStyles();
  const handleChangeSpecs = (target, id) => {
    const { name, value } = target;
    const index = specifications.findIndex(s => s.id === id);
    if (index !== -1) {
      const updatedSpec = specifications[index];
      updatedSpec[name] = value;
      setSpecifications([
        ...specifications.slice(0, index),
        updatedSpec,
        ...specifications.slice(index + 1)
      ])
      setFieldValue('item.specifications', specifications)
    }
  }

  const addAnotherLine = () => {
    setSpecifications([
      ...specifications,
      {
        id: uuid(),
        key: '',
        value: ''
      }
    ])
    setFieldValue('item.specifications', specifications)
  }
  const specsErrors = errors && errors.item && errors.item.specifications
   
  let placeholder =
  `Product Description

A Brief Description of your product and product specifications.`;

  return (
    <>
    <Card className={clsx(classes.root, classes.marginTop30)}>
    <CardHeader title="Product Details" />
    <Divider />
        <CardContent className={classes.cardPadding}>
            <Grid container>
            <Grid item md={12} xs={12}>
                <Grid item md={4} xs={12}>
                <FormField
                    label="Name of product"
                    name="product.name"
                    rows="1"
                    caption=" "
                    multiline
                    fullWidth={true}
                />
                </Grid>
            </Grid>
            <Grid item md={12} xs={12}>
                <Grid item md={4} xs={12}>
                <FormField
                    label="Brand"
                    name="product.brand"
                    rows="1"
                    multiline
                    caption="Optional"
                    fullWidth={true}
                />
                </Grid>
            </Grid>
            <Grid item md={12} xs={12}>
                <Grid item md={4} xs={12}>
                <FormField
                    label="Model"
                    name="product.model"
                    rows="1"
                    multiline
                    caption="Optional"
                    fullWidth={true}
                />
                </Grid>
            </Grid>
            <Grid item md={12} xs={12}>
                <Grid item md={4} xs={12}>
                <FormField
                    label="SKU"
                    name="product.sku"
                    rows="1"
                    multiline
                    caption="Optional"
                    fullWidth={true}
                />
                </Grid>
            </Grid>
            <Grid item md={12} xs={12}>
                <Grid item md={12} xs={12}>
                <RichEditor placeholder={placeholder} className={classes.editorWrapper}/>
                </Grid>
            </Grid>
            <Grid item md={12} xs={12}>
            <Grid item md={4} xs={12}>
                <FormFieldWithSelect
                    label="Product warranty"
                    name="product.warranty"
                    subLabel="period"
                    subName="product.warrantyPeriod"
                    caption="Optional"
                    periodTypes={periodTypes}
                    fullWidth
                />
                </Grid>
            </Grid>
            <Grid item md={12} xs={12}>

            <Grid item md={4} xs={12}>
                <FormFieldWithSelect
                    label="Lead Time"
                    name="product.leadTime"
                    subLabel="period"
                    subName="product.leadPeriod"
                    fullWidth
                    caption="Optional"
                    periodTypes={periodTypes}
                />
            </Grid>
            </Grid> 
            </Grid>
        </CardContent>
    </Card>
  </>
  );
};

export default Item;
