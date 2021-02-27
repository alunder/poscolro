import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Container,
  Typography,
  Grid,
  Icon,
  Divider,
  TextareaAutosize,
  Box,
  Button,
} from '@material-ui/core';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // width: "75%"
  },
  editProfilebutton: {
    marginTop: theme.spacing(1),
    float: 'right',
  },
  formLabelWhite: {
    background: "#FFFFFF",
    boxShadow: "0px 1px 0px #EEEEEE",
  },
  formLabelGray: {
    background: "#F5F6F8",
    // transform: "matrix(1, 0, 0, -1, 0, 0)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "-0.05px",
    color: "#37474F",
  },
  required: {
    padding: theme.spacing(2),
    textAlign: "left",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "-0.05px",
    color: "#37474F",
  },
  labelIcon: {
    textAlign: "right",
  },
  divider: {
    marginBottom: '25px',
    marginTop: '15px',
  },
  content: {
    backgroundColor: "#F5F6F8",
    height: '100px',
    margin: '10px',
    padding: '5px',
    width: 'inherit',
  }
}));

const RenderFields = props => {
  const classes = useStyles();
  const { field, formLabelColor, required, value } = props;
  return (
    <React.Fragment>
      <Grid container className={formLabelColor ? classes.formLabelWhite : classes.formLabelGray}>
        <Grid item xs={4}>
          <Typography className={classes.paper}>{field}</Typography>
        </Grid>
        <Grid item xs={6}>
          <ValueField value={value} />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const ValueField = props => {
  const classes = useStyles();
  const { value } = props;

  return <Typography className={classes.required}>{value}</Typography>
}

const ProfileInfo = props => {
  const classes = useStyles();

  const profileInformation = [{
    field: 'Vendor Category',
    required: true,
    formLabelColor: false,
    value: "Required",
  },{
    field: 'First Name',
    required: true,
    formLabelColor: true,
    value: "Required",
  },{
    field: 'Last Name',
    required: true,
    formLabelColor: false,
    value: "Required",
  },{
    field: 'Email Address',
    required: false,
    formLabelColor: true,
    value: 'janedoe@123company.sg',
  },{
    field: 'Contact Number',
    required: true,
    formLabelColor: false,
    value: "Required",
  },{
    field: 'Position',
    required: true,
    formLabelColor: true,
    value: "Required",
  },{
    field: 'Company Name',
    required: true,
    formLabelColor: false,
    value: "Required",
  },{
    field: 'UEN',
    required: true,
    formLabelColor: true,
    value: "Required",
  },{
    field: 'Address',
    required: true,
    formLabelColor: false,
    value: "Required",
  }];

  return (
    <div className={classes.root}>
      <Grid container className={classes.formLabelWhite}>
        <Grid item xs={4}>
          <Typography variant="h1" className={classes.paper}>Profile Information</Typography>
        </Grid>
      </Grid>

      {profileInformation.map((item, key) => 
        <RenderFields key={key} {...item} />
      )}

      <Divider className={classes.divider} />

      <Grid container 
        justify="flex-start"
        alignItems="flex-start"
        className={classes.formLabelWhite}>
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.paper}>About us</Typography>
          <Divider variant="middle" />
        </Grid>
        <Divider variant="inset" />
        <Grid item className={classes.content}>
          <Box component="div" >
            <Typography variant="body" >Sample about us</Typography>
          </Box>
        </Grid>
      </Grid>     
      
      <Box component="div">
        <Button variant="contained" className={classes.editProfilebutton} color="primary">
          EDIT PROFILE
        </Button>
      </Box>
      
    </div>
  )
}
export default ProfileInfo;