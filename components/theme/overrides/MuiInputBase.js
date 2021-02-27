import palette from '../palette';

export default {
  root: {},
  input: {
    height: 'auto',
    fontSize: '14px',
    '&::placeholder': {
      opacity: 1,
      color: palette.text.secondary,
    },
  },
};
