import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  vendorInvited: {
    marginTop: theme.spacing(2.5),
  },

  listOverflow: {
    overflow: 'auto',
    width: '100%',
  },

  list: {
    minWidth: 1200,
    width: '100%',

    '& .MuiListItem-secondaryAction': {
      paddingRight: theme.spacing(10),
    },
  },

  chip: {
    borderRadius: 0,
    marginRight: theme.spacing(1),
  },

  item: {
    flexWrap: 'wrap',
  },
}));
