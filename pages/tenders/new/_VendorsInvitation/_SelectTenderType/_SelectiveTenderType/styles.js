import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  selectiveTender: {
    marginTop: theme.spacing(2),
  },

  inforBar: {
    alignItems: 'center',
    background: 'linear-gradient(0deg, rgba(54, 176, 201, 0.1), rgba(54, 176, 201, 0.1)), #FFFFFF',
    border: '1px solid #36B0C9',
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    marginTop: theme.spacing(1.5),
    padding: '6px 16px',
    width: '100%',
  },

  inforBarIcon: {
    fontSize: 20,
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },

  inforBarMessage: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: '8px 0',
  },

  avlLeft: {
    borderRadius: '4px 4px 0px 0px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },

  cardContentListAvl: {
    flexBasis: 1,
    flexGrow: 1,
    padding: '0 !important',
    overflow: 'hidden',
  },

  listAvl: {
    height: '100%',
    overflow: 'auto',
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

  h100: {
    height: '100%',
  },

  flexGrow: {
    flexBasis: 1,
    flexGrow: 1,
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
