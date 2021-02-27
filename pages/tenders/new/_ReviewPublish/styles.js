import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    fontSize: '14px',
    marginBottom: theme.spacing(2),
  },
  bigSpan: {
    fontWeight: 500,
    fontSize: '20px',
  },
  cardPadding: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  budgetDetails: {
    alignItems: 'center',
  },
  headerTypo: {
    display: 'inline-block',
    margin: '32px 32px 0 8px',
    '& p': {
      fontSize: '12px',
      display: 'inline-block',
      marginLeft: '8px',
    },
  },
  verticalCenter: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  tenderInfo: {
    '& div': {
      marginBottom: theme.spacing(3),
    },
    '& p': {
      margin: 0,
    },
    '& span': {
      fontSize: '14px',
      display: 'inline-block',
      marginBottom: theme.spacing(1),
    },
  },
  tenderTerm: {
    display: 'flex',
    fontSize: '14px',
    fontWeight: 'normal',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    '& >div': {
      padding: '0px 16px',
      width: '33.33%',
      borderLeft: '5px solid #36B0C9',
      '& >p': {
        margin: 0,
        color: '#90A4AE',
      },
      '& >span': {},
    },
  },
  deliveryDate: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      '& li': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
  arrow: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  avatar: {
    backgroundColor: '#EBF7FA',
    '& >svg': {
      color: '#484542',
    },
  },
  contactDetails: {
    marginLeft: theme.spacing(2),
    '& p': {
      margin: 0,
    },
  },
  gridListContainer: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: '4px',
    },
  },
  // temp classes from _ItemsRequired
  avatar2: {
    backgroundColor: theme.palette.really.blue,
    width: 44,
    height: 44,
    fontSize: '14px',
    [theme.breakpoints.down('xs')]: {
      width: 40,
      height: 40,
    },
  },
  itemInfo: {
    maxWidth: '70%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '40%',
    },
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(1),
    },
    '& >p': {
      fontSize: '16px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px',
      },
      fontWeight: 500,
      margin: 0,
      '& >span': {
        fontSize: '12px',
        fontWeight: 'normal',
        [theme.breakpoints.down('xs')]: {
          fontSize: '11px',
        },
      },
    },
  },
  alignRight: {
    textAlign: 'right',
  },
  mandotary: {
    fontSize: '11px',
    fontWeight: 500,
    borderRadius: '4px',
    backgroundColor: '#B4BBC8',
    padding: '3px 10px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '10px',
    },
  },
  category: {
    color: '#90A4AE',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  itemSpecs: {
    color: '#90A4AE',
    fontSize: '11px',
    margin: 0,
    fontWeight: 500,
  },
  specsContainer: {
    '& span': {
      marginTop: theme.spacing(2),
      display: 'inline-block',
    },
  },
  cardHeader: {
    paddingTop: '24px',
    [theme.breakpoints.down('xs')]: {
      padding: '16px',
    },
  },
  bottom: {
    display: 'flex',
    justifyContent: 'center',
    margin: '16px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  supply: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      wordSpacing: '2px',
    },
  },
}));
