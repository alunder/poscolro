import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    fontSize: '14px',
    marginBottom: theme.spacing(2),
  },
  cardPadding: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  avatar: {
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
  button: {
    color: '#36b0c9',
    float: 'right',
    margin: theme.spacing(2),
  },
}));
