import palette from '../palette';

export default {
  root: {
    '&:hover $notchedOutline': {
      borderColor: palette.secondary.dark,
    },
    '&$focused $notchedOutline': {
      borderColor: palette.secondary.main,
    },
  },
  notchedOutline: {
    borderColor: 'rgba(0,0,0,0.15)',
  },
};
