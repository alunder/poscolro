import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  overflowVisible: {
    overflow: 'visible',
  },
  root: {
    fontSize: '14px',
  },
  marginTop30: {
    marginTop: '30px',
  },
  marginDense: {
    marginTop: 0,
    marginBottom: 0,
  },
  formControlLabel: {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: 1.71,
    color: '#263238',
  },
  radio: {
    '&$checked': {
      color: '#36b0c9',
    },
  },
  checked: {},
  btnPlus: {
    color: '#36b0c9',
    float: 'right',
    cursor: 'pointer',
    margin: '5px',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: 1.71,
  },
  svgIcon: {
    verticalAlign: 'middle !important',
  },
  verticalCenter: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  listRoot: {
    width: '100%',
    [`& p`]: {
      color: '#90a4ae',
    },
  },
  inline: {
    display: 'inline',
  },
  listAvatar: {
    backgroundColor: '#36b0c9',
  },
  iconCheck: {
    color: '#36b0c9',
    marginRight: '5px',
  },
  maxWidth20: {
    maxWidth: '20%',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  option: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    width: '50%',
    '& + &': {
      marginLeft: theme.spacing(2),
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
  emptyList: {
    textAlign: 'center',
    color: '#90a4ae',
    padding: '15px 0px 5px',
    '& >span': {
      display: 'block',
    },
  },
  inviteVendors: {
    marginTop: '16px',
    padding: '16px',
    width: '100%',
    border: 'solid 1px #dedede',
    borderRadius: '4px',
    '& >span': {
      fontWeight: '500',
    },
  },
  smallText: {
    fontWeight: 'normal !important',
    fontSize: '12px',
    lineHeight: '18px',
    marginLeft: '10px',
    color: '#90A4AE',
  },
  vendorInput: {
    marginTop: '20px',
    '& + &': {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      '& + &': {
        marginLeft: 0,
      },
    },
  },
  button: {
    minWidth: '70px',
    marginTop: theme.spacing(1),
  },
  cardPadding: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
}));
