import palette from '../palette';

export default {
  contained: {
    boxShadow: '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
    backgroundColor: '#FFFFFF',
  },
  containedPrimary: {
    color: palette.white,
    backgroundColor: palette.really.blue,
    '&:hover': {
      backgroundColor: palette.really.blue,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: palette.really.blue,
      },
    },
  },
  /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
  containedSizeLarge: {
    // fontSize: 14,
  },
};
