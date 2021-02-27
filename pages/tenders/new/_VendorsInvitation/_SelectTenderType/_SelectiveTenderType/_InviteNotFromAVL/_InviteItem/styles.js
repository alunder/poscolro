const reactAutosuggest = '.react-autosuggest';

export default theme => ({
  autoSuggest: {
    position: 'relative',
  },

  suggestList: {
    background: '#FFFFFF',
    boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14)',
    borderRadius: 4,
    maxHeight: 300,
    overflow: 'auto',
    position: 'absolute',
    top: 55,
    width: '100%',
    zIndex: 10,

    [`& ${reactAutosuggest}__suggestions-list`]: {
      listStyleType: 'none',
      padding: 0,
    },

    '& .suggestion-item': {
      cursor: 'pointer',

      '&:hover': {
        background: 'linear-gradient(0deg, rgba(54, 176, 201, 0.1), rgba(54, 176, 201, 0.1)), #FFFFFF',
      },

      '&.suggestion-item--selected': {
        background: theme.palette.primary.light,
      },
    },
  },
});
