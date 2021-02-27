/* eslint-disable */
import React from 'react';
import clsx from 'clsx';
import { Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from 'formik-material-ui';
import FormField from 'components/FormField';
import RichEditor from 'components/RichEditor';
import { Card, CardContent, CardHeader, Grid, Divider, Typography, FormGroup, MenuItem} from '@material-ui/core';

const DefaultField = props => <Field fullWidth variant="outlined" margin="dense" {...props} />;

const useStyles = makeStyles(theme => ({
  marginTop30: {
    marginTop: '30px',
  },
  cardPadding: {
    padding: `12px ${theme.spacing(3)}px`,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  serviceDescription:{
    fontSize: '12px',
    color: '#66788a',
    paddingLeft: theme.spacing(2),
  },
    editorWrapper:{
    margin: '4px 0px 8px 0px'
  },
}));



const Item = props => {
  const { values, nextStep, setFieldValue } = props;
  const classes = useStyles();

  let placeholder =
  `Scope of Work

A Brief Description or breakdown of your service.`;

  return (
    <>
    <Card className={clsx(classes.root, classes.marginTop30)}>
    <CardHeader title="Service Details" />
    <Divider />
        <CardContent className={classes.cardPadding}>
            <Grid container>
        
            <Grid item md={12} xs={12}>
                <Grid item md={4} xs={12}>
                <FormField
                    label="Name of service"
                    name="product.serviceName"
                    rows="1"
                    multiline
                    fullWidth={true}
                />
                </Grid>
            </Grid>
            <Grid item md={12} xs={12}>
                <Grid item md={12} xs={12}>
                <RichEditor placeholder={placeholder} className={classes.editorWrapper}/>
                </Grid>
            </Grid> 
            </Grid>
        </CardContent>
    </Card>
   </>
  );
};

export default Item;
