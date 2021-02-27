import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
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
  noPaddingLeft: {
    paddingLeft: '0 !important',
  },
  noPaddingRight: {
    paddingRight: '0 !important',
  },
  thinRightBorder: {
    [`& fieldset`]: {
      borderRightWidth: 0.5,
      borderRightColor: 'rgba(0,0,0,0.06)',
    },
  },
  thinLeftBorder: {
    [`& fieldset`]: {
      borderLeftWidth: 0.5,
      borderLeftColor: 'rgba(0,0,0,0.06)',
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
  svgColor: {
    '& >svg': {
      color: '#484542',
    },
  },
  cardPadding: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
}));
