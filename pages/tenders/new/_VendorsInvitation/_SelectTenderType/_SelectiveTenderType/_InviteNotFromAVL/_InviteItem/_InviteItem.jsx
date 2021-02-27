import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Grid, IconButton, TextField, Avatar, Box, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { withStyles } from '@material-ui/core/styles';
import Autosuggest from 'react-autosuggest';
import CloseIcon from '@material-ui/icons/Close';

import styles from './styles';
import { FastField } from 'formik';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestionValue(value) {
  return value.companyName;
}

function getSuggestions(list, value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  return list.filter(item => getSuggestionValue(item).includes(value));
}

function renderSuggestion(selected) {
  return suggestion => (
    <Box
      display="flex"
      alignItems="center"
      marginY={0.5}
      padding={1.5}
      className={clsx('suggestion-item', {
        'suggestion-item--selected': selected && selected.companyName === suggestion.companyName,
      })}
    >
      <Box marginRight={2}>
        <Avatar>Avatar</Avatar>
      </Box>

      <Box flexGrow={1} flexBasis={1} overflow="hidden">
        <Typography variant="h5">{suggestion.companyName}</Typography>
        {suggestion.isVerified && (
          <Typography variant="body2" color="textSecondary">
            <Box component="span" display="flex" alignItems="center">
              <CheckCircleOutlineIcon color="primary" fontSize="small" />
              <span>Verified by Really</span>
            </Box>
          </Typography>
        )}
      </Box>
    </Box>
  );
}

class InviteItem extends React.Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    value: this.props.companyName,
    selected: null,
    suggestions: [],
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const { vendors } = this.props;

    this.setState({
      suggestions: getSuggestions(vendors, value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  onSuggestionSelected = (event, { suggestion }) => {
    const { onChange, uid } = this.props;

    this.setState({
      selected: suggestion,
    });

    onChange(uid, {
      id: suggestion.id,
      companyName: suggestion.companyName,
      email: suggestion.email,
    });
  };

  onInputChange = (event, { newValue }) => {
    const { onChange, uid } = this.props;

    this.setState({
      value: newValue,
    });

    onChange(uid, {
      companyName: newValue,
    });
  };

  handleChangeInput = key => event => {
    const { onChange, uid } = this.props;

    onChange(uid, {
      [key]: event.target.value,
    });
  };

  handleRemoveItem = () => {
    const { uid, handleRemove } = this.props;
    handleRemove(uid);
  };

  render() {
    const { value, suggestions, selected } = this.state;
    const { canRemove, email, classes } = this.props;

    return (
      <Grid container spacing={3}>
        <Grid item sm={5} xs={12}>
          <div className={classes.autoSuggest}>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              onSuggestionSelected={this.onSuggestionSelected}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion(selected)}
              inputProps={{
                value,
                onChange: this.onInputChange,
              }}
              renderInputComponent={inputProps => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <TextField fullWidth variant="outlined" margin="dense" label="Company name" {...inputProps} />
              )}
              renderSuggestionsContainer={({ containerProps, children }) => (
                // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
                <div {...containerProps} className={classes.suggestList}>
                  {children}
                </div>
              )}
            />
          </div>
        </Grid>

        <Grid item sm={5} xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            margin="dense"
            label="Email Address"
            onChange={this.handleChangeInput('email')}
            value={email}
          />
        </Grid>

        {canRemove && (
          <Grid item sm={2} xs={12}>
            <IconButton onClick={this.handleRemoveItem}>
              <CloseIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>
    );
  }
}

// const InviteItem = ({ email, companyName, uid, onChange, handleRemove, canRemove, vendors }) => {
//   const [suggest, setSuggest] = useState({
//     value: '',
//     suggestions: [],
//   });

//   const handleChangeInput = useCallback(
//     key => event => {
//       onChange(uid, {
//         [key]: event.target.value,
//       });
//     },
//     [onChange, uid],
//   );

//   const handleRemoveItem = useCallback(() => {
//     handleRemove(uid);
//   }, [uid, handleRemove]);

//   const onSuggestionsFetchRequested = useCallback(
//     ({ value }) => {
//       setSuggest({
//         ...suggest,
//         value,
//         suggestions: getSuggestions(vendors, value),
//       });
//     },
//     [vendors, suggest],
//   );

//   const onSuggestionsClearRequested = useCallback(() => {
//     setSuggest({
//       value: '',
//       suggestions: [],
//     });
//   }, []);

//   const onInputChange = useCallback(
//     (event, { newValue }) => {
//       setSuggest({
//         ...suggest,
//         value: newValue,
//       });
//     },
//     [suggest],
//   );

//   return (
//     <Grid container spacing={3}>
//       <Grid item md={3} xs={12}>
//         <Autosuggest
//           suggestions={suggest.suggestions}
//           onSuggestionsFetchRequested={onSuggestionsFetchRequested}
//           onSuggestionsClearRequested={onSuggestionsClearRequested}
//           getSuggestionValue={getSuggestionValue}
//           renderSuggestion={renderSuggestion}
//           inputProps={{
//             value: suggest.value,
//             onChange: onInputChange,
//           }}
//           // eslint-disable-next-line react/jsx-props-no-spreading
//           renderInputComponent={inputProps => <TextField {...inputProps} label="Company name" />}
//         />
//       </Grid>

//       <Grid item md={3} xs={12}>
//         <TextField label="Email Address" onChange={handleChangeInput('email')} value={email} />
//       </Grid>

//       {canRemove && (
//         <Grid item md={3} xs={12}>
//           <IconButton onClick={handleRemoveItem}>
//             <CloseIcon />
//           </IconButton>
//         </Grid>
//       )}
//     </Grid>
//   );
// };

InviteItem.propTypes = {
  classes: PropTypes.object,
  vendors: PropTypes.array.isRequired,
  email: PropTypes.string,
  companyName: PropTypes.string,
  uid: PropTypes.string,
  onChange: PropTypes.func,
  handleRemove: PropTypes.func,
  canRemove: PropTypes.bool,
};

InviteItem.defaultProps = {
  canRemove: true,
};

export default withStyles(styles)(InviteItem);
