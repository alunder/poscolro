import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
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
}));
