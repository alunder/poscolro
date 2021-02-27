import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    fontSize: '14px',
  },
  marginDense: {
    marginTop: 0,
    marginBottom: 0,
  },
  radio: {
    '&$checked': {
      color: '#36b0c9',
    },
  },
  checked: {},
  cardPadding: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  selected: {
    '& > div': {
      color: '#36B0C9',
      '& > span': {
        color: '#36B0C9',
      },
    },
  },
  hideBlinking: {
    '& > input': {
      '&:focus': {
        outline: 'none',
      },
      caretColor: 'transparent',
    },
  },
  colorGrey: {
    color: '#2d2a26',
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
        marginLeft: 0,
      },
    },
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
    },
  },
}));
