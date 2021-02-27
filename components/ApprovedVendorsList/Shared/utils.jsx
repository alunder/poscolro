/* eslint-disable import/prefer-default-export */

export const getScrollStyle = () => ({
  '&::-webkit-scrollbar': {
    width: '0.6rem',
  },
  '&::-webkit-scrollbar-track': {
    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
    outline: '1px solid slategrey',
  },
});
