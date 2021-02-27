import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  left: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },

  avlLeft: {
    borderRadius: '4px 4px 0px 0px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

    '& .MuiCardHeader-content': {
      maxWidth: '100%',
    },
  },

  cardContentListAvl: {
    flexBasis: 1,
    flexGrow: 1,
    padding: '0 !important',
    overflow: 'hidden',

    [theme.breakpoints.down('sm')]: {
      flexBasis: 'auto',
      height: 400,
      overflow: 'auto',
    },
  },

  listAvl: {
    height: '100%',
    overflow: 'auto',
  },

  leftTitle: {
    alignItems: 'center',
    display: 'flex',

    '& > span': {
      flexBasis: 1,
      flexGrow: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },

  listVendor: {
    height: 400,
    overflow: 'auto',
  },

  avlRight: {
    borderRadius: '0px 4px 4px 0px',
    height: '100%',
  },

  avlWrapper: {
    marginTop: theme.spacing(3),
  },

  seachAvl: {
    alignItems: 'center',
    padding: theme.spacing(2),
    display: 'flex',
  },

  searchIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(2),
  },

  searchInput: {
    '& .MuiInput-input': {
      padding: 0,
    },
  },

  inviteAvlActions: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: `${theme.spacing(2)}px 0`,
    padding: `0 ${theme.spacing(2)}px`,
  },

  p0: {
    padding: '0 !important',
  },

  displayFlex: {
    display: 'flex',
  },

  alignItemsCenter: {
    alignItems: 'center',
  },

  mr1: {
    marginRight: theme.spacing(1),
  },
}));
