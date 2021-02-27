/* eslint-disable */
import React, { useState } from 'react';
import clsx from 'clsx';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import DocumentUpload from 'components/DocumentUpload';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Cascader from 'components/Cascader';
import ServiceCard from './_ItemWithService';
import ProductCard from './_ItemWithProduct';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Card, CardContent, CardHeader, Grid, Divider, Typography, Button, InputAdornment, ClickAwayListener, Hidden} from '@material-ui/core';
import data from '../new/categories.json';

const level1 = data.filter(c => c.level === 1);
const level2 = data.filter(c => c.level === 2);
const level3 = data.filter(c => c.level === 3);

const DefaultField = props => <Field fullWidth variant="outlined" margin="dense" {...props} />;

const useStyles = makeStyles(theme => ({
  root: {
    padding: '8px',
    fontSize: '14px',
  },
  marginTop30: {
    marginTop: '30px',
  },
  marginDense: {
    marginTop: 0,
    marginBottom: 0,
  },
  marginTop: {
    marginTop: theme.spacing(1),
  },
  checked: {},
  cardTitle: {
    color: '#2d2a26',
    fontSize: '16px',
    lineHeight: 1.25,
    fontWeight: 500,
    '& >span': {
      color: '#90a4ae',
      fontSize: '14px',
      lineHeight: 1.71,
      fontWeight: 'normal',
      marginLeft: theme.spacing(2),
    },
  },
  span: {
    color: '#90a4ae',
    fontSize: '12px',
    lineHeight: 1.71,
    fontWeight: 'normal',
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
  paddingTop24: {
    paddingTop: theme.spacing(3),
  },
  option: {
  display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    width: '50%',
    '& + &': {
      marginLeft: theme.spacing(3),
    },
    border: 'solid 1px #dedede',
    borderRadius: '4px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '& + &': {
        marginLeft: 0,
        marginTop: theme.spacing(2),
      },
    },
  },
  selectedOption: {
    // backgroundColor: colors.grey[50]
  },
  optionRadio: {
    margin: -10,
  },
  optionDetails: {
    marginLeft: theme.spacing(2),
    '& >h5': {
      fontSize: '14px',
    },
    '& >p': {
      fontSize: '12px !important',
    },
  },
  displayFlex: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  svgColor: {
    '& >svg': {
      color: '#484542',
    },
  },
  cardPadding: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  serviceDescription:{
    fontSize: '12px',
    color: '#66788a',
    paddingLeft: theme.spacing(2),
  },
  submitButton: {
    lineHeight: '24px',
    color: 'white',
    backgroundColor: '#36B0C9',
    boxShadow: '1px 2px 3px rgba(0, 0, 0, 0.5)',
    margin: '24px',
    minWidth: '270px',
    marginRight: '0px',
    marginLeft: '0px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white,
    },
  },
  submitButtonWrapper:{
    marginTop: '0px !important',
    display: 'flex',
    placeContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      placeContent: 'center'
    }
  }
}));

const requestTypeOptions = [
  {
    value: 'product',
    title: 'Product',
    description: 'Upload a product to my catalogue',
  },
  {
    value: 'service',
    title: 'Service',
    description: 'Upload a service to my catalogue',
  },
];

const Item = props => {
  const { values, addProduct, setFieldValue,setFieldError, ...rest } = props;
  const classes = useStyles();
  console.log('values', values)
  const [category, setCategory] = useState('');
  const [open, setOpen] = useState(false);

  const [completeSelect, setCompleteSelect] = useState(false);
  const [categoryObj, setCategoryObj] = useState({});


  const onChangeCategory = ({ lv1, lv2, lv3 }) => {
    changeSelected({
      lv1,
      lv2,
      lv3
    })
    const category = `${lv1 && !!lv1.name ? `${lv1.name}` : ''}${lv2 && !!lv2.name ? ` > ${lv2.name}` : ''}${lv3 && !!lv3.name ? ` > ${lv3.name}` : ''}`
    setCategory(category)
    setFieldValue('item.category', category)
    setCategoryObj({
      lv1,
      lv2,
      lv3
    })
  }
  const [selected, changeSelected] = useState({});

  const handleClickAway = () => {
    if (completeSelect) {
      setOpen(false);
      setFieldError('item.category', null)
    } else {
      setFieldError('item.category', 'Please complete selecting the category')
    }
  };

  const getCompleteStatus = isCompleted => {
    setCompleteSelect(isCompleted)
  }

  return (
    <>
      <Card className={classes.root}>
        <CardHeader title="Item Type" />
        <Divider />
        <CardContent className={classes.cardPadding}>
          <Grid container spacing={2}>
            <Grid className={classes.displayFlex} item md={9} xs={12}>
              {requestTypeOptions.map(option => (
                <div
                  className={clsx(classes.option, {
                    [classes.selectedOption]: values.product.type === option.value,
                  })}
                  key={option.value}
                >
                  <Radio
                    checked={values.product.type === option.value}
                    className={classes.optionRadio}
                    onChange={() => setFieldValue('product.type', option.value)}
                  />
                  <div className={classes.optionDetails}>
                    <Typography gutterBottom variant="h5">
                      {option.title}
                    </Typography>
                    <Typography variant="body1">{option.description}</Typography>
                  </div>
                </div>
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </Card> 
      <Card className={classes.root}>
        <CardHeader title="Select Category" />
        <Divider />
        <CardContent className={classes.cardPadding}>
          <Grid container spacing={2}>
            <Grid className={classes.displayFlex} item md={12} xs={12}>
            <Grid item md={7} xs={12}>
              <DefaultField
                onClick={!open ? () => setOpen(true) : handleClickAway}
                className={classes.marginDense}
                label="Select Category"
                autoComplete='off'
                name="item.category"
                component={TextField}
                InputProps={{
                  value: category,
                  endAdornment: (
                    <InputAdornment position="end">
                      <ArrowDropDownIcon />
                    </InputAdornment>
                  ),
                  className: classes.hideBlinking
                }}
              />
            </Grid>
            </Grid>
            {
              open &&
              <ClickAwayListener onClickAway={handleClickAway}>
                <Grid item md={12} xs={12} >
                  <Cascader level1={level1} level2={level2} level3={level3} onChangeCategory={onChangeCategory} selected={selected} getCompleteStatus={getCompleteStatus} completeStatus={completeSelect} />
                </Grid>
              </ClickAwayListener>
            }
          </Grid>
        </CardContent>
      </Card> 
      {
        values.product.type === 'product' && 
        // <ServiceCard setFieldValue={setFieldValue} {...rest}/>

          <ProductCard setFieldValue={setFieldValue} {...rest}/>
      }

      {
        values.product.type === 'service' && 
          <ServiceCard setFieldValue={setFieldValue} {...rest}/>
      }   

      <Card className={clsx(classes.root, classes.marginTop30)}>
        <CardHeader
          title={
            <>
            <Typography className={classes.cardTitle}>
              Upload Images or portfolio
           <Hidden smDown>
           <span>Optional</span>
             </Hidden> 
            </Typography>
            <Hidden mdUp>
           <span className={classes.span}>Optional</span>
             </Hidden> 
            </>
          }
        />

        <Divider />

        <CardContent className={classes.cardPadding}>
        <Grid item lg={12}>
          <DocumentUpload/>        
        </Grid>
        </CardContent>
      </Card>
      <Grid className={classes.submitButtonWrapper}>
      <Button handleClick={rest.handleSubmit} className={classes.submitButton}>
          ADD ITEM TO CATALOGUE
      </Button>
      </Grid>
    </>
  );
};

export default Item;
